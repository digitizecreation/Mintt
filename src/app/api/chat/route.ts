// Chat proxy for the MINTT site. Keeps GROQ_API_KEY server-side and never
// passes user-controlled input straight to the upstream API.
//
// Request body: { messages: { role, content }[], model?: string, max_tokens?: number }
// Response:     { reply: string }   on success
//               { error: string }   on failure

const DEFAULT_MODEL = "llama-3.1-8b-instant";
const DEFAULT_MAX_TOKENS = 300;
const ALLOWED_ROLES = new Set(["system", "user", "assistant"]);

type ChatMessage = { role: string; content: string };

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured. Set GROQ_API_KEY on the server." },
      { status: 503 }
    );
  }

  let body: {
    messages?: ChatMessage[];
    model?: string;
    max_tokens?: number;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { messages, model = DEFAULT_MODEL, max_tokens = DEFAULT_MAX_TOKENS } = body ?? {};

  // Validate messages array.
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "`messages` must be a non-empty array." }, { status: 400 });
  }
  if (messages.length > 50) {
    return Response.json({ error: "Too many messages (max 50)." }, { status: 400 });
  }
  for (const m of messages) {
    if (!m || typeof m.role !== "string" || typeof m.content !== "string") {
      return Response.json({ error: "Each message must have string `role` and `content`." }, { status: 400 });
    }
    if (!ALLOWED_ROLES.has(m.role)) {
      return Response.json({ error: `Unknown role: ${m.role}` }, { status: 400 });
    }
    if (m.content.length > 4000) {
      return Response.json({ error: "Message content too long (max 4000 chars)." }, { status: 400 });
    }
  }

  // Clamp max_tokens so a bad client can't blow the upstream quota.
  const safeMaxTokens = Math.max(50, Math.min(1000, Number(max_tokens) || DEFAULT_MAX_TOKENS));

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: safeMaxTokens,
        temperature: 0.7,
      }),
    });

    if (!groqRes.ok) {
      const detail = await groqRes.text().catch(() => "");
      console.error("Groq upstream error:", groqRes.status, detail);
      return Response.json({ error: "Upstream chat service error." }, { status: 502 });
    }

    const data = await groqRes.json();
    const reply: string = data?.choices?.[0]?.message?.content?.trim() || "";

    return Response.json({ reply });
  } catch (err) {
    console.error("Chat proxy failure:", err);
    return Response.json({ error: "Failed to reach chat service." }, { status: 502 });
  }
}

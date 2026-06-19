"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FAQ, FAQ_CATEGORIES, type FaqCat } from "./faq-data";

type Msg = { role: "user" | "assistant"; content: string };
type Screen = "home" | "faq" | "chat";

const SYSTEM_PROMPT = `You are Aria, a friendly and professional AI assistant for mintt.™ — a women-led MSME digital marketing and web development agency in Vashi, Navi Mumbai, India. mintt serves 40+ brands with SEO, web development, SaaS, Meta ads, and CRM systems. Industries: manufacturing, healthcare, engineering, real estate. Contact: +91 81084 05170 | WhatsApp: +91 95944 01644 | contact.mintt.ai@gmail.com. Be concise, warm, and helpful. End with a CTA to contact mintt when relevant.`;

// ── Component ────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");
  const [activeCat, setActiveCat] = useState<FaqCat | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Aria 🌿\nHow can I help you today?" },
  ]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screen === "chat") {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, pending, screen]);

  // Reset transient state when toggling the panel.
  useEffect(() => {
    if (!open) {
      setError(null);
      setOpenQuestion(null);
    }
  }, [open]);

  function goFaq(cat: FaqCat) {
    setActiveCat(cat);
    setOpenQuestion(null);
    setScreen("faq");
  }

  function goChat() {
    setScreen("chat");
    // Focus the input after the screen transition.
    setTimeout(() => document.getElementById("mcw-input")?.focus(), 80);
  }

  function newChat() {
    setMessages([{ role: "assistant", content: "Hi! I'm Aria 🌿\nHow can I help you today?" }]);
    setError(null);
    goChat();
  }

  async function send() {
    const text = input.trim();
    if (!text || pending) return;

    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setError(null);
    setPending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...next.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || `Request failed (${res.status})`);
      setMessages([...next, { role: "assistant", content: data.reply || "…" }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setError(msg);
      setMessages([...next, { role: "assistant", content: `Sorry — ${msg}` }]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div
      id="mcw"
      style={{ fontFamily: "var(--font-widget), 'DM Sans', sans-serif" }}
      className="fixed bottom-6 right-6 z-[200]"
    >
      {/* ── FAB ─────────────────────────────────────── */}
      <motion.button
        type="button"
        id="mcw-fab"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative w-[58px] h-[58px] rounded-full text-white text-2xl flex items-center justify-center shadow-[0_6px_24px_rgba(255,106,0,0.45)] hover:shadow-[0_8px_28px_rgba(255,106,0,0.55)] transition-shadow"
        style={{ background: "linear-gradient(145deg, #FF8C42 0%, #FF6A00 60%, #E55A00 100%)" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              💬
            </motion.span>
          )}
        </AnimatePresence>
        <span
          className="absolute top-[3px] right-[3px] w-[11px] h-[11px] rounded-full border-[2.5px] border-white animate-pulse"
          style={{ background: "#FFB694" }}
        />
      </motion.button>

      {/* ── Panel ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mcw-panel"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 0.68, 0, 1.2] }}
            className="absolute bottom-[72px] right-0 w-[368px] h-[540px] max-h-[80vh] flex flex-col rounded-[22px] overflow-hidden bg-white text-[#1a1a1a] shadow-[0_16px_56px_rgba(0,0,0,0.16),0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.07]"
          >
            {/* Header */}
            <div
              className="px-[18px] py-[16px] flex items-center justify-between flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #0E0E0E 0%, #1a1410 60%, #2a1a0a 100%)" }}
            >
              <div className="flex items-center gap-[11px]">
                <div className="w-10 h-10 rounded-full bg-white/[0.18] flex items-center justify-center text-[20px] flex-shrink-0">
                  🌿
                </div>
                <div>
                  <div className="text-white text-[15px] font-semibold tracking-[-0.2px] leading-[1.3]">
                    Aria · mintt.™
                  </div>
                  <div className="text-white/80 text-[11.5px] flex items-center gap-[5px] mt-[2px]">
                    <span
                      className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                      style={{ background: "#FFB694" }}
                    />
                    Online · Ready to help
                  </div>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <button
                  type="button"
                  onClick={newChat}
                  title="New Chat"
                  className="w-8 h-8 rounded-lg bg-white/[0.14] hover:bg-white/[0.26] border-none text-white text-[15px] flex items-center justify-center transition-colors"
                >
                  ✏️
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  title="Close"
                  className="w-8 h-8 rounded-lg bg-white/[0.14] hover:bg-white/[0.26] border-none text-white text-[15px] flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* ── Screen: HOME ─────────────────────────── */}
            {screen === "home" && (
              <div className="flex-1 overflow-y-auto px-[18px] py-5 flex flex-col gap-2 min-h-0">
                <div
                  className="rounded-2xl px-4 py-[14px] text-[13.5px] leading-[1.65] mb-1"
                  style={{ background: "#FFF5EC", border: "1px solid rgba(255,106,0,0.18)", color: "#1a1a1a" }}
                >
                  👋 Hi! I&apos;m <strong style={{ color: "#FF6A00", fontWeight: 600 }}>Aria</strong>, your mintt.™
                  assistant. Browse FAQs below or type your question to chat with me directly.
                </div>

                <button
                  type="button"
                  onClick={goChat}
                  className="text-white rounded-[14px] px-4 py-[13px] cursor-pointer text-left flex items-center gap-3 transition-all hover:translate-y-[-1px] mb-[2px] border-none"
                  style={{ background: "#FF6A00" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E55A00")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#FF6A00")}
                >
                  <span className="text-[20px] flex-shrink-0">🤖</span>
                  <span className="flex-1 flex flex-col gap-[2px]">
                    <span className="text-[13.5px] font-semibold text-white leading-[1.3]">
                      Chat with Aria AI
                    </span>
                    <span className="text-[11.5px] text-white/75">Ask your own question</span>
                  </span>
                  <span className="text-[18px] text-white/60">›</span>
                </button>

                <div className="text-[10.5px] text-[#a0a0a0] font-semibold tracking-[0.7px] uppercase pt-1 pb-[2px]">
                  Or Browse FAQs
                </div>

                {FAQ_CATEGORIES.map((c) => (
                  <button
                    key={c.cat}
                    type="button"
                    onClick={() => goFaq(c.cat)}
                    className="flex items-center gap-[11px] px-[14px] py-[11px] rounded-[13px] border border-[#ebebeb] bg-[#fafafa] cursor-pointer transition-all text-left w-full hover:translate-x-[2px]"
                    style={{ ["--hover-bg" as string]: "#FFF5EC", ["--hover-border" as string]: "rgba(255,106,0,0.3)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FFF5EC";
                      e.currentTarget.style.borderColor = "rgba(255,106,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fafafa";
                      e.currentTarget.style.borderColor = "#ebebeb";
                    }}
                  >
                    <span className="text-[19px] flex-shrink-0">{c.icon}</span>
                    <span className="flex-1 flex flex-col gap-[2px]">
                      <span className="text-[13px] font-semibold text-[#1a1a1a] leading-[1.3]">{c.title}</span>
                      <span className="text-[11px] text-[#999]">{c.sub}</span>
                    </span>
                    <span className="text-[15px] text-[#bbb]">›</span>
                  </button>
                ))}

                <div className="text-center text-[10.5px] text-[#bbb] pt-1 tracking-[0.2px]">
                  Powered by Groq AI · <b style={{ color: "#999", fontWeight: 500 }}>mintt.™</b>
                </div>
              </div>
            )}

            {/* ── Screen: FAQ ─────────────────────────── */}
            {screen === "faq" && activeCat && (
              <div className="flex flex-col h-full min-h-0">
                <div className="px-[18px] py-[13px] flex items-center gap-[10px] border-b border-[#f0f0f0] flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setScreen("home")}
                    className="w-8 h-8 rounded-lg bg-[#f4f4f4] hover:bg-[#e8e8e8] border-none text-[#555] text-[16px] flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    ←
                  </button>
                  <span className="text-[14.5px] font-semibold text-[#111]">{FAQ[activeCat].title}</span>
                </div>
                <div className="flex-1 overflow-y-auto px-[18px] py-4 flex flex-col gap-[7px] min-h-0">
                  {FAQ[activeCat].items.map((item, i) => {
                    const isOpen = openQuestion === i;
                    return (
                      <div key={i}>
                        <button
                          type="button"
                          onClick={() => setOpenQuestion(isOpen ? null : i)}
                          className="w-full px-[15px] py-[12px] rounded-[13px] cursor-pointer text-[13px] text-left leading-[1.5] font-medium transition-all flex items-center justify-between gap-2 border"
                          style={{
                            background: isOpen ? "#FFF5EC" : "#f7f7f7",
                            borderColor: isOpen ? "rgba(255,106,0,0.3)" : "#ececec",
                            color: isOpen ? "#FF6A00" : "#2a2a2a",
                          }}
                        >
                          <span>{item.q}</span>
                          <span
                            className="text-[12px] flex-shrink-0 transition-transform"
                            style={{
                              color: isOpen ? "#FF6A00" : "#bbb",
                              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                            }}
                          >
                            ›
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            className="px-[15px] py-[12px] rounded-[13px] text-[12.5px] leading-[1.7] mt-[6px]"
                            style={{
                              background: "#FFF5EC",
                              border: "1px solid rgba(255,106,0,0.18)",
                              color: "#7a3e00",
                            }}
                          >
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="text-center text-[10.5px] text-[#bbb] px-4 py-[7px] border-t border-[#f4f4f4] tracking-[0.2px]">
                  Powered by Groq AI · <b style={{ color: "#999", fontWeight: 500 }}>mintt.™</b>
                </div>
              </div>
            )}

            {/* ── Screen: CHAT ─────────────────────────── */}
            {screen === "chat" && (
              <div className="flex flex-col h-full min-h-0">
                <div className="px-[18px] py-[13px] flex items-center gap-[10px] border-b border-[#f0f0f0] flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setScreen("home")}
                    className="w-8 h-8 rounded-lg bg-[#f4f4f4] hover:bg-[#e8e8e8] border-none text-[#555] text-[16px] flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    ←
                  </button>
                  <span className="text-[14.5px] font-semibold text-[#111]">Chat with Aria AI</span>
                </div>

                <div ref={scrollRef} className="flex-1 overflow-y-auto px-[18px] py-4 flex flex-col gap-[10px] min-h-0">
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={
                        m.role === "user"
                          ? "self-end bg-[#FF6A00] text-white rounded-2xl rounded-br-md px-[14px] py-[10px] text-[13px] leading-[1.65] max-w-[83%]"
                          : "self-start rounded-2xl rounded-bl-md px-[14px] py-[10px] text-[13px] leading-[1.65] max-w-[83%] whitespace-pre-wrap"
                      }
                      style={
                        m.role === "assistant"
                          ? { background: "#FFF5EC", border: "1px solid rgba(255,106,0,0.18)", color: "#1a1a1a" }
                          : undefined
                      }
                    >
                      {m.content}
                    </motion.div>
                  ))}
                  {pending && (
                    <div
                      className="self-start rounded-2xl rounded-bl-md px-[14px] py-[10px] text-[13px] max-w-[83%] flex items-center gap-[6px]"
                      style={{ background: "#FFF5EC", border: "1px solid rgba(255,106,0,0.18)", color: "rgba(122,62,0,0.6)" }}
                    >
                      <span className="text-[12px]">Aria is typing</span>
                      <span className="flex gap-[3px]">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="w-[6px] h-[6px] rounded-full inline-block"
                            style={{
                              background: "rgba(255,106,0,0.6)",
                              animation: "dot 1.2s infinite",
                              animationDelay: `${i * 0.2}s`,
                            }}
                          />
                        ))}
                      </span>
                    </div>
                  )}
                </div>

                {error && (
                  <div
                    className="px-4 py-2 text-[12.5px]"
                    style={{ background: "rgba(255,0,0,0.06)", color: "#b33", borderTop: "1px solid rgba(255,0,0,0.15)" }}
                  >
                    {error}
                  </div>
                )}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    send();
                  }}
                  className="px-[18px] py-[12px] border-t border-[#f0f0f0] flex gap-[9px] flex-shrink-0 items-center bg-white"
                >
                  <input
                    id="mcw-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message…"
                    disabled={pending}
                    className="flex-1 px-[15px] py-[10px] border-[1.5px] border-[#e0e0e0] focus:border-[#FF6A00] rounded-xl text-[13px] text-[#1a1a1a] outline-none transition-colors leading-[1.4] disabled:opacity-50 placeholder:text-[#bbb]"
                    style={{ background: "#fafafa" }}
                    onFocus={(e) => (e.currentTarget.style.background = "#fff")}
                    onBlur={(e) => (e.currentTarget.style.background = "#fafafa")}
                  />
                  <button
                    type="submit"
                    disabled={pending || !input.trim()}
                    className="w-10 h-10 flex-shrink-0 bg-[#FF6A00] hover:bg-[#E55A00] disabled:opacity-40 disabled:hover:bg-[#FF6A00] text-white border-none rounded-[11px] cursor-pointer text-[16px] flex items-center justify-center transition-all disabled:hover:scale-100 hover:scale-[1.06]"
                  >
                    ➤
                  </button>
                </form>

                <div className="text-center text-[10.5px] text-[#bbb] px-4 py-[7px] border-t border-[#f4f4f4] tracking-[0.2px]">
                  Powered by Groq AI · <b style={{ color: "#999", fontWeight: 500 }}>mintt.™</b>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline keyframes for the typing dots (Tailwind doesn't have these) */}
      <style jsx global>{`
        @keyframes dot {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

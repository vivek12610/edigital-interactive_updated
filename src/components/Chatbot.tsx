"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowUpRight } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string; sources?: { title: string; url: string }[] };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm the eDigital assistant. Ask me about any service — SEO, AI visibility, ads, web builds — or how we've helped businesses like yours." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply, sources: data.sources }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Something went wrong reaching our assistant — please try the contact form instead." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[440px] w-[340px] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-paper">
            <p className="font-display text-sm font-semibold">eDigital Assistant</p>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="focus-ring rounded p-1 hover:text-signal-light">
              <X size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${m.role === "user" ? "bg-ink text-paper" : "bg-paper text-ink"}`}>
                  <p>{m.text}</p>
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {m.sources.map((s) => (
                        <a key={s.url} href={s.url} className="flex items-center gap-1 text-xs text-signal underline underline-offset-2">
                          {s.title} <ArrowUpRight size={11} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && <p className="text-xs text-ink/40">Thinking…</p>}
          </div>

          <div className="flex items-center gap-2 border-t border-line p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about a service…"
              className="focus-ring flex-1 rounded-lg border border-line px-3 py-2 text-sm"
            />
            <button onClick={send} aria-label="Send message" className="focus-ring rounded-lg bg-ink p-2 text-paper hover:bg-signal">
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat assistant"
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-signal text-paper shadow-lift transition hover:bg-signal-dark"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { retrieveContext } from "@/lib/retrieval";
import { services } from "@/lib/data/services";

export async function POST(req: NextRequest) {
  const { message } = await req.json().catch(() => ({ message: "" }));

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const lower = message.toLowerCase().trim();

  // Friendly handling for greetings / very short openers so it never feels broken.
  if (/^(hi|hey|hello|yo|sup)\b/.test(lower) || lower.length <= 3) {
    return NextResponse.json({
      reply:
        "Hey! I can help you learn about our services — try asking about SEO, AI search, performance marketing, web design, or any industry we work with.",
      sources: []
    });
  }

  const chunks = retrieveContext(message);

  // --- Swap point for a real LLM call -------------------------------------
  // if (process.env.ANTHROPIC_API_KEY) {
  //   const res = await fetch("https://api.anthropic.com/v1/messages", {
  //     method: "POST",
  //     headers: {
  //       "x-api-key": process.env.ANTHROPIC_API_KEY!,
  //       "anthropic-version": "2023-06-01",
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       model: "claude-sonnet-4-6",
  //       max_tokens: 400,
  //       system: `You are the eDigital Interactive site assistant. Answer only from this context:\n${chunks.map(c => `${c.title}: ${c.text}`).join("\n")}`,
  //       messages: [{ role: "user", content: message }]
  //     })
  //   });
  //   const data = await res.json();
  //   return NextResponse.json({ reply: data.content?.[0]?.text, sources: chunks });
  // }
  // -------------------------------------------------------------------------

  if (chunks.length === 0) {
    // Helpful fallback instead of a dead end: surface a few real services to explore.
    const suggestions = services.slice(0, 4).map((s) => ({ title: s.name, url: `/services/${s.slug}` }));
    return NextResponse.json({
      reply:
        "I didn't catch an exact match for that — here are a few things we help clients with. Tap one to see details, or head to the contact page to talk to a strategist directly.",
      sources: suggestions
    });
  }

  const top = chunks[0];
  const reply =
    `${top.text} ` +
    (chunks.length > 1 ? `We also cover ${chunks.slice(1).map((c) => c.title).join(" and ")}, which may be relevant. ` : "") +
    `Want to see the full details or talk to a strategist?`;

  return NextResponse.json({ reply, sources: chunks });
}

import { NextRequest, NextResponse } from "next/server";
import { retrieveContext } from "@/lib/retrieval";

export async function POST(req: NextRequest) {
  const { message } = await req.json().catch(() => ({ message: "" }));

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
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
    return NextResponse.json({
      reply:
        "I couldn't find a specific match for that in our services yet — could you tell me a bit more, or would you like to book a call with a strategist?",
      sources: []
    });
  }

  const top = chunks[0];
  const reply =
    `${top.text} ` +
    (chunks.length > 1 ? `We also cover ${chunks.slice(1).map((c) => c.title).join(" and ")}, which may be relevant. ` : "") +
    `Want to see the full details or talk to a strategist?`;

  return NextResponse.json({ reply, sources: chunks });
}

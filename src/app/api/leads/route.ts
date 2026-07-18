import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const leadSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  email: z.string().email("Enter a valid email address"),
  whatsapp: z.string().min(7, "Enter a valid phone number").max(20),
  serviceType: z.string().min(2),
  budget: z.number().int().min(0).max(1_000_000),
  message: z.string().max(2000).optional().or(z.literal("")),
  source: z.string().max(300).optional()
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json({ error: firstIssue?.message ?? "Invalid submission." }, { status: 422 });
  }

  const { name, email, whatsapp, serviceType, budget, message, source } = parsed.data;

  try {
    const lead = await prisma.lead.create({
      data: { name, email, whatsapp, serviceType, budget, message: message || null, source }
    });

    // Fire-and-forget WhatsApp notification hook. Wire up the WhatsApp Cloud API
    // (or any provider) here using WHATSAPP_TOKEN / WHATSAPP_PHONE_ID from env.
    // Kept non-blocking and error-safe so a WhatsApp outage never breaks lead capture.
    notifyWhatsApp(lead).catch((err) => console.error("WhatsApp notify failed:", err));

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("Lead creation failed:", err);
    return NextResponse.json({ error: "Could not save your request. Please try again." }, { status: 500 });
  }
}

async function notifyWhatsApp(lead: { id: string; name: string; whatsapp: string; serviceType: string }) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  if (!token || !phoneId) return; // Not configured yet — safe no-op.

  // Example Cloud API call — replace `to` with your sales team's number(s)
  // or the lead's own WhatsApp number depending on your opt-in flow.
  await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: lead.whatsapp,
      type: "text",
      text: { body: `Hi ${lead.name}, thanks for reaching out about ${lead.serviceType}! A strategist will be in touch shortly.` }
    })
  });
}

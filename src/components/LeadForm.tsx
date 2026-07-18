"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/data/services";

type Props = {
  source?: string;
  defaultService?: string;
  compact?: boolean;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const BUDGET_MIN = 500;
const BUDGET_MAX = 50000;
const BUDGET_STEP = 500;

export default function LeadForm({ source, defaultService, compact }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [serviceType, setServiceType] = useState(defaultService ?? services[0].name);
  const [budget, setBudget] = useState(5000);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          whatsapp,
          serviceType,
          budget,
          message,
          source: source ?? (typeof window !== "undefined" ? window.location.pathname : undefined)
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setWhatsapp("");
      setMessage("");
      setBudget(5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 className="text-signal" size={36} />
        <p className="font-display text-lg font-semibold">Request received.</p>
        <p className="text-sm text-ink/60">
          A strategist will reach out on WhatsApp or email within one business day. In the meantime, feel free to browse our{" "}
          <a href="/casestudy" className="text-signal underline underline-offset-2">case studies</a>.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-secondary mt-2">Submit another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`card ${compact ? "p-5" : "p-6 md:p-8"} space-y-5`}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink/70">Name</label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jordan Patel"
            className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink/70">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jordan@company.com"
            className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-xs font-medium text-ink/70">Phone (WhatsApp)</label>
          <input
            id="whatsapp"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+91 98765 43210"
            className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="serviceType" className="mb-1.5 block text-xs font-medium text-ink/70">Service type</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="budget" className="text-xs font-medium text-ink/70">Monthly budget</label>
          <span className="font-mono text-sm font-semibold text-signal">{currencyFormatter.format(budget)}</span>
        </div>
        <input
          id="budget"
          type="range"
          min={BUDGET_MIN}
          max={BUDGET_MAX}
          step={BUDGET_STEP}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full accent-signal"
        />
        <div className="mt-1 flex justify-between font-mono text-[11px] text-ink/40">
          <span>{currencyFormatter.format(BUDGET_MIN)}</span>
          <span>{currencyFormatter.format(BUDGET_MAX)}+</span>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink/70">Message (optional)</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Tell us about your goals, current channels, or timeline."
          className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-coral/10 px-3 py-2 text-sm text-coral-dark">
          <AlertCircle size={16} /> {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? <Loader2 className="animate-spin" size={16} /> : null}
        {status === "loading" ? "Sending..." : "Request my growth audit"}
      </button>
      <p className="text-center text-[11px] text-ink/40">We reply on WhatsApp or email within one business day. No spam, ever.</p>
    </form>
  );
}

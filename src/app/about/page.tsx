import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "About" };

const values = [
  { title: "Traceable, not theatrical", detail: "Every recommendation ties back to a ranking, a conversion, or a rupee — not an impression count." },
  { title: "One team, full funnel", detail: "SEO, AI visibility, paid media, content, and engineering sit in one room, not five vendor invoices." },
  { title: "Built to compound", detail: "We sequence work so month six is stronger than month one, instead of resetting the plan every quarter." }
];

const timeline = [
  { year: "2016", detail: "Started as a two-person SEO consultancy working with local service businesses." },
  { year: "2019", detail: "Added performance marketing and web development as clients asked for a single accountable partner." },
  { year: "2023", detail: "Built out AI automation and agent development as WhatsApp and chat became primary lead channels." },
  { year: "2025", detail: "Launched dedicated AI Search Optimization (GEO) practice as AI Overviews and chat assistants reshaped search." }
];

export default function AboutPage() {
  return (
    <div>
      <section className="section-pad border-b border-line bg-white">
        <div className="container-edi max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            We started because marketing vendors don't talk to each other. So we built a team that does.
          </h1>
          <p className="mt-5 text-ink/60">
            eDigital Interactive exists because most brands end up managing three or four disconnected vendors — an SEO shop, a paid media freelancer, a dev agency, a social team — none of whom see the full picture. We run all of it as one connected system, reported in one place, accountable to one number: growth you can actually trace.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edi">
          <p className="eyebrow">What we believe</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-signal pt-4">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-y border-line">
        <div className="container-edi max-w-2xl">
          <p className="eyebrow">How we got here</p>
          <div className="mt-8 space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-5">
                <p className="font-mono text-sm font-bold text-signal shrink-0 w-14">{t.year}</p>
                <p className="text-sm text-ink/70">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edi flex flex-col items-start gap-5 rounded-2xl bg-ink p-10 text-paper md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">Want to see if we're a fit?</h2>
            <p className="mt-2 text-sm text-paper/60">A 20-minute call tells you more than another sales deck ever will.</p>
          </div>
          <Link href="/contact" className="btn-primary bg-signal hover:bg-signal-light shrink-0">
            Book a call <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

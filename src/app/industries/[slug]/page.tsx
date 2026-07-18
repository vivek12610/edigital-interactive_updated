import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { industries, getIndustryBySlug } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  return { title: industry.name, description: industry.summary };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return notFound();

  const relatedServices = services.filter((s) => industry.services.includes(s.slug));

  return (
    <div>
      <section className="section-pad border-b border-line bg-white">
        <div className="container-edi">
          <p className="eyebrow">{industry.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">{industry.tagline}</h1>
          <p className="mt-4 max-w-2xl text-ink/60">{industry.summary}</p>
          <Link href="/contact" className="btn-primary mt-7">Get an industry-specific audit <ArrowUpRight size={16} /></Link>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {industry.stats.map((stat) => (
              <div key={stat.label} className="card p-5">
                <p className="font-mono text-2xl font-bold text-signal">{stat.value}</p>
                <p className="mt-1 text-xs text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edi grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The challenges</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">What makes {industry.name.toLowerCase()} different</h2>
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-ink/70">
                  <AlertCircle size={16} className="mt-0.5 shrink-0 text-coral" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">How we run it</h2>
            <div className="mt-6 space-y-5">
              {industry.approach.map((a, i) => (
                <div key={a.title} className="border-t-2 border-signal pt-3">
                  <p className="font-mono text-xs text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-display text-base font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-y border-line">
        <div className="container-edi">
          <p className="eyebrow">Relevant services</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">Services we typically run for {industry.name.toLowerCase()}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card focus-ring p-5 transition hover:border-signal">
                <p className="font-display text-base font-semibold">{s.name}</p>
                <p className="mt-1 text-sm text-ink/60">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink">
        <div className="container-edi grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-paper">
            <p className="eyebrow !text-signal-light">Next step</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">Let's map your {industry.name.toLowerCase()} growth plan.</h2>
          </div>
          <LeadForm source={`/industries/${industry.slug}`} />
        </div>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import FaqAccordion from "@/components/ui/FaqAccordion";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-pad border-b border-line bg-white">
        <div className="container-edi grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">{service.eyebrow} · {service.category}</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">{service.name}</h1>
            <p className="mt-3 text-lg text-ink/70">{service.tagline}</p>
            <p className="mt-4 max-w-xl text-ink/60">{service.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {service.subServices.map((sub) => (
                <span key={sub} className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink/70">{sub}</span>
              ))}
            </div>
            <Link href="/contact" className="btn-primary mt-8">Get a free {service.name.toLowerCase()} audit <ArrowUpRight size={16} /></Link>
          </div>
          <div className="card p-6">
            <p className="eyebrow">What's included</p>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-ink/75">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-signal" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container-edi">
          <p className="eyebrow">How it runs</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">Our process</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="border-t-2 border-signal pt-4">
                <p className="font-mono text-xs text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white border-y border-line">
        <div className="container-edi max-w-3xl">
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-2 mb-8 font-display text-3xl font-bold tracking-tight">Common questions about {service.name.toLowerCase()}</h2>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="container-edi">
            <p className="eyebrow">Pairs well with</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className="card focus-ring p-5 transition hover:border-signal">
                  <p className="font-display text-base font-semibold">{r.name}</p>
                  <p className="mt-1 text-sm text-ink/60">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead form */}
      <section className="section-pad bg-ink">
        <div className="container-edi grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-paper">
            <p className="eyebrow !text-signal-light">Next step</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">Let's scope your {service.name.toLowerCase()} plan.</h2>
            <p className="mt-4 max-w-md text-sm text-paper/60">Share your budget and goals — we'll come back with a realistic plan, not a generic proposal template.</p>
          </div>
          <LeadForm source={`/services/${service.slug}`} defaultService={service.name} />
        </div>
      </section>
    </div>
  );
}

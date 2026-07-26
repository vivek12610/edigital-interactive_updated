import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getCaseStudyBySlug } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import LeadForm from "@/components/LeadForm";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) return notFound();

  const metrics = [
    { label: cs.metricLabel1, value: cs.metricValue1 },
    { label: cs.metricLabel2, value: cs.metricValue2 },
    { label: cs.metricLabel3, value: cs.metricValue3 }
  ].filter((m) => m.label && m.value);

  return (
    <div>
      <section className="section-pad border-b border-line bg-white">
        <div className="container-edi max-w-3xl">
          <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-signal-dark">{cs.category}</span>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{cs.title}</h1>
          <p className="mt-3 text-ink/60">{cs.summary}</p>
          <p className="mt-2 text-xs text-ink/40">Client: {cs.clientName}{cs.industry ? ` · ${cs.industry}` : ""}</p>

          {cs.coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={urlFor(cs.coverImage).width(1000).url()} alt={cs.title} className="mt-6 w-full rounded-2xl" />
          )}

          {metrics.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="card p-5">
                  <p className="font-mono text-2xl font-bold text-signal-dark">{m.value}</p>
                  <p className="mt-1 text-xs text-ink/60">{m.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edi max-w-3xl space-y-10">
          <div>
            <p className="eyebrow">The challenge</p>
            <div className="prose prose-neutral mt-3 max-w-none prose-headings:font-display">
              <PortableText value={cs.challenge} />
            </div>
          </div>
          <div>
            <p className="eyebrow">The solution</p>
            <div className="prose prose-neutral mt-3 max-w-none prose-headings:font-display">
              <PortableText value={cs.solution} />
            </div>
          </div>
          <div>
            <p className="eyebrow">The results</p>
            <div className="prose prose-neutral mt-3 max-w-none prose-headings:font-display">
              <PortableText value={cs.resultsBody} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink">
        <div className="container-edi grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-paper">
            <p className="eyebrow !text-signal-light">Want results like this?</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">Let's map what it'd take for your business.</h2>
          </div>
          <LeadForm source={`/casestudy/${cs.slug}`} />
        </div>
      </section>
    </div>
  );
}
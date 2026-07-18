import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data/industries";

export const metadata = { title: "Industries" };

export default function IndustriesIndexPage() {
  return (
    <div className="section-pad">
      <div className="container-edi">
        <p className="eyebrow">Industries</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">Playbooks built for your category.</h1>
        <p className="mt-4 max-w-xl text-ink/60">Generic marketing advice doesn't survive contact with a real industry. Here's how we adapt the playbook.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card focus-ring group p-6 transition hover:border-signal hover:shadow-lift">
              <p className="eyebrow">{ind.eyebrow}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{ind.name}</h3>
              <p className="mt-2 text-sm text-ink/60">{ind.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal opacity-0 transition group-hover:opacity-100">
                See the playbook <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

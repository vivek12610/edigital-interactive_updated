import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, LineChart, Cpu, Users2, GraduationCap } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ClientLogos from "@/components/ui/ClientLogos";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

const serviceTags = ["SEO", "AI Search", "Performance Marketing", "Social Media", "Web Design", "Content Marketing"];

const whyChooseUs = [
  { icon: Sparkles, title: "Comprehensive Digital Solutions", detail: "SEO, AI visibility, paid media, content, and web development — run as one connected system, not five disconnected vendors.", gradient: "linear-gradient(135deg, #1C1C1C 0%, #3A0F10 100%)" },
  { icon: LineChart, title: "Data-Driven & ROI-Focused", detail: "Every campaign is tied back to rankings, traffic, and revenue — reported monthly in plain numbers, not vanity metrics.", gradient: "linear-gradient(135deg, #2A0B0C 0%, #121212 100%)" },
  { icon: Cpu, title: "Cutting-Edge Tools & AI", detail: "From GEO and AI Overviews optimization to WhatsApp automation, we build with the tools shaping search today.", gradient: "linear-gradient(135deg, #121212 0%, #501417 100%)" },
  { icon: Users2, title: "Expert Team & Dedicated Support", detail: "A senior, accountable team for every account — not a rotating cast of freelancers learning on your budget.", gradient: "linear-gradient(135deg, #3A0F10 0%, #1C1C1C 100%)" }
];

const featuredCaseStudy = {
  category: "SEO",
  title: "Legacy IAS Academy",
  detail: "Grew organic users from 0 to 120,000 in 10 months and reached 100% keyword share-of-voice in category.",
  href: "/casestudy"
};

const portfolioCategories = ["SEO", "Performance Marketing", "Social Media", "Web Design"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad">
        <div className="container-edi text-center">
          <p className="eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" /> SEO · AI Visibility · Performance Marketing · Web Development
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            We drive real growth to your business <ArrowUpRight className="inline -translate-y-2 text-signal-dark" size={40} />
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink/60 md:text-lg">
            Unlock your brand's potential with SEO, AI search optimization, and performance marketing built to compound. From strategy to execution, we drive growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-accent">Get a Free Audit <ArrowUpRight size={16} /></Link>
            <Link href="/casestudy" className="btn-secondary">See client results</Link>
          </div>

          {/* Three-card row */}
          <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
            <div className="card p-6">
              <p className="font-display text-lg font-bold">Services</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceTags.map((tag, i) => (
                  <span key={tag} className={`tag-pill ${i % 2 === 0 ? "bg-ink text-paper border-ink" : ""}`}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-ink p-6 text-paper">
              <p className="font-display text-4xl font-bold">100+</p>
              <p className="mt-2 text-sm text-paper/60">brands scaled with SEO, AI search, and performance marketing.</p>
            </div>

            <div className="card p-6">
              <p className="font-display text-2xl leading-none text-signal-dark">&ldquo;</p>
              <p className="mt-1 font-display text-base font-semibold leading-snug">
                Our organic traffic tripled and the reporting finally made sense to our leadership team.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal text-xs font-bold text-ink">MK</span>
                <span className="text-xs text-ink/50">Marketing Director, D2C brand</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us - dark 2x2 */}
      <section className="section-pad bg-ink text-paper">
        <div className="container-edi grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow !text-signal-light">Why partner with us</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Why our clients choose us as partners</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 p-6"
                style={{ background: item.gradient }}
              >
                <item.icon className="pointer-events-none absolute -right-4 -top-4 text-white/[0.07]" size={120} strokeWidth={1.2} />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-signal text-white">
                  <item.icon size={18} />
                </span>
                <h3 className="relative mt-4 font-display text-base font-semibold">{item.title}</h3>
                <p className="relative mt-2 text-sm text-paper/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / get to know us */}
      <section className="section-pad">
        <div className="container-edi grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Get to know us a little more</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Seven-plus years of turning search into pipeline.</h2>
            <p className="mt-4 max-w-md text-sm text-ink/60">
              eDigital Interactive is a performance-driven digital marketing agency helping brands grow through SEO, AI search visibility, and paid media. We're dedicated to delivering measurable value in an ever-evolving marketplace.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card flex flex-col justify-center p-6">
              <p className="font-display text-3xl font-bold text-signal-dark">
                <AnimatedCounter target={100} suffix="+" />
              </p>
              <p className="mt-1 text-xs text-ink/60">Clients served</p>
            </div>
            <div className="card flex flex-col justify-center p-6">
              <p className="font-display text-3xl font-bold text-signal-dark">
                <AnimatedCounter target={7} suffix="+" />
              </p>
              <p className="mt-1 text-xs text-ink/60">Years of experience</p>
            </div>
            <div className="card flex flex-col justify-center p-6">
              <p className="font-display text-3xl font-bold text-signal-dark">
                <AnimatedCounter target={30} suffix="+" />
              </p>
              <p className="mt-1 text-xs text-ink/60">Marketing professionals</p>
            </div>
            <div className="rounded-3xl bg-ink p-6 text-paper">
              <p className="font-display text-lg font-bold">#1 Team</p>
              <p className="mt-2 text-xs text-paper/60">We've helped dozens of partners, from startups to established brands, hit real growth targets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="section-pad bg-card border-y border-line">
        <div className="container-edi">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Incredible results we've delivered</h2>
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((cat, i) => (
                <span key={cat} className={`tag-pill ${i === 0 ? "bg-ink text-paper border-ink" : ""}`}>{cat}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div
              className="relative overflow-hidden rounded-3xl p-8 text-paper"
              style={{ background: "linear-gradient(135deg, #121212 0%, #4A1215 60%, #E5484D 160%)" }}
            >
              <GraduationCap className="pointer-events-none absolute -right-6 -bottom-6 text-white/10" size={160} strokeWidth={1} />
              <span className="relative tag-pill bg-white text-ink border-white">{featuredCaseStudy.category}</span>
              <h3 className="relative mt-4 font-display text-xl font-bold">{featuredCaseStudy.title}</h3>
              <p className="relative mt-2 text-sm text-paper/70">{featuredCaseStudy.detail}</p>
              <Link href={featuredCaseStudy.href} className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-light">
                View case study <ArrowRight size={14} />
              </Link>
            </div>
            <div className="rounded-3xl bg-ink p-8 text-paper">
              <p className="font-display text-lg font-bold">186% increase in organic users</p>
              <p className="mt-2 text-sm text-paper/60">Watania Takaful reached top-5 rankings on 70% of tracked keywords within 8 months of engagement.</p>
              <Link href="/casestudy" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-light">
                See more results <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad">
        <div className="container-edi">
          <p className="eyebrow">What we run</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">One team, every growth lever.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card focus-ring group p-6 transition hover:border-signal-dark hover:shadow-lift">
                <p className="eyebrow">{s.eyebrow}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-ink/60">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal-dark opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn-secondary">View all 15 services</Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-ink text-paper">
        <div className="container-edi">
          <p className="eyebrow !text-signal-light">Built for your category</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Playbooks by industry, not templates.</h2>
          {/* <div className="mt-10 grid gap-4 md:grid-cols-3">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="focus-ring group rounded-3xl border border-paper/15 p-6 transition hover:border-signal-light">
                <p className="eyebrow !text-signal-light">{ind.eyebrow}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm text-paper/60">{ind.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal-light opacity-0 transition group-hover:opacity-100">
                  See the playbook <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div> */}


<div className="mt-10 grid gap-4 md:grid-cols-3">
            {industries.map((ind) => {
              //UPDATING SIZE OF 3 IMAGES LAW FIRM,HEALTHCARE,SALON

              // const bgImage: Record<string, string> = {
              //   "law-firms": "/industry-law-firms.jpg",
              //   salon: "/industry-salons.jpg",
              //   healthcare: "/industry-healthcare.jpg"
              // };
              // const image = bgImage[ind.slug];

              const bgImage: Record<string, string> = {
  "law-firms": "/industry-law-firms.jpg",
  salon: "/industry-salons.jpg",
  healthcare: "/industry-healthcare.jpg"
};
const bgSize: Record<string, string> = {
  "law-firms": "60%",
  salon: "cover",
  healthcare: "44%"
};
const image = bgImage[ind.slug];
const size = bgSize[ind.slug] ?? "cover";
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="focus-ring group relative overflow-hidden rounded-3xl border border-paper/15 p-6 transition hover:border-signal-light"
                  style={
                    image
                      ? {
                          backgroundImage: `linear-gradient(180deg, rgba(14,14,14,0.55) 0%, rgba(14,14,14,0.9) 78%), url('${image}')`,
                          backgroundSize: size,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }
                      : undefined
                  }
                >
                  <p className="eyebrow !text-signal-light">{ind.eyebrow}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-paper">{ind.name}</h3>
                  <p className="mt-2 text-sm text-paper/70">{ind.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal-light opacity-0 transition group-hover:opacity-100">
                    See the playbook <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Client logos */}
      <section className="section-pad overflow-hidden">
        <div className="container-edi text-center">
          <p className="eyebrow">Clients we've enjoyed working with</p>
          <div className="mt-8">
            <ClientLogos />
          </div>
        </div>
      </section>

      {/* Yellow CTA band */}
      <section className="px-3 md:px-5">
        <div className="container-edi">
          <div className="rounded-3xl bg-signal px-8 py-16 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-ink/70">Let's work together ✦ Let's work together ✦</p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Let's make something amazing together
            </h2>
            <Link href="/contact" className="btn-primary mt-7 bg-ink hover:bg-ink/90 hover:text-paper">
              Book a call <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="section-pad">
        <div className="container-edi grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Tell us what you're trying to grow.</h2>
            <p className="mt-4 max-w-md text-sm text-ink/60">
              Share a few details and a strategist will map out where the fastest wins are — before you commit to anything.
            </p>
          </div>
          <LeadForm source="/" />
        </div>
      </section>
    </>
  );
}

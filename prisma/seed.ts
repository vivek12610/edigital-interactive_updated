import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding categories & tags...");
  const categoryNames = ["SEO", "Performance Marketing", "Social Media", "Website"];
  const categories = await Promise.all(
    categoryNames.map((name) =>
      prisma.category.upsert({
        where: { slug: name.toLowerCase().replace(/\s+/g, "-") },
        update: {},
        create: { name, slug: name.toLowerCase().replace(/\s+/g, "-") }
      })
    )
  );

  const tagNames = ["technical-seo", "ai-search", "google-ads", "case-study", "local-seo", "web-performance"];
  const tags = await Promise.all(
    tagNames.map((slug) =>
      prisma.tag.upsert({
        where: { slug },
        update: {},
        create: { slug, name: slug.replace(/-/g, " ") }
      })
    )
  );

  console.log("Seeding blog posts...");
  await prisma.blogPost.upsert({
    where: { slug: "ai-overviews-vs-traditional-seo" },
    update: {},
    create: {
      slug: "ai-overviews-vs-traditional-seo",
      title: "AI Overviews vs. Traditional SEO: What Actually Changes",
      excerpt: "Google's AI Overviews are reshaping how clicks flow from search. Here's what marketers should actually change — and what stays the same.",
      content: `<p>Google's AI Overviews summarize an answer directly in the results page, often before a single blue link appears. That's a real shift in behavior, but the underlying mechanics of good SEO — clear structure, credible sourcing, and answering the actual question — remain the foundation AI Overviews pull from.</p><h2>What changes</h2><p>Content needs to be structured so a passage can be lifted cleanly as an answer: a direct statement near the top, supporting detail after. Schema markup and clear authorship signals matter more, since they help engines attribute facts confidently.</p><h2>What doesn't</h2><p>Topical authority, backlinks, and genuine expertise still decide who gets cited in the first place. AI Overviews reward the same sites that already rank well — they don't reward gaming a new system.</p>`,
      author: "eDigital Interactive Team",
      readingTime: 6,
      categories: { connect: [{ id: categories[0].id }] },
      tags: { connect: [{ id: tags[1].id }, { id: tags[0].id }] }
    }
  });

  await prisma.blogPost.upsert({
    where: { slug: "google-ads-budget-allocation-2026" },
    update: {},
    create: {
      slug: "google-ads-budget-allocation-2026",
      title: "How We Allocate Google Ads Budget Across a Funnel",
      excerpt: "A practical breakdown of how budget should move between prospecting, remarketing, and branded campaigns as an account matures.",
      content: `<p>Most accounts we inherit have budget frozen in the same split it started with a year ago. That's a mistake — budget should migrate weekly toward whichever stage of the funnel is producing the best marginal return.</p><h2>A starting framework</h2><p>Early on, weight budget toward prospecting to build signal. Once remarketing pools are large enough to be efficient, shift a meaningful share there. Branded search should stay lean — it's important, but rarely where incremental growth comes from.</p>`,
      author: "eDigital Interactive Team",
      readingTime: 5,
      categories: { connect: [{ id: categories[1].id }] },
      tags: { connect: [{ id: tags[2].id }] }
    }
  });

  await prisma.blogPost.upsert({
    where: { slug: "core-web-vitals-still-matter" },
    update: {},
    create: {
      slug: "core-web-vitals-still-matter",
      title: "Core Web Vitals Still Matter — Here's the Evidence",
      excerpt: "Site speed keeps getting deprioritized in redesign projects. The ranking and conversion data says that's a mistake.",
      content: `<p>It's tempting to treat Core Web Vitals as a checkbox rather than a priority, especially under deadline pressure. But slow-loading pages consistently show weaker rankings and materially worse conversion rates across the accounts we manage.</p><h2>Where sites lose the most time</h2><p>Unoptimized hero images and render-blocking third-party scripts are the two most common causes we find during technical audits — both are fixable without a full rebuild.</p>`,
      author: "eDigital Interactive Team",
      readingTime: 4,
      categories: { connect: [{ id: categories[3].id }] },
      tags: { connect: [{ id: tags[5].id }, { id: tags[0].id }] }
    }
  });

  console.log("Seeding case studies...");
  await prisma.caseStudy.upsert({
    where: { slug: "northline-health-local-seo" },
    update: {},
    create: {
      slug: "northline-health-local-seo",
      clientName: "Northline Health",
      title: "How Northline Health Tripled Appointment Requests With Local SEO",
      category: "SEO",
      industry: "Healthcare",
      summary: "A 12-location clinic group needed consistent local visibility across every branch. We rebuilt their location-page architecture and Google Business Profiles.",
      challenge: "<p>Northline Health had 12 clinic locations competing against each other in search due to duplicated location pages and inconsistent NAP data across directories.</p>",
      solution: "<p>We rebuilt each location page around location-specific services and provider bios, cleaned up citations across 40+ directories, and implemented a structured review-generation workflow tied to their booking system.</p>",
      resultsBody: "<p>Within six months, appointment requests attributed to organic and map-pack search nearly tripled, and 9 of 12 locations reached the top 3 map-pack results for their primary category.</p>",
      metricLabel1: "Appointment requests",
      metricValue1: "+192%",
      metricLabel2: "Locations in map-pack top 3",
      metricValue2: "9/12",
      metricLabel3: "Timeframe",
      metricValue3: "6 months"
    }
  });

  await prisma.caseStudy.upsert({
    where: { slug: "vantage-legal-performance-marketing" },
    update: {},
    create: {
      slug: "vantage-legal-performance-marketing",
      clientName: "Vantage Legal",
      title: "Vantage Legal Cut Cost-Per-Lead by 54% While Doubling Volume",
      category: "Performance Marketing",
      industry: "Law Firms",
      summary: "A personal injury firm was spending heavily on Google Ads with poor conversion tracking. We rebuilt tracking and campaign structure from scratch.",
      challenge: "<p>Vantage Legal's Google Ads account had no reliable call tracking, so budget was being allocated based on guesswork rather than actual case value.</p>",
      solution: "<p>We implemented call and form tracking tied directly into their CRM, restructured campaigns around practice area and intent, and layered in AI-driven lead qualification via WhatsApp for after-hours inquiries.</p>",
      resultsBody: "<p>Cost-per-qualified-lead dropped 54% within four months, while total qualified lead volume doubled over the same period, with after-hours WhatsApp automation capturing leads that previously went to voicemail.</p>",
      metricLabel1: "Cost per qualified lead",
      metricValue1: "-54%",
      metricLabel2: "Qualified lead volume",
      metricValue2: "2x",
      metricLabel3: "Timeframe",
      metricValue3: "4 months"
    }
  });

  await prisma.caseStudy.upsert({
    where: { slug: "fernshaw-salons-social" },
    update: {},
    create: {
      slug: "fernshaw-salons-social",
      clientName: "Fernshaw Salons",
      title: "Fernshaw Salons Filled Off-Peak Booking Slots With a Social + WhatsApp Playbook",
      category: "Social Media",
      industry: "Salon",
      summary: "A 5-location salon chain had strong Instagram following but weak conversion from followers to bookings, especially on weekdays.",
      challenge: "<p>Fernshaw had a strong Instagram audience but no consistent path from a post view to an actual booking, and weekday chairs sat empty.</p>",
      solution: "<p>We rebuilt their content calendar around booking-intent content, added WhatsApp automation for instant booking confirmations, and ran a targeted weekday promotion campaign through Meta Ads.</p>",
      resultsBody: "<p>Weekday booking utilization rose 38% within three months, and WhatsApp automation cut no-show rates by nearly a quarter through automated reminders.</p>",
      metricLabel1: "Weekday utilization",
      metricValue1: "+38%",
      metricLabel2: "No-show reduction",
      metricValue2: "-24%",
      metricLabel3: "Timeframe",
      metricValue3: "3 months"
    }
  });

  await prisma.caseStudy.upsert({
    where: { slug: "orbit-commerce-web-rebuild" },
    update: {},
    create: {
      slug: "orbit-commerce-web-rebuild",
      clientName: "Orbit Commerce",
      title: "Orbit Commerce Rebuilt on Next.js, Cut Load Time by 68%",
      category: "Website",
      industry: "E-commerce",
      summary: "A Shopify storefront with heavy third-party scripts was losing mobile conversions to slow load times.",
      challenge: "<p>Orbit Commerce's storefront had a 6.2-second mobile load time, well above the threshold where conversion rates start dropping sharply.</p>",
      solution: "<p>We rebuilt the storefront front-end on Next.js with an optimized image pipeline and audited every third-party script, removing or deferring anything not essential to the checkout path.</p>",
      resultsBody: "<p>Mobile load time dropped to under 2 seconds, and mobile conversion rate rose 21% in the two months following launch.</p>",
      metricLabel1: "Mobile load time",
      metricValue1: "-68%",
      metricLabel2: "Mobile conversion rate",
      metricValue2: "+21%",
      metricLabel3: "Timeframe",
      metricValue3: "2 months post-launch"
    }
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

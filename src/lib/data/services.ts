export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  category: "AI & Search" | "Marketing" | "Engineering" | "Growth";
  eyebrow: string;
  name: string;
  tagline: string;
  summary: string;
  subServices: string[];
  deliverables: string[];
  process: { title: string; detail: string }[];
  faqs: FaqItem[];
  relatedIndustries?: string[];
};

export const services: Service[] = [
  {
    slug: "ai-search-optimization",
    category: "AI & Search",
    eyebrow: "AIO",
    name: "AI Search Optimization",
    tagline: "Get cited by the engines your buyers ask instead of search.",
    summary:
      "Buyers are increasingly asking ChatGPT, Gemini, and Google's AI Overviews instead of typing a query into a blue-links search box. We restructure your content, schema, and entity signals so generative engines cite your brand as the answer — not a competitor two sources down.",
    subServices: ["GEO (Generative Engine Optimization)", "AI Visibility Audits", "ChatGPT, Gemini & AI Overviews Optimization"],
    deliverables: [
      "AI visibility audit across ChatGPT, Perplexity, Gemini and AI Overviews",
      "Entity and schema markup rebuild for machine-readability",
      "Answer-first content restructuring for citation-worthy passages",
      "Monthly AI share-of-voice tracking against named competitors"
    ],
    process: [
      { title: "Visibility baseline", detail: "We query your category across major AI engines and log where you appear, where you're missing, and who's winning the citation." },
      { title: "Entity clean-up", detail: "We fix structured data, author markup, and knowledge-graph signals so engines can confidently attribute facts to your brand." },
      { title: "Answer engineering", detail: "We rewrite key pages into extractable, citable answer blocks without turning your site into a wall of bullet points." },
      { title: "Track & compound", detail: "Monthly re-querying shows share-of-voice movement, so this becomes a compounding channel, not a one-off audit." }
    ],
    faqs: [
      { q: "Is GEO replacing SEO?", a: "No — GEO sits on top of technical and content SEO. Strong SEO foundations are still what AI engines pull from, so we run both in the same engagement rather than as separate tracks." },
      { q: "How do you measure AI visibility?", a: "We run a fixed set of category and branded prompts against each engine monthly, log whether you're cited, and track the trend line the same way we'd track keyword rankings." },
      { q: "Which engines do you optimize for?", a: "ChatGPT, Google AI Overviews and Gemini, and Perplexity are the current priority set — we adjust as engines' market share shifts." }
    ]
  },
  {
    slug: "seo",
    category: "AI & Search",
    eyebrow: "SEO",
    name: "Search Engine Optimization",
    tagline: "Rankings that hold when Google ships another update.",
    summary:
      "We treat SEO as infrastructure, not a checklist. Technical foundations, content architecture, and authority-building are sequenced so gains compound instead of resetting with every algorithm update.",
    subServices: ["Technical SEO", "Enterprise SEO", "E-commerce SEO", "Local SEO"],
    deliverables: [
      "Full technical crawl audit — indexation, Core Web Vitals, log-file analysis",
      "Keyword and topical map tied to actual buying intent, not volume alone",
      "On-page and internal linking architecture rebuild",
      "Editorial content calendar aligned to the topical map",
      "Monthly ranking, traffic, and conversion reporting"
    ],
    process: [
      { title: "Technical audit", detail: "Crawl budget, indexation, Core Web Vitals, and log files — we fix what's actively suppressing rankings first." },
      { title: "Topical architecture", detail: "We map your category into pillar and cluster pages so internal linking does real ranking work, not just navigation." },
      { title: "Content & links", detail: "Production of search-intent-matched pages, paired with a link-earning plan built on real assets, not directory spam." },
      { title: "Compound reporting", detail: "Monthly reporting ties rankings to organic traffic and, where tracked, to pipeline." }
    ],
    faqs: [
      { q: "How long until we see ranking movement?", a: "Technical fixes can show impact within 4–6 weeks. Competitive keyword rankings typically build over 4–9 months, depending on domain authority and category competitiveness." },
      { q: "Do you guarantee page-1 rankings?", a: "No agency can honestly guarantee a specific rank — algorithms and competitor behavior are outside anyone's control. We commit to the process, the reporting, and the leading indicators that predict ranking growth." },
      { q: "Do you handle enterprise sites with 10,000+ pages?", a: "Yes — enterprise SEO engagements include log-file analysis, crawl-budget management, and templated on-page rules that scale across large catalogs or content libraries." }
    ]
  },
  {
    slug: "local-seo",
    category: "AI & Search",
    eyebrow: "Local",
    name: "Local SEO & Google Business Profile",
    tagline: "Win the map pack before someone else's client does.",
    summary:
      "For businesses that live or die by local search — clinics, salons, law firms, multi-location retailers — the map pack is the highest-intent real estate on the internet. We optimize the profile, the proximity signals, and the review engine that keeps you there.",
    subServices: ["GBP Optimization", "Maps Ranking", "Multi-Location SEO"],
    deliverables: [
      "Google Business Profile audit and full optimization",
      "Citation cleanup across major local directories",
      "Review generation and response workflow",
      "Location-page templates for multi-location brands",
      "Local rank tracking by ZIP / postal code"
    ],
    process: [
      { title: "Profile audit", detail: "We audit categories, attributes, photos, and Q&A on your Google Business Profile against top-ranking competitors in your map pack." },
      { title: "Citation & NAP cleanup", detail: "Name, address, and phone consistency across directories — a small detail that quietly caps local rankings when it's wrong." },
      { title: "Review engine", detail: "We set up a review-request workflow tied to your booking or POS system so social proof grows on autopilot." },
      { title: "Scale by location", detail: "For multi-location brands, we build a location-page template that ranks each branch without duplicating content." }
    ],
    faqs: [
      { q: "We have 40 locations — can this scale?", a: "Yes. We build a location-page template and a citation-management workflow designed for multi-location brands, so onboarding location 41 doesn't require custom work." },
      { q: "How important are reviews really?", a: "Review count and recency are among the strongest local ranking signals we can influence directly, alongside proximity and profile completeness." }
    ]
  },
  {
    slug: "performance-marketing",
    category: "Marketing",
    eyebrow: "Paid Media",
    name: "Performance Marketing",
    tagline: "Every rupee traced from click to closed deal.",
    summary:
      "We run paid media the way a CFO would want it run: full-funnel tracking, disciplined testing, and budget that migrates toward whatever is actually producing pipeline — not whichever platform rep called last.",
    subServices: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads"],
    deliverables: [
      "Full-funnel account audit and conversion-tracking rebuild",
      "Campaign architecture across Google, Meta, LinkedIn, and YouTube",
      "Creative testing calendar with statistically sound sample sizes",
      "Weekly optimization log and monthly ROAS reporting"
    ],
    process: [
      { title: "Tracking first", detail: "Before a single rupee moves, we verify conversion tracking is accurate — bad data makes every later decision wrong." },
      { title: "Architecture", detail: "Campaigns are structured around intent stage, not just keyword or audience, so budget isn't fighting itself." },
      { title: "Creative velocity", detail: "A steady cadence of new ad variants prevents fatigue and gives the algorithm fresh signal to optimize against." },
      { title: "Budget migration", detail: "Spend shifts toward what's provably converting on a weekly cycle, reported in plain numbers, not vanity metrics." }
    ],
    faqs: [
      { q: "What's the minimum ad spend you work with?", a: "We typically recommend a minimum of $1,500–$2,000/month in media spend so platforms have enough data to optimize efficiently — below that, testing gets statistically noisy." },
      { q: "Do you take a percentage of ad spend?", a: "Pricing is scoped per engagement and shared upfront during your consultation — no hidden markup on media spend." },
      { q: "Which platforms do you recommend for B2B?", a: "It depends on deal size and sales cycle — LinkedIn and Google typically lead for B2B, while Meta and YouTube often perform better for consumer and demand-generation plays. We'll recommend a mix after reviewing your funnel." }
    ]
  },
  {
    slug: "social-media-marketing",
    category: "Marketing",
    eyebrow: "Social",
    name: "Social Media Marketing",
    tagline: "Content calendars built around what your audience actually shares.",
    summary:
      "We run organic social as a demand-generation channel, not a posting treadmill — grounded in platform-native formats, a consistent content system, and community management that turns comments into conversations that convert.",
    subServices: ["Content Strategy", "Platform Management", "Community Management", "Influencer Collaboration"],
    deliverables: [
      "Platform audit and content pillar strategy",
      "Monthly content calendar with platform-native creative",
      "Community management and response-time SLAs",
      "Monthly performance and growth reporting"
    ],
    process: [
      { title: "Audience research", detail: "We map what your specific audience engages with on each platform, not a generic best-practices deck." },
      { title: "Pillar system", detail: "Content is organized into repeatable pillars so the calendar doesn't rely on last-minute inspiration." },
      { title: "Production & publishing", detail: "Platform-native creative — not one asset reformatted five ways — published on a consistent cadence." },
      { title: "Community & reporting", detail: "Comments and DMs are monitored on an SLA, and monthly reporting ties growth to engagement quality, not just follower count." }
    ],
    faqs: [
      { q: "Which platforms should we be on?", a: "We recommend platforms based on where your actual buyers spend time, not where it's trendy to post — this is usually 2–3 platforms run well, rather than five run thinly." },
      { q: "Do you write and design the content?", a: "Yes — strategy, copywriting, and creative production are all included, with your brand voice guidelines built in during onboarding." }
    ]
  },
  {
    slug: "content-marketing",
    category: "Marketing",
    eyebrow: "Content",
    name: "Content Marketing",
    tagline: "Content built for search, AI engines, and humans — in that order of durability.",
    summary:
      "Content that's built to rank, get cited by AI engines, and actually convince a reader — sequenced around topical clusters so authority compounds instead of scattering across one-off blog posts.",
    subServices: ["SEO Content", "AI Content Strategy", "Content Clusters", "Thought Leadership"],
    deliverables: [
      "Topical cluster map tied to your SEO keyword strategy",
      "Editorial calendar with briefs, drafts, and SME review cycles",
      "AI-citation-ready formatting for pillar pages",
      "Thought-leadership series for founder or executive bylines"
    ],
    process: [
      { title: "Cluster mapping", detail: "We identify pillar topics and the supporting questions your buyers actually search, then sequence production around them." },
      { title: "Brief & draft", detail: "Every piece starts with a research-backed brief so writers aren't guessing at search intent." },
      { title: "SME review", detail: "Subject-matter accuracy is checked with your team before anything publishes — especially for regulated industries." },
      { title: "Distribution", detail: "Published content is repurposed into social, email, and sales-enablement formats instead of sitting idle on the blog." }
    ],
    faqs: [
      { q: "Do you use AI to write the content?", a: "AI tools assist research and first drafts; every piece is edited, fact-checked, and refined by a human editor before it publishes under your brand." },
      { q: "How much content do we need to see results?", a: "Consistency matters more than volume — a steady cadence of 4–8 well-researched pieces a month typically outperforms a sporadic 20-piece sprint." }
    ]
  },
  {
    slug: "digital-pr-orm",
    category: "Marketing",
    eyebrow: "PR & ORM",
    name: "Digital PR & Reputation Management",
    tagline: "Control the first page of results for your own name.",
    summary:
      "We build the earned-media links that move domain authority, and we manage the reputation signals that decide what a prospect sees in the ten seconds before they Google you.",
    subServices: ["Digital PR", "Brand Mentions", "Reputation Management"],
    deliverables: [
      "Digital PR campaigns tied to newsworthy data or angles",
      "Journalist and publication outreach with tracked coverage",
      "Brand mention monitoring and unlinked-mention reclamation",
      "Review and reputation monitoring dashboard"
    ],
    process: [
      { title: "Angle development", detail: "We find the data, survey, or story your brand can credibly own — coverage follows a real angle, not a generic pitch." },
      { title: "Outreach", detail: "Targeted pitching to relevant journalists and publications, tracked through to published coverage and links." },
      { title: "Mention monitoring", detail: "We track brand mentions across the web and convert unlinked mentions into backlinks where possible." },
      { title: "Reputation dashboard", detail: "Review sentiment and search-result composition for your brand name are monitored monthly, with a response plan for anything negative." }
    ],
    faqs: [
      { q: "Can you remove negative reviews or articles?", a: "We can't guarantee removal of content we don't control, but we can build a response strategy and surface positive, authoritative content that pushes negative results down." },
      { q: "How is this different from generic link building?", a: "Digital PR earns links because the coverage is genuinely newsworthy, which typically produces higher-authority, more durable links than outreach-for-links-alone tactics." }
    ]
  },
  {
    slug: "ai-automation",
    category: "AI & Search",
    eyebrow: "AI/Ops",
    name: "AI Automation & Agent Development",
    tagline: "Agents that qualify, route, and follow up while your team sleeps.",
    summary:
      "We design and build AI chatbots and agent workflows that plug into your existing stack — qualifying leads on WhatsApp, updating your CRM, and escalating to a human at exactly the right moment instead of trapping visitors in a rigid decision tree.",
    subServices: ["AI Chatbots", "WhatsApp Automation", "Lead Qualification Systems", "CRM Automation"],
    deliverables: [
      "Conversational AI chatbot trained on your services and FAQs",
      "WhatsApp Business API automation for lead capture and follow-up",
      "Lead scoring and qualification workflow tied to your CRM",
      "Human handoff rules for high-intent conversations"
    ],
    process: [
      { title: "Workflow mapping", detail: "We map your current lead-to-close journey to find where automation removes friction without removing the human touch where it matters." },
      { title: "Build & train", detail: "The agent is trained on your actual services, pricing logic, and FAQs — not a generic script that hallucinates answers." },
      { title: "Integrate", detail: "Connections to WhatsApp, your CRM, and calendar tools so qualified leads land in front of your sales team automatically." },
      { title: "Monitor & retrain", detail: "Conversation logs are reviewed monthly to catch gaps and retrain the agent as your offers change." }
    ],
    faqs: [
      { q: "Will the chatbot give wrong answers?", a: "We scope the agent's knowledge tightly to your verified content and set clear fallback rules, so it hands off to a human rather than guessing on anything outside its confidence range." },
      { q: "Can it work on our website and WhatsApp at the same time?", a: "Yes — we build a shared knowledge and lead-routing layer so conversations stay consistent whether a visitor starts on-site or on WhatsApp." }
    ]
  },
  {
    slug: "web-design-development",
    category: "Engineering",
    eyebrow: "Build",
    name: "Web Design & Development",
    tagline: "Fast, on-brand, and built on the stack that fits the job — not the one that's easiest to sell.",
    summary:
      "From WordPress marketing sites to custom Next.js platforms and Shopify storefronts, we design and build sites that are fast by default, structured for SEO from day one, and easy for your team to actually maintain.",
    subServices: ["WordPress", "Custom Build (Next.js / Node.js)", "Shopify", "Dashboards & Internal Tools"],
    deliverables: [
      "UX wireframes and visual design system",
      "Responsive, accessible front-end build",
      "SEO-ready information architecture and technical setup",
      "CMS or headless backend suited to your team's workflow",
      "Performance budget — Core Web Vitals passing before launch"
    ],
    process: [
      { title: "Discovery & IA", detail: "We map user journeys and information architecture before any visual design starts, so the site is structured to convert and to rank." },
      { title: "Design system", detail: "A component-based design system keeps the build consistent and makes future pages fast to ship." },
      { title: "Build", detail: "Development on the stack that fits your goals — WordPress for content teams, Next.js for custom product experiences, Shopify for commerce." },
      { title: "QA & launch", detail: "Cross-device QA, performance tuning, and a launch checklist covering redirects, analytics, and search console setup." }
    ],
    faqs: [
      { q: "Which platform is right for us?", a: "It depends on who maintains the site day-to-day and what it needs to do — we'll recommend WordPress, a custom Next.js build, or Shopify based on your team and goals, not a one-size answer." },
      { q: "Do you handle ongoing maintenance after launch?", a: "Yes — we offer retained maintenance plans covering updates, security monitoring, and small content changes." },
      { q: "Can you build internal dashboards, not just marketing sites?", a: "Yes — we build custom dashboards and internal tools on Next.js and Node.js, connected to your existing data sources." }
    ]
  },
  {
    slug: "website-audit",
    category: "Engineering",
    eyebrow: "Audit",
    name: "Website Audit",
    tagline: "Know exactly what's costing you rankings and revenue before you spend another rupee on traffic.",
    summary:
      "A structured audit across technical health, SEO, UX, and conversion — delivered as a prioritized action plan, not a 60-page PDF nobody reads.",
    subServices: ["Technical Audit", "SEO Audit", "UX & Conversion Audit", "Competitive Benchmark"],
    deliverables: [
      "Technical health report — speed, crawlability, mobile experience",
      "On-page and content SEO assessment",
      "UX and conversion-funnel review",
      "Prioritized fix list ranked by effort vs. impact"
    ],
    process: [
      { title: "Data pull", detail: "We pull crawl data, analytics, and Search Console history to ground the audit in evidence, not opinion." },
      { title: "Analysis", detail: "Technical, content, and UX issues are diagnosed and mapped to their likely business impact." },
      { title: "Prioritized roadmap", detail: "Findings are ranked by effort versus impact so you know what to fix first, whether you work with us or your own team." },
      { title: "Walkthrough call", detail: "We present findings live and answer questions, rather than dropping a static report in your inbox." }
    ],
    faqs: [
      { q: "Is the audit free?", a: "We offer a scoped starter audit as part of your first consultation; a full deep-dive audit is a paid engagement — details are confirmed on your call." },
      { q: "Do we have to hire you afterward?", a: "No — the roadmap is yours to action with any team. Most clients choose to continue with us because we already know the site, but there's no obligation." }
    ]
  },
  {
    slug: "cro",
    category: "Growth",
    eyebrow: "CRO",
    name: "Conversion Rate Optimization",
    tagline: "More revenue from the traffic you're already paying for.",
    summary:
      "We find where visitors hesitate or drop off, form a hypothesis grounded in behavior data, and test it properly — so your conversion rate improves on evidence, not opinion.",
    subServices: ["Landing Page Optimization", "Funnel Optimization", "A/B Testing"],
    deliverables: [
      "Funnel and heatmap analysis to find drop-off points",
      "Hypothesis-driven test roadmap",
      "A/B and multivariate test builds",
      "Monthly conversion-rate and revenue-impact reporting"
    ],
    process: [
      { title: "Diagnose", detail: "Heatmaps, session recordings, and funnel analytics show us where visitors actually hesitate or leave." },
      { title: "Hypothesize", detail: "Each test starts from a specific, falsifiable hypothesis — not a guess about what 'looks better'." },
      { title: "Test", detail: "Tests run to statistical significance before we call a winner, avoiding false positives from small sample sizes." },
      { title: "Roll out & repeat", detail: "Winning variants are rolled out, and the next hypothesis is queued — CRO compounds over successive cycles." }
    ],
    faqs: [
      { q: "How much traffic do we need to run A/B tests?", a: "As a rule of thumb, a few thousand monthly visitors to the page being tested is enough to reach significance in a reasonable time; lower-traffic pages use qualitative methods instead." },
      { q: "What's a realistic conversion lift?", a: "It varies widely by starting point and industry — we'll give you a specific benchmark range once we've reviewed your current funnel data." }
    ]
  },
  {
    slug: "analytics-data-intelligence",
    category: "Growth",
    eyebrow: "Data",
    name: "Analytics & Data Intelligence",
    tagline: "One number everyone trusts, instead of five dashboards that disagree.",
    summary:
      "We set up GA4 and GTM properly, build attribution models that reflect your actual sales cycle, and hand you a dashboard your whole team can read without a data-analyst translator.",
    subServices: ["GA4", "GTM", "Dashboard Reporting", "Attribution Modeling"],
    deliverables: [
      "GA4 and Google Tag Manager setup and event architecture",
      "Cross-channel attribution model matched to your sales cycle",
      "Custom reporting dashboard (Looker Studio or equivalent)",
      "Monthly data-quality audit"
    ],
    process: [
      { title: "Audit current tracking", detail: "We check what's currently firing correctly, what's duplicated, and what's missing entirely before building anything new." },
      { title: "Event architecture", detail: "A clean, documented event and conversion structure in GA4 and GTM, matched to your actual funnel." },
      { title: "Attribution model", detail: "We select and configure an attribution approach that reflects how long and how many touches your sales cycle actually takes." },
      { title: "Dashboard handoff", detail: "A live dashboard is handed to your team with a walkthrough, so reporting doesn't depend on a request to us every month." }
    ],
    faqs: [
      { q: "We already have GA4 set up — do we need this?", a: "Many GA4 implementations are missing key events or have inflated conversion counts from misconfiguration. A quick audit will tell you whether a rebuild is needed." },
      { q: "Can you connect ad platform data into one dashboard?", a: "Yes — we typically consolidate Google Ads, Meta, LinkedIn, and GA4 data into a single reporting view." }
    ]
  },
  {
    slug: "ecommerce-growth",
    category: "Growth",
    eyebrow: "E-commerce",
    name: "E-commerce Growth",
    tagline: "Rank on the marketplace, convert on the storefront.",
    summary:
      "From Amazon marketplace SEO to Shopify storefront growth, we treat e-commerce as its own discipline — where product-level search intent, marketplace algorithms, and merchandising all decide the outcome.",
    subServices: ["Marketplace SEO", "Amazon Marketing", "Shopify Growth"],
    deliverables: [
      "Marketplace listing audit and optimization (titles, backend keywords, A+ content)",
      "Amazon PPC campaign structure and management",
      "Shopify storefront CRO and merchandising review",
      "Product-level SEO for owned storefronts"
    ],
    process: [
      { title: "Catalog audit", detail: "We review listings across marketplaces and your storefront for search-intent gaps and merchandising issues." },
      { title: "Optimize listings", detail: "Titles, backend keywords, imagery, and A+ content are rebuilt around actual marketplace search behavior." },
      { title: "Paid acceleration", detail: "Amazon and storefront paid campaigns are layered on top of organic fixes to accelerate visibility." },
      { title: "Iterate on data", detail: "Sales and conversion data from each channel feed back into the next round of listing and merchandising changes." }
    ],
    faqs: [
      { q: "Do you manage Amazon Seller Central directly?", a: "We work within your existing Seller or Vendor Central account — we don't require account ownership to manage listings and campaigns." },
      { q: "Do you build Shopify stores from scratch too?", a: "Yes — Shopify build and design work is covered under Web Design & Development, and pairs naturally with this growth engagement." }
    ]
  },
  {
    slug: "growth-consulting",
    category: "Growth",
    eyebrow: "Strategy",
    name: "Growth Consulting",
    tagline: "Senior marketing strategy, without a full-time executive salary.",
    summary:
      "For founders and marketing leads who need senior strategic thinking — GTM planning, channel prioritization, and a fractional CMO relationship — without carrying a full executive headcount.",
    subServices: ["Digital Strategy", "GTM Strategy", "Fractional CMO", "Growth Audits"],
    deliverables: [
      "Digital growth audit across channels and stack",
      "Go-to-market plan for new products or markets",
      "Fractional CMO advisory — recurring strategic sessions",
      "Quarterly growth roadmap with prioritized initiatives"
    ],
    process: [
      { title: "Assess", detail: "We review your current channels, team, and stack to understand what's actually holding growth back." },
      { title: "Plan", detail: "A prioritized growth roadmap is built around your specific constraints — budget, team size, sales cycle." },
      { title: "Advise", detail: "Recurring strategic sessions keep the plan grounded in what's actually happening in the market and your pipeline." },
      { title: "Review quarterly", detail: "The roadmap is revisited each quarter and adjusted against real results, not left static for a year." }
    ],
    faqs: [
      { q: "How is Fractional CMO different from a full engagement?", a: "It's a recurring strategic advisory relationship — we set direction and review results with your team, while execution can sit with your in-house team, us, or a mix of both." },
      { q: "Is this only for startups?", a: "No — we work with founders launching new lines as well as established teams that need outside strategic perspective without adding headcount." }
    ]
  },
  {
    slug: "influencer-marketing",
    category: "Marketing",
    eyebrow: "FreshCrowd",
    name: "Influencer Marketing",
    tagline: "Powered by FreshCrowd — our dedicated influencer marketing platform.",
    summary:
      "Influencer marketing runs through FreshCrowd, our sister platform built specifically for creator discovery, campaign management, and performance tracking. As an eDigital Interactive client, you get direct access to it as part of a connected growth stack.",
    subServices: ["Creator Discovery", "Campaign Management", "Performance Tracking"],
    deliverables: [
      "Creator shortlist matched to audience and brand fit",
      "Campaign brief, contracting, and content coordination",
      "Performance tracking tied back into your broader analytics",
      "Combined reporting alongside your paid and organic channels"
    ],
    process: [
      { title: "Brief", detail: "We define campaign goals and audience fit before any creator outreach begins." },
      { title: "Discover", detail: "FreshCrowd surfaces creators matched on audience overlap and engagement quality, not follower count alone." },
      { title: "Run", detail: "Content coordination and approvals run through FreshCrowd's campaign workflow." },
      { title: "Report", detail: "Campaign performance is folded into your main growth dashboard alongside paid and organic results." }
    ],
    faqs: [
      { q: "Is FreshCrowd a separate subscription?", a: "FreshCrowd is a standalone product — as an eDigital Interactive client, we'll walk you through how it plugs into your existing engagement and what it costs." },
      { q: "Can you run influencer campaigns without us using FreshCrowd directly?", a: "Yes — we can manage the full campaign on your behalf using FreshCrowd as our internal tool." }
    ]
  }
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);

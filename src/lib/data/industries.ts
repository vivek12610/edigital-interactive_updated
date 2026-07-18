export type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  challenges: string[];
  approach: { title: string; detail: string }[];
  services: string[]; // slugs from services.ts
  stats: { label: string; value: string }[];
};

export const industries: Industry[] = [
  {
    slug: "law-firms",
    name: "Law Firms",
    eyebrow: "Legal",
    tagline: "Rank for the moment someone needs a lawyer, not just your firm's name.",
    summary:
      "Legal search is high-intent and high-stakes — someone searching \"personal injury lawyer near me\" at 11pm is ready to call. We build local SEO, content, and intake systems designed around that moment, within the ethical advertising constraints your bar association sets.",
    challenges: [
      "Hyper-competitive local rankings against firms with decades of link equity",
      "Practice-area pages that read like legal disclaimers instead of answers",
      "Leads that call but never get a callback fast enough to convert",
      "Advertising rules that limit what marketing tactics are usable"
    ],
    approach: [
      { title: "Practice-area architecture", detail: "Each practice area gets a dedicated, locally-optimized page structured around the specific questions a prospective client is asking." },
      { title: "Local + Maps SEO", detail: "Google Business Profile optimization and citation consistency for every office location, so you show up in the map pack that drives most legal calls." },
      { title: "Intake-speed automation", detail: "AI chat and WhatsApp automation routes and qualifies inbound leads instantly, so a fast-moving prospect doesn't call the next firm on the list." },
      { title: "Reputation management", detail: "Review generation and monitoring, since client trust signals weigh heavily on which firm gets the call." }
    ],
    services: ["local-seo", "seo", "ai-automation", "digital-pr-orm", "web-design-development"],
    stats: [
      { label: "Avg. increase in qualified calls", value: "3.1x" },
      { label: "Practice-area pages built", value: "40+" },
      { label: "Local pack rankings won", value: "top 3" }
    ]
  },
  {
    slug: "salon",
    name: "Salons & Beauty",
    eyebrow: "Beauty & Wellness",
    tagline: "Fill the chair every hour, not just around holidays.",
    summary:
      "Salons win or lose on local discovery, Instagram-driven booking, and repeat-visit reminders. We combine local SEO, social content, and WhatsApp automation to keep the booking calendar full between the seasonal spikes.",
    challenges: [
      "Booking demand that spikes around festivals and dips the rest of the year",
      "Instagram-driven discovery that doesn't convert to actual bookings",
      "No-shows and last-minute cancellations eating into revenue",
      "Multi-location brands needing consistent local visibility everywhere"
    ],
    approach: [
      { title: "Local + Maps visibility", detail: "Google Business Profile and map-pack optimization so \"salon near me\" searches convert into your booking calendar." },
      { title: "Social-to-booking pipeline", detail: "Content built specifically to move an Instagram viewer into a booking link, not just a like." },
      { title: "WhatsApp automation", detail: "Automated booking confirmations, reminders, and rebooking nudges reduce no-shows and keep chairs filled." },
      { title: "Seasonal campaign planning", detail: "Paid and organic campaigns timed to smooth out demand across the year, not just chase festival spikes." }
    ],
    services: ["local-seo", "social-media-marketing", "ai-automation", "performance-marketing"],
    stats: [
      { label: "Booking calendar utilization lift", value: "+38%" },
      { label: "No-show reduction", value: "-24%" },
      { label: "Avg. review growth (6 mo)", value: "2.4x" }
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Clinics & Providers",
    tagline: "Build patient trust online, before they ever reach the front desk.",
    summary:
      "Healthcare marketing has to earn trust fast and stay compliant while doing it. We build content, local SEO, and reputation systems that help patients find and choose your practice — grounded in accuracy, not clickbait health claims.",
    challenges: [
      "Patients researching symptoms across multiple providers before choosing one",
      "Compliance and accuracy requirements that limit generic marketing tactics",
      "Multi-provider or multi-location practices needing consistent local visibility",
      "Appointment booking friction that loses patients at the last step"
    ],
    approach: [
      { title: "Trust-first content", detail: "Provider-reviewed content that answers real patient questions accurately — a requirement, not a nice-to-have, in healthcare search." },
      { title: "Local SEO for every provider", detail: "Individual provider and location pages optimized for the specific searches patients run before booking." },
      { title: "Reputation management", detail: "Structured review generation and monitoring, since patient reviews are one of the strongest trust signals in healthcare search." },
      { title: "Booking-friction removal", detail: "Website and automation improvements that shorten the path from \"found you on Google\" to a confirmed appointment." }
    ],
    services: ["seo", "local-seo", "content-marketing", "digital-pr-orm", "web-design-development"],
    stats: [
      { label: "Avg. increase in appointment requests", value: "2.7x" },
      { label: "Provider pages optimized", value: "100+" },
      { label: "Review response time", value: "<24 hrs" }
    ]
  }
];

export const getIndustryBySlug = (slug: string) => industries.find((i) => i.slug === slug);

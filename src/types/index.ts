export type CaseStudy = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  stats?: {
    value: string;
    label: string;
  }[];
  gradient?: string;
};

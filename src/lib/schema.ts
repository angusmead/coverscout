import { SITE_NAME, SITE_URL } from "./site";

export type FaqItem = { question: string; answer: string };
export type BreadcrumbItem = { name: string; url: string };

const absUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  // TODO: add logo URL once a hosted asset exists
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
});

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absUrl(item.url),
  })),
});

export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export const articleSchema = (args: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: args.headline,
  description: args.description,
  mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(args.url) },
  author: { "@type": "Organization", name: args.author ?? SITE_NAME },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  datePublished: args.datePublished,
  dateModified: args.dateModified ?? args.datePublished,
});

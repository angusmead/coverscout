export const SITE_URL = "https://coverscout.com.au";
export const SITE_NAME = "CoverScout";
export const SITE_TAGLINE = "Compare insurance with more confidence";
export const SITE_DESCRIPTION =
  "Plain-English guides, comparison tools and tips to help Australians understand their insurance options.";

export type NavItem = { label: string; to: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Car", to: "/car-insurance/" },
  { label: "Home", to: "/home-insurance/" },
  { label: "Life", to: "/life-insurance/" },
  { label: "Health", to: "/health-insurance/" },
  { label: "Travel", to: "/travel-insurance/" },
  { label: "Business", to: "/business-insurance/" },
];

export const COMPANY_LINKS: NavItem[] = [
  { label: "About us", to: "/about/" },
  { label: "How we make money", to: "/how-we-make-money/" },
  { label: "Our methodology", to: "/methodology/" },
  { label: "Privacy policy", to: "/privacy/" },
  { label: "Contact", to: "/contact/" },
];

export const COMPLIANCE_STRIP =
  "General information only. CoverScout does not provide personal financial advice.";

export const DISCLAIMER_BLOCK_TEXT =
  "CoverScout provides general information only and does not take your personal circumstances into account. Before making any decisions, consider the Product Disclosure Statement (PDS) and Target Market Determination (TMD) for the product.";

export const AFFILIATE_DISCLOSURE_TEXT =
  "CoverScout may receive a commission or referral fee when you click through or apply for certain products. This does not change the price you pay. Our guides are written to help users compare options, but we may not compare every provider in the market.";

import type { BreadcrumbItem } from "./schema";
import { PROVIDERS, getProvider } from "./providers-data";
import { COMPARISONS } from "./comparisons-data";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  /** Whether to include in sitemap.xml. Defaults to true. */
  inSitemap?: boolean;
  /** Whether the page exists yet. Placeholder pages are noindexed. */
  placeholder?: boolean;
};

const HOME: BreadcrumbItem = { name: "Home", url: "/" };

const carHub: BreadcrumbItem = { name: "Car insurance", url: "/car-insurance/" };
const homeHub: BreadcrumbItem = { name: "Home insurance", url: "/home-insurance/" };
const lifeHub: BreadcrumbItem = { name: "Life insurance", url: "/life-insurance/" };
const healthHub: BreadcrumbItem = { name: "Health insurance", url: "/health-insurance/" };
const travelHub: BreadcrumbItem = { name: "Travel insurance", url: "/travel-insurance/" };
const businessHub: BreadcrumbItem = { name: "Business insurance", url: "/business-insurance/" };
const guidesHub: BreadcrumbItem = { name: "Guides", url: "/guides/" };
const reviewsHub: BreadcrumbItem = { name: "Reviews", url: "/reviews/" };

// TODO: tighten meta descriptions once content is written. All copy here is placeholder.
export const ROUTES_META: RouteMeta[] = [
  {
    path: "/",
    title: "Compare insurance with more confidence",
    description:
      "Plain-English guides, comparison tools and tips to help Australians understand their insurance options.",
    breadcrumbs: [HOME],
  },

  // Car insurance
  { path: "/car-insurance/", title: "Car Insurance Australia: Compare Policies & Understand Your Options", description: "Plain-English guide to car insurance in Australia — what each cover type includes, what drives premiums, and how to compare policies properly.", breadcrumbs: [HOME, carHub] },
  { path: "/car-insurance/compare/", title: "Compare Car Insurance in Australia (What Actually Matters)", description: "How to compare car insurance in Australia properly — what to put side by side, which features matter most, and the mistakes to avoid.", breadcrumbs: [HOME, carHub, { name: "Compare", url: "/car-insurance/compare/" }] },
  { path: "/car-insurance/quotes/", title: "Car Insurance Quotes Australia: How to Compare Quotes Properly", description: "How to get and compare car insurance quotes in Australia — what insurers ask, why quotes vary, and how to set up an apples-to-apples comparison.", breadcrumbs: [HOME, carHub, { name: "Quotes", url: "/car-insurance/quotes/" }] },
  { path: "/car-insurance/cheap/", title: "Cheap Car Insurance Australia: How to Save Without Getting Burned", description: "How to lower your car insurance premium in Australia without quietly stripping out cover — the levers that work, the traps that don't.", breadcrumbs: [HOME, carHub, { name: "Cheap", url: "/car-insurance/cheap/" }] },
  { path: "/car-insurance/best/", title: "Best Car Insurance Australia: How to Choose What's Right for You", description: "How to think about the 'best' car insurance in Australia — what the word actually means, who decides, and how to land on a policy that may suit you.", breadcrumbs: [HOME, carHub, { name: "Best", url: "/car-insurance/best/" }] },
  { path: "/car-insurance/comprehensive/", title: "Comprehensive Car Insurance in Australia: What's Included and What's Not", description: "Comprehensive car insurance in Australia — what's typically covered, common exclusions, optional extras and when it may be worth comparing.", breadcrumbs: [HOME, carHub, { name: "Comprehensive", url: "/car-insurance/comprehensive/" }] },
  { path: "/car-insurance/third-party/", title: "Third Party Car Insurance in Australia: What It Covers (and What It Doesn't)", description: "Third party property car insurance in Australia — what it covers, what it doesn't, how it differs from CTP, and who it may suit.", breadcrumbs: [HOME, carHub, { name: "Third party", url: "/car-insurance/third-party/" }] },
  { path: "/car-insurance/excess/", title: "Car Insurance Excess Explained: How It Works in Australia", description: "Car insurance excess in Australia explained — types of excess, how they affect premiums, and what to weigh when choosing yours.", breadcrumbs: [HOME, carHub, { name: "Excess explained", url: "/car-insurance/excess/" }] },
  { path: "/car-insurance/lower-premiums/", title: "How to Lower Your Car Insurance in Australia (Without Losing Cover)", description: "Practical, plain-English ways to lower your car insurance premium in Australia without quietly stripping out cover.", breadcrumbs: [HOME, carHub, { name: "Lower premiums", url: "/car-insurance/lower-premiums/" }] },
  { path: "/car-insurance/no-claim-bonus/", title: "Car Insurance No-Claim Bonus in Australia: How It Works", description: "How the no-claim bonus works on Australian car insurance — building it, protecting it, transferring it, and what triggers a reset.", breadcrumbs: [HOME, carHub, { name: "No-claim bonus", url: "/car-insurance/no-claim-bonus/" }] },
  { path: "/car-insurance/claims/", title: "Car Insurance Claims Process in Australia: A Step-by-Step Guide", description: "How car insurance claims work in Australia — what to do at the scene, how the process unfolds, and what to expect from your insurer.", breadcrumbs: [HOME, carHub, { name: "Claims process", url: "/car-insurance/claims/" }] },
  { path: "/car-insurance/pay-monthly/", title: "Pay Monthly Car Insurance in Australia: Pros, Cons and What to Watch", description: "Paying car insurance monthly in Australia — how it works, what it typically costs vs annual, and what to check before you sign up.", breadcrumbs: [HOME, carHub, { name: "Pay monthly", url: "/car-insurance/pay-monthly/" }] },
  { path: "/car-insurance/high-risk-drivers/", title: "Car Insurance for High-Risk Drivers in Australia: Your Options Explained", description: "What 'high-risk driver' means to insurers, where to look for cover, and how to compare car insurance options if you've been classed as high-risk.", breadcrumbs: [HOME, carHub, { name: "High-risk drivers", url: "/car-insurance/high-risk-drivers/" }] },
  { path: "/car-insurance/how-much-is-car-insurance/", title: "How Much Is Car Insurance in Australia? (Real Cost Breakdown)", description: "How much car insurance costs in Australia — typical premium ranges, what shapes the price, state differences, and the practical levers for landing closer to the lower end.", breadcrumbs: [HOME, carHub, { name: "How much is car insurance", url: "/car-insurance/how-much-is-car-insurance/" }] },
  { path: "/car-insurance/car-insurance-australia/", title: "Car Insurance Australia: Everything You Need to Know", description: "A complete shopper's guide to car insurance in Australia — the market, regulators, cover types, what shapes premiums, and how to compare policies properly.", breadcrumbs: [HOME, carHub, { name: "Car insurance Australia", url: "/car-insurance/car-insurance-australia/" }] },
  { path: "/car-insurance/comparison/", title: "Car Insurance Comparison Australia: How to Compare Properly", description: "How car insurance comparison works in Australia — what to put side by side, where comparison sites help and fall short, and a routine for genuinely apples-to-apples comparisons.", breadcrumbs: [HOME, carHub, { name: "Comparison", url: "/car-insurance/comparison/" }] },
  { path: "/car-insurance/compare/nsw/", title: "Compare Car Insurance in NSW: Green Slips, Postcodes and Top Insurers", description: "How to compare car insurance in NSW — green slip (CTP), Sydney vs regional pricing, the insurers worth shortlisting and a routine for an apples-to-apples comparison.", breadcrumbs: [HOME, carHub, { name: "Compare", url: "/car-insurance/compare/" }, { name: "NSW", url: "/car-insurance/compare/nsw/" }] },
  { path: "/car-insurance/compare/qld/", title: "Compare Car Insurance in Queensland: RACQ, CTP and Top Insurers", description: "How to compare car insurance in Queensland — RACQ's role, how CTP fits into rego, cyclone and storm exposure, and a comparison routine for a QLD shortlist.", breadcrumbs: [HOME, carHub, { name: "Compare", url: "/car-insurance/compare/" }, { name: "QLD", url: "/car-insurance/compare/qld/" }] },
  { path: "/car-insurance/over-50s/", title: "Car Insurance for Over 50s in Australia: What to Look For", description: "Car insurance for over 50s in Australia — how age affects premiums, specialist insurers worth comparing, and features that may suit older drivers.", breadcrumbs: [HOME, carHub, { name: "Over 50s", url: "/car-insurance/over-50s/" }] },
  { path: "/car-insurance/ctp/", title: "CTP insurance and green slips", description: "Compulsory Third Party (CTP) insurance and green slips explained, with state-by-state notes.", breadcrumbs: [HOME, carHub, { name: "CTP / green slip", url: "/car-insurance/ctp/" }], placeholder: true },
  { path: "/car-insurance/cost/", title: "How much does car insurance cost?", description: "What affects car insurance cost in Australia and tips that may help reduce premiums.", breadcrumbs: [HOME, carHub, { name: "Cost", url: "/car-insurance/cost/" }], placeholder: true },
  { path: "/car-insurance/young-drivers/", title: "Car Insurance for Young Drivers in Australia: How to Compare and Save", description: "Why young drivers pay more for car insurance in Australia, the levers that may lower premiums, and how to compare policies that fit.", breadcrumbs: [HOME, carHub, { name: "Young drivers", url: "/car-insurance/young-drivers/" }] },
  { path: "/car-insurance/qld/", title: "Car insurance in Queensland", description: "Car insurance in Queensland — registration, CTP notes, local cost factors and how to compare cover.", breadcrumbs: [HOME, carHub, { name: "Queensland", url: "/car-insurance/qld/" }], placeholder: true },
  { path: "/car-insurance/nsw/", title: "Car insurance in NSW", description: "Car insurance in New South Wales — green slips, local cost factors and how to compare cover.", breadcrumbs: [HOME, carHub, { name: "NSW", url: "/car-insurance/nsw/" }], placeholder: true },
  { path: "/car-insurance/vic/", title: "Car insurance in Victoria", description: "Car insurance in Victoria — TAC notes, local cost factors and how to compare cover.", breadcrumbs: [HOME, carHub, { name: "Victoria", url: "/car-insurance/vic/" }], placeholder: true },
  { path: "/car-insurance/wa/", title: "Car insurance in Western Australia", description: "Car insurance in Western Australia — registration, local cost factors and how to compare cover.", breadcrumbs: [HOME, carHub, { name: "WA", url: "/car-insurance/wa/" }], placeholder: true },
  { path: "/car-insurance/sa/", title: "Car insurance in South Australia", description: "Car insurance in South Australia — registration, local cost factors and how to compare cover.", breadcrumbs: [HOME, carHub, { name: "SA", url: "/car-insurance/sa/" }], placeholder: true },

  // Home insurance
  { path: "/home-insurance/", title: "Home insurance in Australia", description: "Plain-English guide to home insurance in Australia — types of cover, what affects cost, and how to compare.", breadcrumbs: [HOME, homeHub], placeholder: true },
  { path: "/home-insurance/compare/", title: "Compare home insurance", description: "Compare home insurance policies in Australia — what to look for and how to weigh exclusions.", breadcrumbs: [HOME, homeHub, { name: "Compare", url: "/home-insurance/compare/" }], placeholder: true },
  { path: "/home-insurance/quotes/", title: "Home insurance quotes", description: "How home insurance quotes work and how to compare them properly.", breadcrumbs: [HOME, homeHub, { name: "Quotes", url: "/home-insurance/quotes/" }], placeholder: true },
  { path: "/home-insurance/building-insurance/", title: "Building insurance", description: "Building insurance explained — what it covers, what it doesn't, and when it may be worth considering.", breadcrumbs: [HOME, homeHub, { name: "Building", url: "/home-insurance/building-insurance/" }], placeholder: true },
  { path: "/home-insurance/contents-insurance/", title: "Contents insurance", description: "Contents insurance explained — what it covers, what it doesn't, and how to estimate your sum insured.", breadcrumbs: [HOME, homeHub, { name: "Contents", url: "/home-insurance/contents-insurance/" }], placeholder: true },
  { path: "/home-insurance/renters-insurance/", title: "Renters insurance", description: "Renters insurance explained — when contents cover may suit renters and what to compare.", breadcrumbs: [HOME, homeHub, { name: "Renters", url: "/home-insurance/renters-insurance/" }], placeholder: true },

  // Life insurance
  { path: "/life-insurance/", title: "Life insurance in Australia", description: "Plain-English guide to life insurance in Australia — types of cover and what to compare.", breadcrumbs: [HOME, lifeHub], placeholder: true },
  { path: "/life-insurance/compare/", title: "Compare life insurance", description: "Compare life insurance policies in Australia — what to look for and questions to ask.", breadcrumbs: [HOME, lifeHub, { name: "Compare", url: "/life-insurance/compare/" }], placeholder: true },
  { path: "/life-insurance/quotes/", title: "Life insurance quotes", description: "How life insurance quotes work and how to compare them properly.", breadcrumbs: [HOME, lifeHub, { name: "Quotes", url: "/life-insurance/quotes/" }], placeholder: true },
  { path: "/life-insurance/income-protection/", title: "Income protection insurance", description: "Income protection insurance explained — what it covers, waiting periods and benefit periods.", breadcrumbs: [HOME, lifeHub, { name: "Income protection", url: "/life-insurance/income-protection/" }], placeholder: true },
  { path: "/life-insurance/funeral-insurance/", title: "Funeral insurance", description: "Funeral insurance explained — how it works and when it may be worth comparing.", breadcrumbs: [HOME, lifeHub, { name: "Funeral", url: "/life-insurance/funeral-insurance/" }], placeholder: true },

  // Health insurance
  { path: "/health-insurance/", title: "Health insurance in Australia", description: "Plain-English guide to health insurance in Australia — hospital, extras and how to compare.", breadcrumbs: [HOME, healthHub], placeholder: true },
  { path: "/health-insurance/compare/", title: "Compare health insurance", description: "Compare health insurance policies in Australia — hospital and extras cover side by side.", breadcrumbs: [HOME, healthHub, { name: "Compare", url: "/health-insurance/compare/" }], placeholder: true },
  { path: "/health-insurance/best/", title: "Best health insurance", description: "What 'best' health insurance means — popular and highly rated funds worth comparing.", breadcrumbs: [HOME, healthHub, { name: "Best", url: "/health-insurance/best/" }], placeholder: true },
  { path: "/health-insurance/cheap/", title: "Cheap health insurance", description: "How to find cheap health insurance — and where the cheapest may not be the best value.", breadcrumbs: [HOME, healthHub, { name: "Cheap", url: "/health-insurance/cheap/" }], placeholder: true },

  // Travel insurance
  { path: "/travel-insurance/", title: "Travel insurance in Australia", description: "Plain-English guide to travel insurance — types of cover and what to compare.", breadcrumbs: [HOME, travelHub], placeholder: true },
  { path: "/travel-insurance/compare/", title: "Compare travel insurance", description: "Compare travel insurance policies — what to look for in cover, exclusions and excesses.", breadcrumbs: [HOME, travelHub, { name: "Compare", url: "/travel-insurance/compare/" }], placeholder: true },
  { path: "/travel-insurance/international/", title: "International travel insurance", description: "International travel insurance explained — what's typically covered and what to check.", breadcrumbs: [HOME, travelHub, { name: "International", url: "/travel-insurance/international/" }], placeholder: true },
  { path: "/travel-insurance/domestic/", title: "Domestic travel insurance", description: "Domestic travel insurance explained — when it may suit Australian trips and what to compare.", breadcrumbs: [HOME, travelHub, { name: "Domestic", url: "/travel-insurance/domestic/" }], placeholder: true },

  // Business insurance
  { path: "/business-insurance/", title: "Business insurance in Australia", description: "Plain-English guide to business insurance in Australia — types of cover and what to compare.", breadcrumbs: [HOME, businessHub], placeholder: true },
  { path: "/business-insurance/public-liability/", title: "Public liability insurance", description: "Public liability insurance explained — what it covers and when small businesses may consider it.", breadcrumbs: [HOME, businessHub, { name: "Public liability", url: "/business-insurance/public-liability/" }], placeholder: true },
  { path: "/business-insurance/professional-indemnity/", title: "Professional indemnity insurance", description: "Professional indemnity insurance explained — when it may suit consultants and service providers.", breadcrumbs: [HOME, businessHub, { name: "Professional indemnity", url: "/business-insurance/professional-indemnity/" }], placeholder: true },
  { path: "/business-insurance/business-car-insurance/", title: "Business car insurance", description: "Business car insurance explained — how it differs from personal car insurance.", breadcrumbs: [HOME, businessHub, { name: "Business car", url: "/business-insurance/business-car-insurance/" }], placeholder: true },
  { path: "/business-insurance/company-insurance/", title: "Company insurance", description: "Company insurance explained — common cover types Australian companies may consider.", breadcrumbs: [HOME, businessHub, { name: "Company", url: "/business-insurance/company-insurance/" }], placeholder: true },

  // Guides
  { path: "/guides/", title: "Guides and explainers", description: "Plain-English guides and explainers to help Australians understand insurance.", breadcrumbs: [HOME, guidesHub], placeholder: true },
  { path: "/guides/what-insurance-comparison-sites-dont-tell-you/", title: "What insurance comparison sites don't tell you", description: "What comparison sites typically leave out and questions worth asking before deciding.", breadcrumbs: [HOME, guidesHub, { name: "Comparison sites", url: "/guides/what-insurance-comparison-sites-dont-tell-you/" }], placeholder: true },
  { path: "/guides/cheap-insurance-traps/", title: "Cheap insurance traps to watch for", description: "Common traps that can make cheap insurance a poor fit — and what to compare instead.", breadcrumbs: [HOME, guidesHub, { name: "Cheap insurance traps", url: "/guides/cheap-insurance-traps/" }], placeholder: true },
  { path: "/guides/how-to-read-a-pds/", title: "How to read a Product Disclosure Statement (PDS)", description: "How to read an insurance PDS — sections to focus on and red flags to look for.", breadcrumbs: [HOME, guidesHub, { name: "How to read a PDS", url: "/guides/how-to-read-a-pds/" }], placeholder: true },
  { path: "/guides/market-value-vs-agreed-value/", title: "Market value vs agreed value", description: "Market value vs agreed value in car insurance — how each works and what to compare.", breadcrumbs: [HOME, guidesHub, { name: "Market vs agreed value", url: "/guides/market-value-vs-agreed-value/" }], placeholder: true },
  { path: "/guides/insurance-excess-explained/", title: "Insurance excess explained", description: "How insurance excess works in Australia and how it affects premiums and claims.", breadcrumbs: [HOME, guidesHub, { name: "Excess explained", url: "/guides/insurance-excess-explained/" }], placeholder: true },
  { path: "/guides/why-insurance-quotes-change/", title: "Why insurance quotes change", description: "Why two insurance quotes for the same person can differ — and what drives the variation.", breadcrumbs: [HOME, guidesHub, { name: "Why quotes change", url: "/guides/why-insurance-quotes-change/" }], placeholder: true },
  { path: "/guides/how-insurers-price-risk/", title: "How insurers price risk", description: "A plain-English explainer on how insurers calculate premiums.", breadcrumbs: [HOME, guidesHub, { name: "How insurers price risk", url: "/guides/how-insurers-price-risk/" }], placeholder: true },
  { path: "/guides/common-insurance-exclusions/", title: "Common insurance exclusions", description: "Common exclusions across insurance types in Australia and where to find them in the PDS.", breadcrumbs: [HOME, guidesHub, { name: "Common exclusions", url: "/guides/common-insurance-exclusions/" }], placeholder: true },
  { path: "/guides/how-to-compare-insurance-without-getting-confused/", title: "How to compare insurance without getting confused", description: "A simple framework for comparing insurance policies without getting overwhelmed.", breadcrumbs: [HOME, guidesHub, { name: "How to compare", url: "/guides/how-to-compare-insurance-without-getting-confused/" }], placeholder: true },
  { path: "/guides/questions-to-ask-before-buying-insurance/", title: "Questions to ask before buying insurance", description: "Questions worth asking yourself — and the insurer — before buying any insurance policy.", breadcrumbs: [HOME, guidesHub, { name: "Questions to ask", url: "/guides/questions-to-ask-before-buying-insurance/" }], placeholder: true },

  // Reviews
  { path: "/reviews/", title: "Australian Car Insurance Provider Reviews and Comparisons", description: "Plain-English overviews of 15 Australian car insurance providers and 10 head-to-head comparisons — neutral, evergreen, no fake ratings.", breadcrumbs: [HOME, reviewsHub] },
  { path: "/reviews/budget-friendly/", title: "Budget-Friendly Australian Car Insurance Providers", description: "Five Australian car insurers that publicly position around price. Plain-English overviews, key facts and links to each review — neutral, no fake ratings.", breadcrumbs: [HOME, reviewsHub, { name: "Budget-friendly", url: "/reviews/budget-friendly/" }] },
  { path: "/reviews/balanced/", title: "Balanced Australian Car Insurance Providers", description: "Five mid-market Australian car insurers without specific budget or specialist tilt — plain-English overviews and key facts for shoppers wanting a balance of price and features.", breadcrumbs: [HOME, reviewsHub, { name: "Balanced", url: "/reviews/balanced/" }] },
  { path: "/reviews/broader-cover/", title: "Broader Cover Australian Car Insurance Providers", description: "Five Australian car insurers offering broader feature sets, branch networks, partner channels or specialist features — plain-English overviews and key facts.", breadcrumbs: [HOME, reviewsHub, { name: "Broader cover", url: "/reviews/broader-cover/" }] },

  // Company / legal
  { path: "/about/", title: "About CoverScout", description: "What CoverScout is and isn't — a plain-English Australian insurance comparison and education site, not a broker, not a quote engine, not a financial adviser.", breadcrumbs: [HOME, { name: "About", url: "/about/" }] },
  { path: "/contact/", title: "Contact CoverScout", description: "How to reach the CoverScout team — one email address, no forms, real responses within a couple of business days.", breadcrumbs: [HOME, { name: "Contact", url: "/contact/" }] },
  { path: "/privacy/", title: "Privacy Policy", description: "How CoverScout handles information under the Australian Privacy Principles — what we collect (Cloudflare Web Analytics only), how we use it, and your rights.", breadcrumbs: [HOME, { name: "Privacy", url: "/privacy/" }] },
  { path: "/how-we-make-money/", title: "How CoverScout Makes Money", description: "The honest version of CoverScout's commercial model — no active affiliate partnerships yet, no paid placements, no sponsored content.", breadcrumbs: [HOME, { name: "How we make money", url: "/how-we-make-money/" }] },
];

// Provider review pages are derived from PROVIDERS so adding/removing a
// review only touches providers-data.ts.
const PROVIDER_REVIEW_META: RouteMeta[] = PROVIDERS.map((p) => ({
  path: p.path,
  title: p.metaTitle,
  description: p.metaDescription,
  breadcrumbs: [
    HOME,
    reviewsHub,
    { name: `${p.name} car insurance`, url: p.path },
  ],
}));

ROUTES_META.push(...PROVIDER_REVIEW_META);

// Head-to-head VS pages are derived from COMPARISONS so adding a new pair
// only touches comparisons-data.ts.
const COMPARISON_META: RouteMeta[] = COMPARISONS.map((c) => {
  const a = getProvider(c.slugA);
  const b = getProvider(c.slugB);
  const label = a && b ? `${a.name} vs ${b.name}` : `${c.slugA} vs ${c.slugB}`;
  return {
    path: c.path,
    title: c.metaTitle,
    description: c.metaDescription,
    breadcrumbs: [HOME, reviewsHub, { name: label, url: c.path }],
  };
});

ROUTES_META.push(...COMPARISON_META);

export const getRouteMeta = (path: string): RouteMeta | undefined =>
  ROUTES_META.find((r) => r.path === path);

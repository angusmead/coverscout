/**
 * Categorical, defensible facts about each provider for the directory view.
 *
 * Compliance ground rules:
 *   - No numerical scores or "best" rankings. Every value here is descriptive,
 *     not evaluative.
 *   - Every fact is verifiable from public information (PDS, insurer websites,
 *     ASIC registers).
 *   - Brand colours are intentionally NOT used. Each provider is shown with a
 *     muted, neutral palette to avoid trademark or impression-of-endorsement
 *     issues.
 */

export type BrandType =
  | "mainstream"
  | "budget"
  | "specialist"
  | "member-club"
  | "retail-branded";

export type Channel =
  | "branch"
  | "direct-online"
  | "direct-phone"
  | "broker";

export type StateFocus = "national" | "eastern" | "QLD" | "VIC";

/**
 * Editorial grouping for the comparison-tool result pages. Reflects each
 * insurer's *public brand positioning*, not a quality judgement. Most large
 * insurers actually offer products across the spectrum — every category page
 * spells this caveat out.
 */
export type CategoryBucket = "budget-friendly" | "balanced" | "broader-cover";

export type DirectoryFacts = {
  slug: string;
  brandType: BrandType;
  channels: Channel[];
  stateFocus: StateFocus;
  category: CategoryBucket;
  /** ~80 character one-liner for the card. Different from providers-data.lead which is longer. */
  taglineShort: string;
  /** 4 short key-fact strings rendered as the right-hand column. */
  keyFacts: {
    distribution: string;
    coverTypes: string;
    geography: string;
    bundling: string;
  };
  /** 2–3 short categorical badges. Descriptive only. */
  badges: string[];
};

export const DIRECTORY_FACTS: Record<string, DirectoryFacts> = {
  aami: {
    slug: "aami",
    brandType: "mainstream",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "balanced",
    taglineShort: "Long-established national mainstream brand, online and phone.",
    keyFacts: {
      distribution: "Direct (online, app, phone)",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "AAMI personal lines",
    },
    badges: ["Mainstream", "Direct + phone", "National"],
  },
  nrma: {
    slug: "nrma",
    brandType: "mainstream",
    channels: ["branch", "direct-online", "direct-phone"],
    stateFocus: "eastern",
    category: "broader-cover",
    taglineShort: "Mainstream Australian brand with branch network in eastern states.",
    keyFacts: {
      distribution: "Direct + branch",
      coverTypes: "Comp · TPFT · TPP · CTP (NSW/ACT)",
      geography: "Strong NSW · ACT · QLD · TAS",
      bundling: "NRMA personal lines",
    },
    badges: ["Mainstream", "Branch network", "Eastern states"],
  },
  "budget-direct": {
    slug: "budget-direct",
    brandType: "budget",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "budget-friendly",
    taglineShort: "Budget direct insurer with streamlined online quoting.",
    keyFacts: {
      distribution: "Direct online + phone",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "Limited",
    },
    badges: ["Budget direct", "Online focused", "National"],
  },
  youi: {
    slug: "youi",
    brandType: "specialist",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "broader-cover",
    taglineShort: "Tailored direct quoting, traditionally phone-led.",
    keyFacts: {
      distribution: "Phone-led direct",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "Limited",
    },
    badges: ["Phone-led tailored", "Direct", "National"],
  },
  allianz: {
    slug: "allianz",
    brandType: "mainstream",
    channels: ["direct-online", "broker"],
    stateFocus: "national",
    category: "broader-cover",
    taglineShort: "Global insurer with broad Australian operations and partner channels.",
    keyFacts: {
      distribution: "Direct + partner channels",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "Personal + business lines",
    },
    badges: ["Mainstream", "Direct + partners", "National"],
  },
  qbe: {
    slug: "qbe",
    brandType: "mainstream",
    channels: ["direct-online", "broker"],
    stateFocus: "national",
    category: "broader-cover",
    taglineShort: "Major Australian insurer accessible direct and via brokers.",
    keyFacts: {
      distribution: "Direct + broker channels",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "Personal + business lines",
    },
    badges: ["Mainstream", "Broker accessible", "National"],
  },
  racq: {
    slug: "racq",
    brandType: "member-club",
    channels: ["direct-online", "direct-phone", "branch"],
    stateFocus: "QLD",
    category: "balanced",
    taglineShort: "Queensland motoring-club insurer with member benefits.",
    keyFacts: {
      distribution: "Member-aligned, branch + digital",
      coverTypes: "Comp · TPFT · TPP",
      geography: "Queensland",
      bundling: "Member services + insurance",
    },
    badges: ["Member club", "QLD focus", "Branch network"],
  },
  racv: {
    slug: "racv",
    brandType: "member-club",
    channels: ["direct-online", "direct-phone", "branch"],
    stateFocus: "VIC",
    category: "balanced",
    taglineShort: "Victorian motoring-club insurer with member benefits.",
    keyFacts: {
      distribution: "Member-aligned, branch + digital",
      coverTypes: "Comp · TPFT · TPP",
      geography: "Victoria",
      bundling: "Member services + insurance",
    },
    badges: ["Member club", "VIC focus", "Branch network"],
  },
  bingle: {
    slug: "bingle",
    brandType: "budget",
    channels: ["direct-online"],
    stateFocus: "national",
    category: "budget-friendly",
    taglineShort: "Online-only no-frills budget insurer.",
    keyFacts: {
      distribution: "Online-only direct",
      coverTypes: "Comp · TPP",
      geography: "National",
      bundling: "Very limited",
    },
    badges: ["No-frills budget", "Online only", "National"],
  },
  coles: {
    slug: "coles",
    brandType: "retail-branded",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "budget-friendly",
    taglineShort: "Retail-distributed insurance underwritten by a partner insurer.",
    keyFacts: {
      distribution: "Retail-branded direct",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "Loyalty-aligned",
    },
    badges: ["Retail brand", "Loyalty aligned", "National"],
  },
  woolworths: {
    slug: "woolworths",
    brandType: "retail-branded",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "budget-friendly",
    taglineShort: "Retail-distributed insurance underwritten by a partner insurer.",
    keyFacts: {
      distribution: "Retail-branded direct",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "Loyalty-aligned",
    },
    badges: ["Retail brand", "Loyalty aligned", "National"],
  },
  suncorp: {
    slug: "suncorp",
    brandType: "mainstream",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "balanced",
    taglineShort: "Major Australian insurer with strong Queensland heritage.",
    keyFacts: {
      distribution: "Direct (online, app, phone)",
      coverTypes: "Comp · TPFT · TPP · CTP (eligible states)",
      geography: "National · strong QLD",
      bundling: "Suncorp personal lines",
    },
    badges: ["Mainstream", "QLD heritage", "National"],
  },
  gio: {
    slug: "gio",
    brandType: "mainstream",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "balanced",
    taglineShort: "Long-established mainstream Australian insurer, direct and phone.",
    keyFacts: {
      distribution: "Direct (online, app, phone)",
      coverTypes: "Comp · TPFT · TPP · CTP (eligible states)",
      geography: "National",
      bundling: "Personal + business lines",
    },
    badges: ["Mainstream", "Direct + phone", "National"],
  },
  apia: {
    slug: "apia",
    brandType: "specialist",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "broader-cover",
    taglineShort: "Specialist insurer pitched at Australians aged 50 and over.",
    keyFacts: {
      distribution: "Direct, over-50s focused",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "APIA personal lines",
    },
    badges: ["Over-50s focus", "Specialist", "National"],
  },
  "real-insurance": {
    slug: "real-insurance",
    brandType: "specialist",
    channels: ["direct-online", "direct-phone"],
    stateFocus: "national",
    category: "budget-friendly",
    taglineShort: "Direct insurer offering car, life and pet insurance products.",
    keyFacts: {
      distribution: "Direct (online, phone)",
      coverTypes: "Comp · TPFT · TPP",
      geography: "National",
      bundling: "Real Insurance personal lines",
    },
    badges: ["Direct + phone", "Specialist", "National"],
  },
  rollin: {
    slug: "rollin",
    brandType: "specialist",
    channels: ["direct-online"],
    stateFocus: "national",
    category: "budget-friendly",
    taglineShort: "Digital-first pay-as-you-drive insurer pitched at low-mileage drivers.",
    keyFacts: {
      distribution: "Direct (web + app)",
      coverTypes: "Pay-as-you-drive comprehensive",
      geography: "National",
      bundling: "Standalone",
    },
    badges: ["Pay-as-you-drive", "Digital-first", "Low mileage"],
  },
};

export const BRAND_TYPE_LABELS: Record<BrandType, string> = {
  mainstream: "Mainstream",
  budget: "Budget",
  specialist: "Specialist",
  "member-club": "Member club",
  "retail-branded": "Retail-branded",
};

export const CHANNEL_LABELS: Record<Channel, string> = {
  branch: "Branch network",
  "direct-online": "Direct online",
  "direct-phone": "Direct phone",
  broker: "Broker accessible",
};

export const STATE_FOCUS_LABELS: Record<StateFocus, string> = {
  national: "National",
  eastern: "Eastern states focus",
  QLD: "QLD focus",
  VIC: "VIC focus",
};

export const CATEGORY_LABELS: Record<CategoryBucket, string> = {
  "budget-friendly": "Budget-friendly",
  balanced: "Balanced",
  "broader-cover": "Broader cover",
};

export const CATEGORY_PATHS: Record<CategoryBucket, string> = {
  "budget-friendly": "/reviews/budget-friendly/",
  balanced: "/reviews/balanced/",
  "broader-cover": "/reviews/broader-cover/",
};

export const getProvidersInCategory = (category: CategoryBucket): string[] =>
  Object.values(DIRECTORY_FACTS)
    .filter((f) => f.category === category)
    .map((f) => f.slug);

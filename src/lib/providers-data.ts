/**
 * Provider review data for /reviews/[slug]/ pages.
 *
 * Compliance ground rules baked into this data:
 *   - No "best" / "cheapest" / "guaranteed" framing.
 *   - No specific dollar amounts, premiums, awards, star ratings, or per-year stats.
 *   - Use "may suit" / "worth comparing" / "depending on your needs".
 *   - Always nudge readers to PDS / TMD.
 *   - Distribution model and broad market positioning only, no claims about
 *     internal financials, underwriter relationships that may change, or specific
 *     policy clauses (those live in the provider's own PDS).
 *
 * TODO: verify each provider's current underwriter and group ownership before
 * adding any explicit corporate claims. Current copy intentionally avoids them.
 */

export type ProviderFaq = { q: string; a: string };

export type ProviderProfile = {
  slug: string;
  name: string;
  /** URL path. Always /reviews/<slug>/ */
  path: string;
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraph under H1. */
  lead: string;
  /** 2 short paragraphs giving neutral, evergreen context. */
  overview: string[];
  maySuit: string[];
  mayNotSuit: string[];
  coverTypes: string[];
  features: { heading: string; body: string }[];
  pricingPositioning: string;
  pros: string[];
  cons: string[];
  comparison: string;
  /** Other provider slugs to cross-link to (4–6). */
  relatedSlugs: string[];
  /** 2–4 supporting long-tail / guide links. */
  longTailLinks: { url: string; label: string }[];
  faqs: ProviderFaq[];
};

const COMMON_COVER = [
  "Comprehensive car insurance",
  "Third party property",
  "Third party fire and theft",
];

export const PROVIDERS: ProviderProfile[] = [
  // ─── AAMI ────────────────────────────────────────────────
  {
    slug: "aami",
    name: "AAMI",
    path: "/reviews/aami/",
    metaTitle: "AAMI Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "AAMI car insurance overview, cover types, key features, pros and cons, and how AAMI may compare with other Australian car insurers.",
    lead: "A neutral, plain-English overview of AAMI car insurance in Australia, what it offers, who it may suit, and what's worth weighing before comparing it with other insurers.",
    overview: [
      "AAMI is a long-established Australian car insurance brand with a national footprint and a broad product range. It's part of a major Australian insurance group and distributes primarily direct to consumers via its website, app, and phone.",
      "Like most major insurers, AAMI offers the standard ladder of car insurance cover, comprehensive, third party fire and theft, and third party property, alongside optional extras and add-ons. Specifics, exclusions and limits are set out in the AAMI PDS for each product.",
    ],
    maySuit: [
      "Drivers who want a recognised national brand with branch, phone and digital channels",
      "Customers who value an established claims network across Australia",
      "People who want to bundle car insurance with other AAMI products (home, contents, motorcycle)",
    ],
    mayNotSuit: [
      "Drivers chasing the lowest possible premium without weighing features or service",
      "Customers who prefer a fully online, no-phone-contact experience (other brands lean further this way)",
      "High-risk drivers who may be declined by mainstream underwriting and need specialist cover",
    ],
    coverTypes: [...COMMON_COVER, "CTP / green slip in eligible states"],
    features: [
      { heading: "Claims process", body: "Online, app and phone claims lodgement with a national repairer network. Specific timeframes and conditions sit in the PDS." },
      { heading: "Excess options", body: "Standard and voluntary excess choices at quote time, with age-based and inexperienced driver excesses commonly applying on top." },
      { heading: "Optional extras", body: "Hire car after an accident, choice of repairer and roadside assistance are commonly available as add-ons or upgrades." },
      { heading: "Digital experience", body: "Mobile app and online account for policy management, claims and renewals." },
    ],
    pricingPositioning: "AAMI is generally positioned in the mid-market, neither the cheapest direct brand nor the most premium. Actual quotes vary widely by driver, vehicle and postcode, so it's worth comparing AAMI against both budget and major competitors using matched inputs.",
    pros: [
      "Long-established brand with broad national presence",
      "Multiple ways to lodge claims (online, app, phone)",
      "Bundling options across personal lines",
      "Broad set of optional extras",
    ],
    cons: [
      "Not always the lowest-priced direct option",
      "Pricing varies widely between profiles, not a one-size-fits-all winner",
      "Optional extras can add meaningfully to the premium if all stacked",
    ],
    comparison: "AAMI is one of several mainstream brands worth quoting alongside NRMA, Allianz, Suncorp and Budget Direct. For a fair comparison, lock the same vehicle, drivers, excess and sum-insured method across each quote.",
    relatedSlugs: ["nrma", "suncorp", "gio", "budget-direct", "allianz"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/excess/", label: "How car insurance excess works" },
      { url: "/car-insurance/claims/", label: "How the claims process works" },
    ],
    faqs: [
      { q: "Is AAMI car insurance available in every Australian state and territory?", a: "AAMI offers cover broadly across Australia, with CTP / green slip availability depending on the state's CTP framework. The product disclosure on AAMI's website confirms availability for each state." },
      { q: "Can I choose my own repairer with AAMI car insurance?", a: "Choice of repairer is commonly offered as an option or upgrade rather than a default. The PDS for the specific AAMI policy you're considering will spell out whether it's included or available as an extra." },
      { q: "Does AAMI offer roadside assistance?", a: "AAMI typically offers roadside assistance as an optional add-on rather than as a default inclusion. Inclusions and call-out limits sit in the roadside product disclosure." },
      { q: "Does AAMI insure modified vehicles?", a: "AAMI may cover certain modifications if they're declared and accepted at quote stage. Undeclared modifications can give the insurer grounds to reduce or decline a claim." },
      { q: "Can I bundle AAMI car insurance with other AAMI policies?", a: "AAMI offers home, contents, motorcycle and other personal lines that can be held alongside car insurance. Multi-policy discounts may apply, though it's worth pricing each policy individually before bundling." },
    ],
  },

  // ─── NRMA ────────────────────────────────────────────────
  {
    slug: "nrma",
    name: "NRMA Insurance",
    path: "/reviews/nrma/",
    metaTitle: "NRMA Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "NRMA Insurance car insurance overview, cover types, key features, pros and cons, and how NRMA may compare with other Australian car insurers.",
    lead: "A clear, neutral overview of NRMA car insurance in Australia, its cover types, features, and how it may stack up against the rest of the market for comparison purposes.",
    overview: [
      "NRMA Insurance is a long-established Australian insurance brand with a particularly strong presence in NSW, the ACT, Queensland and Tasmania. It offers the standard ladder of car insurance products, distributed through digital channels, branches and partner agents.",
      "Like other major insurers, NRMA's actual policy terms, inclusions, exclusions, excesses and limits, sit in the relevant PDS and Target Market Determination, which are worth reading before deciding.",
    ],
    maySuit: [
      "Drivers based in NSW, ACT or QLD who want a brand with strong local presence",
      "Customers who value access to physical branches alongside digital channels",
      "Drivers wanting a broad range of optional extras and bundling options",
    ],
    mayNotSuit: [
      "Drivers in states with limited NRMA branch presence who prioritise local service",
      "Customers chasing rock-bottom direct pricing without weighing service",
      "Higher-risk drivers who may need a specialist insurer or broker",
    ],
    coverTypes: [...COMMON_COVER, "CTP / green slip in NSW and the ACT"],
    features: [
      { heading: "Claims process", body: "Online, app and phone claims options with a national repair network. Specific timeframes sit in the PDS." },
      { heading: "Excess options", body: "Standard and voluntary excess choices, with age-based and inexperienced driver excesses commonly applied." },
      { heading: "Optional extras", body: "Choice of repairer, hire car cover, roadside assistance and no-claim bonus protection are commonly available." },
      { heading: "Digital experience", body: "App and online account for policy management, renewals and claims." },
    ],
    pricingPositioning: "NRMA is generally positioned in the mid-market and isn't typically marketed as a budget brand. Whether NRMA quotes competitively for any given driver depends heavily on profile and vehicle, so comparing on matched inputs is the only reliable way to test.",
    pros: [
      "Long-established Australian brand with strong eastern-state presence",
      "Branch, phone and digital channels",
      "Broad set of optional extras",
      "Range of bundling options across personal lines",
    ],
    cons: [
      "Not consistently the lowest-priced direct brand",
      "Branch network thinner outside core eastern states",
      "Optional extras can add up if stacked",
    ],
    comparison: "NRMA is a useful comparison point alongside AAMI, Allianz, RACV (in VIC), RACQ (in QLD) and the more budget-focused direct brands. Matched-input quotes across three or more insurers usually surface a meaningful spread.",
    relatedSlugs: ["aami", "racv", "racq", "allianz", "suncorp", "budget-direct"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/no-claim-bonus/", label: "How no-claim bonus works" },
      { url: "/car-insurance/lower-premiums/", label: "Ways to lower your premium" },
    ],
    faqs: [
      { q: "Is NRMA car insurance available outside NSW?", a: "Yes, NRMA Insurance offers cover in multiple states, with particularly strong presence in NSW, ACT, QLD and Tasmania. Availability and product specifics may differ slightly by state, the NRMA website confirms what's offered where you live." },
      { q: "Does NRMA offer choice of repairer?", a: "Choice of repairer is commonly available, sometimes as a default and sometimes as an option, depending on the policy tier. The PDS will set out exactly what's included." },
      { q: "Does NRMA Insurance cover green slips?", a: "NRMA offers CTP / green slip cover in NSW and the ACT. Availability and pricing is governed by each state's CTP framework." },
      { q: "Can I add roadside assistance to an NRMA car insurance policy?", a: "Roadside assistance is commonly offered as an optional extra. Coverage limits and call-out conditions sit in the roadside product disclosure." },
      { q: "Does NRMA car insurance cover hire car after a not-at-fault accident?", a: "Hire car cover varies between policy tiers and may be standard, included with conditions, or available as an add-on. The PDS spells it out for each specific policy." },
    ],
  },

  // ─── Budget Direct ────────────────────────────────────────
  {
    slug: "budget-direct",
    name: "Budget Direct",
    path: "/reviews/budget-direct/",
    metaTitle: "Budget Direct Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Budget Direct car insurance overview, cover types, key features, pros and cons, and how it may compare with other Australian car insurers.",
    lead: "A plain-English overview of Budget Direct car insurance in Australia, what it offers, the kind of customer it tends to suit, and what to weigh against other direct brands.",
    overview: [
      "Budget Direct is a direct-to-consumer car insurance brand operating in Australia, primarily distributed online and via phone. It positions itself as a price-competitive alternative to traditional insurers and offers the standard ladder of car insurance cover.",
      "Specific terms, exclusions and limits, including excesses, hire-car cover and choice of repairer, are set out in the Budget Direct PDS for each product.",
    ],
    maySuit: [
      "Price-conscious drivers comfortable with self-service via web and app",
      "Drivers who don't need branch access",
      "Customers who want to compare against mainstream insurers on a like-for-like basis",
    ],
    mayNotSuit: [
      "Drivers who want extensive in-person branch service",
      "Higher-risk drivers who may not be accepted by direct underwriting",
      "Customers who prioritise broad optional-extra menus over price",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online and phone-based claims process with a network of repairers. Specifics sit in the PDS." },
      { heading: "Excess options", body: "Choice of standard excess, with age-based and inexperienced driver excesses applying on top in line with the PDS." },
      { heading: "Optional extras", body: "Choice of repairer, hire car cover and roadside assistance are commonly available as paid add-ons." },
      { heading: "Digital experience", body: "Online quote and policy management, plus mobile app for policy and claims tasks." },
    ],
    pricingPositioning: "Budget Direct is generally positioned as a price-competitive direct insurer and tends to score well on premium when compared against mainstream brands for similar cover. Whether it ends up competitive for any particular driver depends on the specific quote, so it's worth comparing on matched inputs.",
    pros: [
      "Often price-competitive on direct quotes",
      "Streamlined online quoting and policy management",
      "Standard cover ladder available",
      "App-based claims and policy tasks",
    ],
    cons: [
      "No branch network for face-to-face service",
      "Optional extras may be paid add-ons rather than included",
      "Pricing can still vary widely depending on profile",
    ],
    comparison: "Budget Direct is a useful price benchmark alongside other direct brands like Youi and Bingle. It's also worth comparing against mainstream brands like AAMI, NRMA and Allianz for the same vehicle, drivers and excess.",
    relatedSlugs: ["youi", "bingle", "aami", "coles", "real-insurance"],
    longTailLinks: [
      { url: "/car-insurance/cheap/", label: "Cheap car insurance, what to watch for" },
      { url: "/car-insurance/quotes/", label: "How to compare car insurance quotes" },
      { url: "/car-insurance/lower-premiums/", label: "Lowering your car insurance premium" },
    ],
    faqs: [
      { q: "Is Budget Direct a real Australian car insurer?", a: "Yes, Budget Direct is an established Australian car insurance brand operating direct-to-consumer. As with any insurer, the underwriter and entity behind the brand are disclosed in the PDS and on the company website." },
      { q: "Can I get a Budget Direct quote without giving my contact details?", a: "Most online quote tools require some identifying details to produce an accurate quote. Whether contact details are required upfront varies, the quote form will indicate what's needed." },
      { q: "Does Budget Direct offer choice of repairer?", a: "Choice of repairer is commonly offered as an optional extra rather than a default inclusion. The PDS for the specific Budget Direct policy will confirm." },
      { q: "Does Budget Direct cover hire car after an accident?", a: "Hire car cover is typically available as an optional add-on with limits set in the PDS. Worth confirming for the specific policy you're quoting." },
      { q: "Can I pay Budget Direct car insurance monthly?", a: "Monthly payment options are available on most Budget Direct car insurance policies, sometimes with a small surcharge versus annual. Whether monthly suits depends on cash flow and the surcharge size." },
    ],
  },

  // ─── Youi ─────────────────────────────────────────────────
  {
    slug: "youi",
    name: "Youi",
    path: "/reviews/youi/",
    metaTitle: "Youi Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Youi car insurance overview, cover types, key features, pros and cons, and how Youi may compare with other Australian car insurers.",
    lead: "A neutral overview of Youi car insurance in Australia, its tailored-quote approach, the cover it offers, and what to weigh before comparing it against other direct brands.",
    overview: [
      "Youi is a direct-to-consumer Australian car insurance brand known for its individually tailored quote process, often handled via phone with a Youi consultant. It offers the standard ladder of car insurance products to drivers across Australia.",
      "As with any insurer, the specific cover, exclusions and limits are set out in the Youi PDS and Target Market Determination, which are worth reviewing before deciding.",
    ],
    maySuit: [
      "Drivers happy to walk through a personalised quote conversation by phone",
      "People whose situation may not fit a standard online quote form",
      "Customers who want to discuss optional extras and discounts in detail",
    ],
    mayNotSuit: [
      "Drivers who prefer purely online, self-service quoting",
      "Customers who want a quick instant-quote experience without speaking to anyone",
      "Higher-risk drivers who may need a specialist insurer",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Phone and online claims options. Specific timeframes and processes sit in the PDS." },
      { heading: "Excess options", body: "Choice of excess at quote stage, with age-based and inexperienced driver excesses commonly applying." },
      { heading: "Optional extras", body: "Choice of repairer, hire car, roadside assistance and similar add-ons are commonly available." },
      { heading: "Digital experience", body: "Online account and app, with phone-led quoting as a defining feature." },
    ],
    pricingPositioning: "Youi positions itself around individualised pricing, the idea that asking more questions can produce a better-fit (and potentially lower) quote. Whether that bears out for any specific driver depends on the conversation and the comparison, so it's worth quoting Youi alongside both budget and mainstream insurers.",
    pros: [
      "Tailored quote process can suit unusual situations",
      "Direct-to-consumer pricing without a broker layer",
      "Standard cover ladder with familiar optional extras",
      "Phone consultation offered upfront",
    ],
    cons: [
      "Phone-led process won't suit everyone",
      "Quote time can be longer than fully online competitors",
      "Pricing isn't always lower than mainstream insurers despite the tailoring claim",
    ],
    comparison: "Youi is most usefully compared against other direct brands like Budget Direct and Bingle, and against mainstream insurers like AAMI and NRMA. Matched inputs make the comparison fair regardless of how each insurer collects them.",
    relatedSlugs: ["budget-direct", "bingle", "aami", "nrma", "gio"],
    longTailLinks: [
      { url: "/car-insurance/quotes/", label: "How to compare car insurance quotes" },
      { url: "/car-insurance/compare/", label: "What to compare in car insurance" },
      { url: "/car-insurance/best/", label: "How to choose what may suit you" },
    ],
    faqs: [
      { q: "Why does Youi want to ask so many questions for a quote?", a: "Youi positions itself around individually tailored pricing and uses a longer set of questions to refine the quote. Whether that produces a meaningfully better price for you specifically is something only a comparison can answer." },
      { q: "Is Youi cheaper than other direct insurers?", a: "Sometimes yes, sometimes no. Youi's pricing varies widely by individual profile. Comparing matched quotes across multiple insurers is the only reliable way to see how Youi prices for your specific situation." },
      { q: "Can I get a Youi car insurance quote entirely online?", a: "Online quote options exist, though Youi traditionally pairs online entry with a phone follow-up to refine the quote. The Youi website indicates the current quote pathways." },
      { q: "Does Youi insure drivers under 25?", a: "Youi accepts drivers under 25, generally with age-based excesses applied on top of the standard excess. Acceptance and pricing varies by individual profile." },
      { q: "Does Youi cover ride-share or commercial vehicle use?", a: "Coverage for ride-share, business or commercial use isn't standard on most personal car insurance policies and may need a specific product or endorsement. Worth asking explicitly during the quote conversation." },
    ],
  },

  // ─── Allianz ──────────────────────────────────────────────
  {
    slug: "allianz",
    name: "Allianz",
    path: "/reviews/allianz/",
    metaTitle: "Allianz Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Allianz car insurance overview, cover types, key features, pros and cons, and how Allianz may compare with other Australian car insurers.",
    lead: "A neutral overview of Allianz car insurance in Australia, its broad product range, distribution model, and how it stacks up for comparison purposes.",
    overview: [
      "Allianz is a global insurance group with a significant Australian presence, offering car insurance directly and through partner channels. It carries a broad product range across personal and business lines.",
      "Specific cover terms, exclusions and excesses sit in the Allianz PDS for each product. Allianz's Australian operations include retail and white-label distribution, so the policy you're quoted may carry the Allianz brand directly or appear via a partner.",
    ],
    maySuit: [
      "Drivers who want an insurer with global scale and a long Australian footprint",
      "Customers who may already hold other Allianz personal-lines policies",
      "Drivers comparing both direct and partner-distributed quotes",
    ],
    mayNotSuit: [
      "Drivers focused only on rock-bottom budget pricing",
      "Customers who specifically want a state-affiliated motoring-club brand",
      "Higher-risk profiles that may need a specialist insurer or broker",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online and phone claims with a national repairer network. Conditions and timeframes sit in the PDS." },
      { heading: "Excess options", body: "Standard and voluntary excess at quote stage, with age-based and inexperienced driver excesses applying as defined in the PDS." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer, no-claim bonus protection and roadside-style assistance are commonly available depending on policy." },
      { heading: "Digital experience", body: "Online account and app for policy management, renewals and claims." },
    ],
    pricingPositioning: "Allianz typically sits in the mid-market on direct pricing rather than being marketed as a budget brand. Quotes vary widely depending on whether you're buying direct or via a partner, so it's worth comparing both.",
    pros: [
      "Established global insurer with long Australian operating history",
      "Broad product range across personal lines",
      "Available direct and through partner channels",
      "Standard set of optional extras",
    ],
    cons: [
      "Not consistently the lowest-priced direct brand",
      "Partner-distributed Allianz policies can carry slightly different terms, worth confirming",
      "Optional extras can add up if stacked",
    ],
    comparison: "Allianz is a useful comparison point alongside QBE, NRMA, AAMI and the budget direct brands. As always, matched inputs across at least three quotes give the cleanest read.",
    relatedSlugs: ["qbe", "nrma", "aami", "gio", "suncorp"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/compare/", label: "How to compare car insurance" },
      { url: "/car-insurance/excess/", label: "Car insurance excess explained" },
    ],
    faqs: [
      { q: "Is Allianz a major car insurer in Australia?", a: "Yes, Allianz is one of the larger insurers in Australia and operates across personal and business lines. It's part of the global Allianz group." },
      { q: "Can I buy Allianz car insurance through a third party?", a: "Allianz distributes both directly and through partner channels in Australia. The exact policy terms are governed by the relevant PDS, worth confirming whether you're quoted a direct Allianz policy or a partner-branded version underwritten by Allianz." },
      { q: "Does Allianz cover business use of a car under personal car insurance?", a: "Standard personal car insurance often excludes most business use beyond travel between offices. If your car is used commercially, you may need a business motor product instead. The PDS spells out what's included." },
      { q: "Does Allianz car insurance include roadside assistance?", a: "Roadside assistance is typically an optional extra on Allianz car insurance rather than a default inclusion. Specific limits and conditions sit in the roadside product disclosure." },
      { q: "Does Allianz offer agreed value on car insurance?", a: "Allianz commonly offers both market value and agreed value options on comprehensive car insurance, with the choice made at quote stage. The PDS confirms how each is defined and applied." },
    ],
  },

  // ─── QBE ──────────────────────────────────────────────────
  {
    slug: "qbe",
    name: "QBE",
    path: "/reviews/qbe/",
    metaTitle: "QBE Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "QBE car insurance overview, cover types, key features, pros and cons, and how QBE may compare with other Australian car insurers.",
    lead: "A neutral overview of QBE car insurance in Australia, what it covers, the kind of customer it tends to suit, and how it compares for shopping purposes.",
    overview: [
      "QBE is a major Australian-headquartered insurer with global operations and a long history in personal and business insurance. Its car insurance products are distributed both directly and via brokers.",
      "QBE's car insurance covers the standard ladder of cover types, with specific inclusions, exclusions and excesses set out in the QBE PDS and TMD for each product.",
    ],
    maySuit: [
      "Drivers who want a major established insurer with broad coverage",
      "Customers who already hold other QBE policies and want to consolidate",
      "Drivers using a broker who has access to QBE products",
    ],
    mayNotSuit: [
      "Drivers focused purely on the lowest direct price",
      "Customers wanting a slick app-only experience above all else",
      "Niche or high-risk drivers who may be better served by specialist insurers",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Phone, online and broker-mediated claims options. Specific processes are set out in the PDS." },
      { heading: "Excess options", body: "Standard excess with voluntary excess available; age-based and inexperienced driver excesses commonly apply per the PDS." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer, windscreen cover and roadside assistance commonly available." },
      { heading: "Digital experience", body: "Online account access and app support, though the broker channel remains a meaningful part of QBE distribution." },
    ],
    pricingPositioning: "QBE typically sits as a major-insurer mid-market option rather than a budget brand. Pricing varies widely depending on driver profile and distribution channel, direct quotes and broker-sourced quotes can differ.",
    pros: [
      "Long-established Australian insurer with broad product range",
      "Available both directly and via brokers",
      "Standard set of optional extras",
      "Personal and business product range",
    ],
    cons: [
      "Not typically a budget brand on price",
      "Distribution model means less of a flashy retail consumer experience",
      "Broker-sourced quotes may differ from direct quotes",
    ],
    comparison: "QBE is worth comparing alongside Allianz, Suncorp, NRMA and AAMI on matched inputs. Brokers can also surface QBE quotes that aren't visible on consumer comparison sites.",
    relatedSlugs: ["allianz", "suncorp", "nrma", "aami", "racv"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/best/", label: "How to choose what may suit you" },
      { url: "/car-insurance/quotes/", label: "How to compare quotes properly" },
    ],
    faqs: [
      { q: "Is QBE a major Australian car insurer?", a: "Yes, QBE is one of Australia's larger insurers and is also a global insurance group. It writes both personal and business motor insurance in Australia." },
      { q: "Can I buy QBE car insurance through a broker?", a: "QBE has a strong broker distribution channel in Australia alongside its direct offering. A broker may be useful if your situation is more complex or you want access to multiple insurers in one conversation." },
      { q: "Does QBE offer choice of repairer on car insurance?", a: "Choice of repairer is commonly available, sometimes as a default and sometimes as an option. The PDS for the specific QBE policy spells out what's included." },
      { q: "Does QBE car insurance cover modifications?", a: "Declared modifications may be accepted depending on the type and the underwriting decision. Undeclared modifications can affect a claim, worth disclosing upfront." },
      { q: "Can I bundle QBE car insurance with other policies?", a: "Customers who already hold other QBE personal-lines policies may have multi-policy options. Whether bundling produces a better overall price requires comparing each policy individually first." },
    ],
  },

  // ─── RACQ ─────────────────────────────────────────────────
  {
    slug: "racq",
    name: "RACQ",
    path: "/reviews/racq/",
    metaTitle: "RACQ Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "RACQ car insurance overview, cover types, key features, pros and cons, and how RACQ may compare with other Australian car insurers.",
    lead: "A clear, neutral overview of RACQ car insurance, Queensland's motoring-club insurance brand, and how it may compare with other Australian car insurers.",
    overview: [
      "RACQ (the Royal Automobile Club of Queensland) is Queensland's motoring-club insurance brand, offering car insurance alongside roadside assistance, banking and other member services. It has a particularly strong presence in Queensland and a long association with QLD drivers.",
      "RACQ's car insurance covers the standard ladder of products. Specifics, inclusions, exclusions, excesses, and member benefits, sit in the RACQ PDS and member terms.",
    ],
    maySuit: [
      "Queensland drivers who want a state-aligned, member-based insurer",
      "Existing RACQ members wanting to consolidate services",
      "Customers who value bundled benefits like roadside assistance and member discounts",
    ],
    mayNotSuit: [
      "Drivers outside Queensland looking for state-specific motoring-club benefits",
      "Customers who don't want any membership-style relationship",
      "Drivers chasing the absolute lowest direct price",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online, phone and member-facing claims channels with a Queensland-strong repairer network." },
      { heading: "Excess options", body: "Standard and voluntary excess choices, with age-based and inexperienced driver excesses commonly applying per the PDS." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer, roadside assistance (often via the RACQ club product), and member-related extras." },
      { heading: "Digital experience", body: "Online account and app; member portal also surfaces non-insurance services." },
    ],
    pricingPositioning: "RACQ tends to sit in the mid-market rather than as a budget direct brand, with member discounts factored into the pricing for some products. Whether the bundle works out cheaper for you depends on whether you'd actually use the member benefits.",
    pros: [
      "Strong Queensland presence with state-affiliated branding",
      "Member benefits across motoring, banking and travel",
      "Long-established and recognisable in QLD",
      "Multiple service touch points",
    ],
    cons: [
      "Best fit really for QLD drivers; member benefits are state-aligned",
      "Member fees can offset insurance discounts if you wouldn't otherwise use services",
      "Not usually the lowest-priced direct option on a pure-price basis",
    ],
    comparison: "RACQ is worth comparing against RACV (in VIC equivalents), NRMA, Suncorp and AAMI for QLD drivers. Member-bundle savings should be modelled against standalone direct insurers for a fair view.",
    relatedSlugs: ["racv", "nrma", "suncorp", "allianz", "aami"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/lower-premiums/", label: "Lowering your car insurance premium" },
      { url: "/car-insurance/no-claim-bonus/", label: "How no-claim bonus works" },
    ],
    faqs: [
      { q: "Do I need to be an RACQ member to take out RACQ car insurance?", a: "Membership requirements depend on the product and time period. Some RACQ products are available to non-members; others may be member-only or carry better pricing for members. The RACQ website confirms the current rules." },
      { q: "Does RACQ car insurance work outside Queensland?", a: "RACQ car insurance generally covers driving across Australia, but the brand's member services and partner network are Queensland-aligned. Drivers based outside QLD may want to compare against their own state's motoring club brand." },
      { q: "Does RACQ include roadside assistance with car insurance?", a: "Roadside assistance is typically a separate RACQ club product rather than an automatic inclusion on car insurance. Members often hold both, but they're priced separately." },
      { q: "Are RACQ premiums cheaper for members?", a: "Some RACQ products price differently for members, but whether it's cheaper overall depends on membership fees and the specific quote. Worth comparing the all-in cost against another insurer." },
      { q: "Does RACQ insure newer drivers in Queensland?", a: "RACQ accepts younger and less experienced drivers, with age-based and inexperienced driver excesses applying per the PDS. Pricing varies widely by individual profile." },
    ],
  },

  // ─── RACV ─────────────────────────────────────────────────
  {
    slug: "racv",
    name: "RACV",
    path: "/reviews/racv/",
    metaTitle: "RACV Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "RACV car insurance overview, cover types, key features, pros and cons, and how RACV may compare with other Australian car insurers.",
    lead: "A neutral overview of RACV car insurance, Victoria's motoring-club insurance brand, and how it may compare with other Australian options.",
    overview: [
      "RACV (the Royal Automobile Club of Victoria) is Victoria's motoring-club insurance brand, offering car insurance alongside roadside assistance, financial services, and other member benefits. It has a long association with Victorian drivers and a strong presence across the state.",
      "RACV car insurance covers the standard ladder of products. Specific cover terms, exclusions and excesses sit in the RACV PDS and member terms.",
    ],
    maySuit: [
      "Victorian drivers who want a state-aligned, member-based insurer",
      "Existing RACV members consolidating services",
      "Customers who value bundled motoring and member benefits",
    ],
    mayNotSuit: [
      "Drivers outside Victoria seeking local-state motoring-club benefits",
      "Customers focused purely on the cheapest direct quote",
      "People who prefer a no-membership, transactional relationship",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online, phone and member channels with a Victoria-strong repairer network." },
      { heading: "Excess options", body: "Standard and voluntary excess at quote, with age-based and inexperienced driver excesses commonly applying per the PDS." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer, no-claim bonus protection and member-related extras commonly available." },
      { heading: "Digital experience", body: "Online account and app, plus member portal for non-insurance services." },
    ],
    pricingPositioning: "RACV tends to sit in the mid-market rather than as a budget direct brand. Member discounts may apply on some products, but whether the all-in cost beats a standalone insurer depends on the specific quote.",
    pros: [
      "Strong Victorian presence with state-affiliated branding",
      "Bundling with member benefits across motoring and financial services",
      "Established brand with broad product range",
      "Multiple service channels",
    ],
    cons: [
      "Best suited to Victorian drivers; member benefits are state-aligned",
      "Membership fees can offset price advantages if you wouldn't otherwise use services",
      "Not consistently the lowest direct price",
    ],
    comparison: "RACV is most directly comparable to RACQ (in QLD), NRMA, AAMI and Allianz for Victorian drivers. As always, model the all-in cost, membership plus premium, against pure direct insurers.",
    relatedSlugs: ["racq", "nrma", "aami", "gio", "allianz"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/over-50s/", label: "Car insurance for over 50s" },
      { url: "/car-insurance/no-claim-bonus/", label: "No-claim bonus explained" },
    ],
    faqs: [
      { q: "Do I need RACV membership for RACV car insurance?", a: "Membership requirements vary by product and time period. The RACV website confirms current rules and which products price differently for members." },
      { q: "Is RACV car insurance only for Victorian residents?", a: "RACV car insurance is generally aimed at Victorian residents, with the brand's member services strongly aligned to Victoria. Some products may be available outside VIC, worth confirming." },
      { q: "Does RACV include roadside assistance with car insurance?", a: "Roadside assistance is typically a separate RACV product rather than automatically bundled with car insurance. Members frequently hold both, but they're priced separately." },
      { q: "Are RACV premiums cheaper for members?", a: "Some RACV products carry member-specific pricing. Whether it works out cheaper overall depends on membership fees and how the specific quote compares to other insurers." },
      { q: "Does RACV cover modifications and aftermarket parts?", a: "Declared modifications may be accepted subject to underwriting, with the PDS spelling out conditions. Undeclared modifications can affect claims." },
    ],
  },

  // ─── Bingle ───────────────────────────────────────────────
  {
    slug: "bingle",
    name: "Bingle",
    path: "/reviews/bingle/",
    metaTitle: "Bingle Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Bingle car insurance overview, cover types, key features, pros and cons, and how Bingle may compare with other Australian car insurers.",
    lead: "A plain-English overview of Bingle car insurance in Australia, its no-frills online model and how it may compare with other direct brands.",
    overview: [
      "Bingle is an online-only Australian car insurance brand operating with a deliberately stripped-back, low-cost model. It offers a focused range of car insurance products via its website and app, with limited phone support compared to mainstream brands.",
      "Bingle's product set, exclusions and limits are set out in its PDS. The model trades broader optional-extras menus and high-touch service for lower headline pricing.",
    ],
    maySuit: [
      "Self-service drivers comfortable with online-only insurance",
      "Drivers looking for a low-cost direct option who don't need many extras",
      "Customers who'd rarely call an insurer anyway",
    ],
    mayNotSuit: [
      "Drivers who want phone or branch contact upfront",
      "Customers who value extensive optional-extras menus",
      "Higher-risk profiles that may be declined by online-only underwriting",
    ],
    coverTypes: ["Comprehensive car insurance", "Third party property"],
    features: [
      { heading: "Claims process", body: "Online and limited phone claims options. Conditions and processes sit in the PDS." },
      { heading: "Excess options", body: "Choice of excess at quote, with age-based and inexperienced driver excesses applying per the PDS." },
      { heading: "Optional extras", body: "More limited than mainstream insurers, hire car and similar add-ons may not be standard." },
      { heading: "Digital experience", body: "Online quote, account management and claims as the primary channel." },
    ],
    pricingPositioning: "Bingle is generally positioned as a budget direct brand, often producing competitive headline premiums relative to mainstream insurers. The trade-off tends to be a thinner extras menu and a self-service-first experience.",
    pros: [
      "Often price-competitive on direct headline premiums",
      "Streamlined online process",
      "Simple product structure",
      "Backed by an established Australian insurance group",
    ],
    cons: [
      "Limited optional extras compared to mainstream insurers",
      "Self-service model may not suit everyone",
      "Less support for unusual or higher-risk profiles",
    ],
    comparison: "Bingle is worth quoting against other budget-positioned brands like Budget Direct and against mainstream insurers like AAMI for the same vehicle. The differences may show up as much in extras as in price.",
    relatedSlugs: ["budget-direct", "youi", "coles", "woolworths", "aami"],
    longTailLinks: [
      { url: "/car-insurance/cheap/", label: "Cheap car insurance, what to watch for" },
      { url: "/car-insurance/excess/", label: "Car insurance excess explained" },
      { url: "/car-insurance/quotes/", label: "How to compare quotes properly" },
    ],
    faqs: [
      { q: "Is Bingle a real Australian car insurance brand?", a: "Yes, Bingle is an established Australian car insurance brand operating online, backed by a major Australian insurance group. The underwriter and entity are disclosed in the PDS." },
      { q: "Can I call Bingle for car insurance support?", a: "Bingle's model emphasises self-service via its website and app, with phone support available for specific situations. The Bingle site indicates current contact options." },
      { q: "Does Bingle offer choice of repairer?", a: "Bingle's product is deliberately stripped-back; choice of repairer is more limited compared to mainstream insurers. The PDS spells out what's available." },
      { q: "Is Bingle car insurance always cheaper?", a: "Bingle tends to be price-competitive on headline premium, but it isn't always the cheapest option for every profile. Comparison shopping with matched inputs is the only reliable way to check." },
      { q: "Does Bingle insure modified or imported cars?", a: "Bingle's underwriting tends to suit standard vehicles. Modified, imported or unusual vehicles may need a more flexible insurer or specialist broker." },
    ],
  },

  // ─── Coles ────────────────────────────────────────────────
  {
    slug: "coles",
    name: "Coles",
    path: "/reviews/coles/",
    metaTitle: "Coles Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Coles car insurance overview, cover types, key features, pros and cons, and how Coles may compare with other Australian car insurers.",
    lead: "A neutral overview of Coles car insurance in Australia, a retail-distributed insurance product, what it offers, and what to weigh in comparison.",
    overview: [
      "Coles car insurance is a retail-distributed product offered under the Coles supermarket brand and underwritten by a partner insurer. It's offered direct to consumers, often alongside Flybuys-related rewards.",
      "As with any retail-distributed insurance, the actual insurer behind the brand is disclosed in the PDS, which is also the source of truth for cover terms, exclusions and limits.",
    ],
    maySuit: [
      "Drivers who shop with Coles and want loyalty-aligned car insurance",
      "Customers comfortable with online or phone-based insurance distribution",
      "Drivers who want to compare a retail brand against mainstream insurers",
    ],
    mayNotSuit: [
      "Drivers who specifically want a direct relationship with a major insurer brand",
      "Customers seeking branch service or face-to-face support",
      "Higher-risk drivers who may need a specialist provider",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online and phone claims options handled by the underwriting insurer behind the Coles brand. Specifics sit in the PDS." },
      { heading: "Excess options", body: "Choice of excess at quote with age-based and inexperienced driver excesses applying per the PDS." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer and similar add-ons commonly available." },
      { heading: "Digital experience", body: "Online quote and account management, with policy tasks handled via the Coles insurance portal." },
    ],
    pricingPositioning: "Coles car insurance is typically positioned as a value-focused retail-distributed product. Pricing varies by profile, sometimes competitive against direct brands, sometimes not, so it's worth comparing on matched inputs.",
    pros: [
      "Loyalty-aligned for regular Coles shoppers",
      "Standard cover ladder available",
      "Simple online quoting and management",
      "Retail brand familiarity",
    ],
    cons: [
      "Underlying insurer may not match the brand on the front end",
      "Service experience can vary based on the underwriter",
      "Not always the lowest price for every profile",
    ],
    comparison: "Coles car insurance is most usefully compared against other retail-distributed brands like Woolworths, alongside direct insurers like Budget Direct, Bingle and major brands like AAMI.",
    relatedSlugs: ["woolworths", "budget-direct", "bingle", "real-insurance", "aami"],
    longTailLinks: [
      { url: "/car-insurance/cheap/", label: "Cheap car insurance, what to watch for" },
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/quotes/", label: "How to compare car insurance quotes" },
    ],
    faqs: [
      { q: "Who underwrites Coles car insurance?", a: "Coles car insurance is distributed under the Coles brand but underwritten by a partner insurer. The underwriting insurer is disclosed in the PDS, worth checking, since it's the entity that actually pays claims." },
      { q: "Do I get Flybuys points for Coles car insurance?", a: "Coles insurance products have at times integrated with Flybuys-style rewards. Whether points apply, and on what basis, depends on the current promotion, confirm with Coles before assuming." },
      { q: "Is Coles car insurance available across Australia?", a: "Coles car insurance is generally available nationally for eligible drivers, with state-by-state availability and pricing varying as with any insurer." },
      { q: "Can I lodge a Coles car insurance claim online?", a: "Online and phone claims options are commonly available, with the claims handled by the underwriting insurer. Process specifics sit in the PDS." },
      { q: "Is Coles car insurance better value than buying directly from a major insurer?", a: "Sometimes yes, sometimes no, it depends on your specific profile. Comparing matched quotes from Coles, a major insurer, and a budget direct brand is the cleanest way to see." },
    ],
  },

  // ─── Woolworths ───────────────────────────────────────────
  {
    slug: "woolworths",
    name: "Woolworths",
    path: "/reviews/woolworths/",
    metaTitle: "Woolworths Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Woolworths car insurance overview, cover types, key features, pros and cons, and how it may compare with other Australian car insurers.",
    lead: "A neutral overview of Woolworths car insurance, a retail-distributed product, and how it may compare with other Australian car insurance options.",
    overview: [
      "Woolworths car insurance is a retail-distributed insurance product offered under the Woolworths brand and underwritten by a partner insurer. It's distributed direct to consumers, sometimes alongside Everyday Rewards-aligned promotions.",
      "As with all retail-distributed insurance, the actual underwriter is disclosed in the PDS, which is the source of truth for cover terms.",
    ],
    maySuit: [
      "Drivers who shop with Woolworths and want loyalty-aligned car insurance",
      "Customers comfortable with online and phone-based distribution",
      "Drivers comparing a retail brand against direct and mainstream insurers",
    ],
    mayNotSuit: [
      "Drivers who specifically want a direct relationship with a major insurer brand",
      "Customers wanting in-person branch service",
      "Higher-risk drivers who may need a specialist provider",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online and phone claims options handled by the underwriting insurer behind the Woolworths brand." },
      { heading: "Excess options", body: "Choice of excess at quote, with age-based and inexperienced driver excesses applying per the PDS." },
      { heading: "Optional extras", body: "Common add-ons such as hire car cover and choice of repairer typically available." },
      { heading: "Digital experience", body: "Online quote and policy management via the Woolworths insurance portal." },
    ],
    pricingPositioning: "Woolworths car insurance is typically positioned as a value-focused retail product. Whether it ends up competitive depends on the specific quote, sometimes it's price-competitive, sometimes not.",
    pros: [
      "Loyalty-aligned for regular Woolworths shoppers",
      "Standard cover ladder",
      "Online quoting and policy management",
      "Retail brand familiarity",
    ],
    cons: [
      "Underwriter may differ from the front-end brand",
      "Service depends on the underwriting partner",
      "Not always the lowest price across the board",
    ],
    comparison: "Woolworths car insurance is most directly comparable to Coles. Both are also worth comparing against budget direct brands like Bingle and Budget Direct, plus mainstream insurers like AAMI.",
    relatedSlugs: ["coles", "budget-direct", "bingle", "real-insurance", "aami"],
    longTailLinks: [
      { url: "/car-insurance/cheap/", label: "Cheap car insurance, what to watch for" },
      { url: "/car-insurance/lower-premiums/", label: "Lowering your car insurance premium" },
      { url: "/car-insurance/quotes/", label: "How to compare quotes properly" },
    ],
    faqs: [
      { q: "Who underwrites Woolworths car insurance?", a: "Woolworths car insurance is distributed under the Woolworths brand but underwritten by a partner insurer. The underwriting entity is disclosed in the PDS." },
      { q: "Do I earn Everyday Rewards points on Woolworths car insurance?", a: "Reward integrations have varied over time, confirm with Woolworths whether points apply and on what basis before assuming." },
      { q: "Is Woolworths car insurance available in every state?", a: "Coverage is generally available nationally for eligible drivers, with state-by-state pricing differences applying as with any insurer." },
      { q: "Can I claim on Woolworths car insurance online?", a: "Online and phone claims options are commonly available, with claims handled by the underwriting insurer behind the brand." },
      { q: "Is Woolworths car insurance the same product as Coles car insurance?", a: "No, they're different products with different underwriters, despite both being retail-distributed brands. Worth comparing them as separate insurers, not assuming they're equivalent." },
    ],
  },

  // ─── Suncorp ──────────────────────────────────────────────
  {
    slug: "suncorp",
    name: "Suncorp",
    path: "/reviews/suncorp/",
    metaTitle: "Suncorp Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Suncorp car insurance overview, cover types, key features, pros and cons, and how Suncorp may compare with other Australian car insurers.",
    lead: "A neutral overview of Suncorp car insurance in Australia, a major insurer with a long history and a broad set of products, and how it compares for shopping purposes.",
    overview: [
      "Suncorp is a major Australian insurance group offering car insurance under the Suncorp brand alongside several other well-known insurance brands. Its car insurance is distributed direct to consumers and through partner channels.",
      "Suncorp's product set covers the standard ladder of car insurance, with specific terms set out in the relevant PDS and TMD.",
    ],
    maySuit: [
      "Drivers who want a major Australian insurer with a long track record",
      "Customers based in Queensland (Suncorp's strongest historical market)",
      "Drivers who may want to bundle car insurance with home, contents or other Suncorp products",
    ],
    mayNotSuit: [
      "Drivers focused only on the lowest direct price",
      "Customers who specifically want an online-only no-frills experience",
      "Higher-risk profiles requiring a specialist insurer",
    ],
    coverTypes: [...COMMON_COVER, "CTP / green slip in eligible states"],
    features: [
      { heading: "Claims process", body: "Online, app and phone claims with a national repairer network. Specific timeframes sit in the PDS." },
      { heading: "Excess options", body: "Standard and voluntary excess choices with age-based and inexperienced driver excesses applying per the PDS." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer, no-claim bonus protection and roadside assistance commonly available." },
      { heading: "Digital experience", body: "Online account and app for policy management, claims and renewals." },
    ],
    pricingPositioning: "Suncorp typically sits in the mid-market on direct pricing rather than as a budget brand. Quote competitiveness varies significantly by profile.",
    pros: [
      "Major Australian insurer with broad product range",
      "Multiple ways to engage (online, app, phone)",
      "Bundling options across personal lines",
      "Particularly strong Queensland presence",
    ],
    cons: [
      "Not consistently the lowest direct price",
      "Branch presence weaker than some state-focused brands",
      "Optional extras can add up if stacked",
    ],
    comparison: "Suncorp is worth comparing against AAMI, GIO, Allianz, NRMA and budget direct brands. As with any major insurer, matched-input quotes give the cleanest read.",
    relatedSlugs: ["aami", "gio", "apia", "bingle", "nrma", "allianz"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/compare/", label: "How to compare car insurance" },
      { url: "/car-insurance/no-claim-bonus/", label: "No-claim bonus explained" },
    ],
    faqs: [
      { q: "Is Suncorp the same as AAMI?", a: "Suncorp Group includes AAMI, GIO, APIA and Bingle among its brands, though each operates as a separate consumer brand with its own pricing and PDS. Worth treating them as different insurers when comparing." },
      { q: "Is Suncorp car insurance only available in Queensland?", a: "Suncorp has a particularly strong Queensland presence but offers car insurance across Australia. Availability and pricing vary by state." },
      { q: "Does Suncorp insurance include CTP / green slip?", a: "Suncorp offers CTP / green slip cover in eligible states, with availability and pricing governed by each state's CTP framework." },
      { q: "Can I bundle Suncorp car insurance with other Suncorp policies?", a: "Suncorp offers home, contents and other personal-lines policies that can be held alongside car insurance. Multi-policy discounts may apply, but it's worth pricing each policy individually first." },
      { q: "Does Suncorp offer choice of repairer on car insurance?", a: "Choice of repairer is commonly available, sometimes as a default and sometimes as an option. The PDS for the specific Suncorp policy spells it out." },
    ],
  },

  // ─── GIO ──────────────────────────────────────────────────
  {
    slug: "gio",
    name: "GIO",
    path: "/reviews/gio/",
    metaTitle: "GIO Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "GIO car insurance overview, cover types, key features, pros and cons, and how GIO may compare with other Australian car insurers.",
    lead: "A neutral overview of GIO car insurance in Australia, a long-established brand within a major insurance group, and how it compares for shopping purposes.",
    overview: [
      "GIO is a long-established Australian car insurance brand within a major Australian insurance group. It offers the standard ladder of car insurance products, distributed direct to consumers via online and phone channels.",
      "Specific cover terms, exclusions and excesses are set out in the GIO PDS for each product.",
    ],
    maySuit: [
      "Drivers wanting a long-established brand with broad personal-lines coverage",
      "Customers comfortable with direct distribution (online and phone)",
      "Drivers wanting to bundle car insurance with other GIO products",
    ],
    mayNotSuit: [
      "Drivers chasing the very lowest direct price",
      "Customers who specifically want a state-affiliated motoring-club brand",
      "Higher-risk drivers who may need a specialist insurer",
    ],
    coverTypes: [...COMMON_COVER, "CTP / green slip in eligible states"],
    features: [
      { heading: "Claims process", body: "Online, app and phone claims options with a national repairer network. Conditions sit in the PDS." },
      { heading: "Excess options", body: "Standard and voluntary excess choices with age-based and inexperienced driver excesses commonly applying." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer, no-claim bonus protection and roadside-style assistance commonly available." },
      { heading: "Digital experience", body: "Online account and app for policy management and claims." },
    ],
    pricingPositioning: "GIO sits in the mid-market on direct pricing, not typically a budget brand, not a luxury one either. Quote competitiveness varies meaningfully by profile.",
    pros: [
      "Long-established Australian brand",
      "Multiple ways to engage (online, app, phone)",
      "Standard set of optional extras",
      "Bundling options across personal lines",
    ],
    cons: [
      "Not consistently the cheapest direct option",
      "Limited differentiation in marketing positioning vs sibling brands",
      "Optional extras can add up",
    ],
    comparison: "GIO is worth comparing against Suncorp, AAMI, NRMA, Allianz and budget brands. Despite being part of the same group as some of those, GIO quotes can still differ meaningfully.",
    relatedSlugs: ["suncorp", "aami", "apia", "nrma", "allianz"],
    longTailLinks: [
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/excess/", label: "Car insurance excess explained" },
      { url: "/car-insurance/claims/", label: "How the claims process works" },
    ],
    faqs: [
      { q: "Is GIO a major Australian car insurer?", a: "Yes, GIO is a long-established Australian insurance brand and part of a major Australian insurance group. It writes both personal and business motor insurance." },
      { q: "Does GIO offer CTP / green slip cover?", a: "GIO offers CTP / green slip cover in eligible states, with pricing governed by each state's CTP framework." },
      { q: "Can I get a GIO car insurance quote online?", a: "GIO offers online quoting alongside phone-based quoting. The website confirms the current pathways." },
      { q: "Does GIO offer roadside assistance with car insurance?", a: "Roadside-style assistance is typically offered as an optional extra rather than a default inclusion. Limits and conditions sit in the roadside product disclosure." },
      { q: "Is GIO the same as AAMI or Suncorp?", a: "GIO is a separate consumer brand within the same broader Australian insurance group as AAMI and Suncorp. Each brand prices and packages products differently, worth quoting separately when comparing." },
    ],
  },

  // ─── APIA ─────────────────────────────────────────────────
  {
    slug: "apia",
    name: "APIA",
    path: "/reviews/apia/",
    metaTitle: "APIA Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "APIA car insurance overview, cover types, key features, pros and cons, and how APIA may compare with other Australian car insurers (especially for over-50s drivers).",
    lead: "A neutral overview of APIA car insurance, a brand specifically pitched at Australian drivers over 50, and how it may compare with mainstream and specialist insurers.",
    overview: [
      "APIA (Australian Pensioners Insurance Agency) is a brand within a major Australian insurance group, focused specifically on Australians aged 50 and over. It positions its products around features it believes suit mature drivers.",
      "APIA car insurance covers the standard ladder of products. Specific cover terms, age-related conditions and inclusions are set out in the APIA PDS.",
    ],
    maySuit: [
      "Drivers aged 50+ wanting a brand pitched at their bracket",
      "Mature drivers who value features like agreed value and choice of repairer as defaults",
      "Customers with lower annual kilometres who'd benefit from age-aligned pricing",
    ],
    mayNotSuit: [
      "Drivers under 50 (APIA is age-restricted on entry)",
      "Customers who'd rather compare on a fully open-market basis without age-aligned pitching",
      "Drivers chasing the absolute lowest direct price regardless of features",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online, app and phone claims with a national repairer network. Conditions sit in the PDS." },
      { heading: "Excess options", body: "Standard and voluntary excess choices, with age-related rules differing from mainstream brands given the over-50s focus." },
      { heading: "Optional extras", body: "Choice of repairer, hire car cover, agreed value and other features commonly emphasised in product positioning." },
      { heading: "Digital experience", body: "Online account and app, with phone support a meaningful part of customer service." },
    ],
    pricingPositioning: "APIA's pricing is positioned around its over-50s audience and may price competitively for mature drivers with clean records and lower kilometres. Whether it ends up competitive vs mainstream insurers for any specific driver requires comparison on matched inputs.",
    pros: [
      "Specifically aimed at over-50s drivers",
      "Features often pitched at mature-driver needs (agreed value, choice of repairer)",
      "Backed by a major Australian insurance group",
      "Multiple service channels",
    ],
    cons: [
      "Not available to under-50s drivers",
      "Not automatically the cheapest option for over-50s, comparison still matters",
      "Marketing-led positioning doesn't always translate into the cheapest quote",
    ],
    comparison: "APIA is most usefully compared against mainstream insurers like AAMI, Suncorp and GIO for over-50s drivers, plus state motoring-club brands like RACV and RACQ. The over-50s pages compares the broader market for this bracket.",
    relatedSlugs: ["suncorp", "gio", "aami", "racv", "racq"],
    longTailLinks: [
      { url: "/car-insurance/over-50s/", label: "Car insurance for over 50s" },
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/lower-premiums/", label: "Lowering your premium" },
    ],
    faqs: [
      { q: "Do I have to be over 50 to take out APIA car insurance?", a: "Yes, APIA's products are designed for Australians aged 50 and over, and the entry age is reflected in eligibility. The APIA website confirms current rules." },
      { q: "Is APIA always cheaper for over-50s drivers?", a: "Not always. APIA is positioned for the over-50s market but isn't guaranteed to be the cheapest option for every mature driver. Comparing against mainstream insurers and motoring clubs is the only reliable way to check." },
      { q: "Does APIA include agreed value as standard?", a: "APIA commonly emphasises features like agreed value in its product positioning, but the specifics depend on the policy you choose. The PDS confirms whether it's included or optional." },
      { q: "Does APIA cover hire car after a not-at-fault accident?", a: "Hire car cover is commonly available as a feature on comprehensive APIA policies, with conditions and limits set out in the PDS." },
      { q: "Is APIA only available in certain states?", a: "APIA car insurance is generally available nationally, with state-by-state availability and pricing varying as with any insurer." },
    ],
  },

  // ─── Real Insurance ───────────────────────────────────────
  {
    slug: "real-insurance",
    name: "Real Insurance",
    path: "/reviews/real-insurance/",
    metaTitle: "Real Insurance Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Real Insurance car insurance overview, cover types, key features, pros and cons, and how it may compare with other Australian car insurers.",
    lead: "A neutral overview of Real Insurance car insurance in Australia, a direct-to-consumer brand offering several insurance lines, and how it compares for shopping purposes.",
    overview: [
      "Real Insurance is an Australian direct-to-consumer insurance brand offering car insurance alongside several other personal insurance lines. It distributes online and via phone, and is underwritten by a partner insurer.",
      "Specific cover terms, exclusions and limits sit in the Real Insurance PDS for each product. The underwriting insurer is disclosed in the PDS, worth checking, since they're the entity that pays claims.",
    ],
    maySuit: [
      "Drivers comfortable with direct-to-consumer distribution",
      "Customers wanting a multi-line insurer for car, life or other personal cover",
      "Drivers comparing a focused direct brand against mainstream insurers",
    ],
    mayNotSuit: [
      "Drivers wanting in-person branch service",
      "Customers who specifically want a major insurer brand on the front end",
      "Higher-risk drivers who may need a specialist provider",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Claims process", body: "Online and phone claims handled by the underwriting insurer behind the brand." },
      { heading: "Excess options", body: "Standard and voluntary excess at quote, with age-based and inexperienced driver excesses applying per the PDS." },
      { heading: "Optional extras", body: "Hire car cover, choice of repairer and similar add-ons commonly available." },
      { heading: "Digital experience", body: "Online quote and policy management with phone support available." },
    ],
    pricingPositioning: "Real Insurance is generally positioned as a value-focused direct brand. Whether it ends up competitive on any given quote depends on the profile, comparison shopping with matched inputs is the cleanest test.",
    pros: [
      "Direct-to-consumer model with online and phone access",
      "Standard cover ladder available",
      "Multi-line brand if you want car alongside other cover",
      "Backed by an established underwriter",
    ],
    cons: [
      "Front-end brand differs from the underwriter, worth confirming who handles claims",
      "Not always the cheapest option for every profile",
      "Limited branch presence",
    ],
    comparison: "Real Insurance is most usefully compared against other direct brands like Budget Direct, Coles and Woolworths car insurance, plus mainstream insurers like AAMI for the same vehicle and drivers.",
    relatedSlugs: ["coles", "woolworths", "budget-direct", "youi", "bingle"],
    longTailLinks: [
      { url: "/car-insurance/cheap/", label: "Cheap car insurance, what to watch for" },
      { url: "/car-insurance/quotes/", label: "How to compare quotes properly" },
      { url: "/car-insurance/no-claim-bonus/", label: "No-claim bonus explained" },
    ],
    faqs: [
      { q: "Who underwrites Real Insurance car insurance?", a: "Real Insurance is distributed under its own brand but underwritten by a partner insurer. The underwriting entity is disclosed in the PDS, always worth checking since they're the company that pays claims." },
      { q: "Is Real Insurance available across Australia?", a: "Real Insurance car insurance is generally available nationally to eligible drivers, with state-by-state pricing differences applying as with any insurer." },
      { q: "Does Real Insurance offer choice of repairer?", a: "Choice of repairer is commonly available as an option rather than a default. The PDS for the specific Real Insurance policy spells out what's included." },
      { q: "Can I bundle Real Insurance car insurance with other Real products?", a: "Real Insurance offers other personal-lines products that can be held alongside car insurance. Whether bundling produces an overall saving depends on quoting each policy individually first." },
      { q: "Is Real Insurance the same as Coles or Woolworths car insurance?", a: "No, Real Insurance is its own brand, separate from retail-distributed brands like Coles or Woolworths car insurance. They may share underwriting partners at times, but they're sold as different products with different PDS documents." },
    ],
  },

  // ─── Rollin' ──────────────────────────────────────────────
  {
    slug: "rollin",
    name: "Rollin'",
    path: "/reviews/rollin/",
    metaTitle: "Rollin' Car Insurance Review: Cover, Features and How It Compares",
    metaDescription: "Rollin' car insurance overview, its digital-first pay-as-you-drive model, who it may suit, and how it may compare with other Australian car insurers.",
    lead: "A neutral, plain-English overview of Rollin' car insurance in Australia, a digital-first insurer built around a pay-as-you-drive model, who it may suit, and what's worth weighing in comparison.",
    overview: [
      "Rollin' is a more recent entrant to the Australian car insurance market, built around a digital-first customer experience, both web and app, and a pay-as-you-drive pricing model. Rather than charging a flat annual premium, Rollin' typically prices comprehensive cover off the kilometres you actually drive, with the aim of suiting lower-mileage drivers who feel they're subsidising heavier road users on traditional policies.",
      "Like other Australian car insurance brands, Rollin' is underwritten by a partner insurer that's disclosed in the PDS. The PDS is the source of truth for cover terms, exclusions, the specific km-based pricing mechanics and how monthly billing works.",
    ],
    maySuit: [
      "Lower-mileage drivers who travel well below the average annual kilometres",
      "Drivers comfortable with a fully digital experience (web or app) and digital claims",
      "People wanting clearer line-of-sight between how much they drive and what they pay",
    ],
    mayNotSuit: [
      "High-kilometre drivers, heavier road use can erode the pay-as-you-drive saving",
      "Drivers who prefer a branch network, phone-led service or a long-established brand",
      "Customers who want fixed annual pricing rather than usage-linked billing",
    ],
    coverTypes: COMMON_COVER,
    features: [
      { heading: "Pay-as-you-drive pricing", body: "Premiums are linked to kilometres driven rather than charged purely as a flat annual figure. Exact mechanics, base charge, per-km rate, caps, are spelled out in the Rollin' PDS." },
      { heading: "Claims process", body: "Claims are typically lodged through the Rollin' app or web portal, with the underwriting insurer handling assessment and repair coordination. Specifics sit in the PDS." },
      { heading: "Excess options", body: "Standard and voluntary excess choices apply at quote stage, with age-based and inexperienced driver excesses commonly stacking per the PDS." },
      { heading: "Digital experience", body: "Account management, quoting, claims and policy changes are all handled through the Rollin' web portal and mobile app. No branch network, with most contact happening via digital channels." },
    ],
    pricingPositioning: "Rollin' is positioned at lower-mileage drivers, the model is designed to save money for people who drive below-average kilometres each year. For higher-mileage drivers the maths can flip the other way, so it's worth quoting Rollin' alongside flat-rate brands using your honest annual kilometre figure.",
    pros: [
      "Pay-as-you-drive pricing can suit genuinely low-mileage drivers",
      "Digital-first experience for quoting, billing and claims, available via web and app",
      "Transparent link between usage and cost",
      "Comprehensive cover available, underwritten by a partner insurer",
    ],
    cons: [
      "Less suitable for high-mileage drivers, where flat-rate brands often quote lower",
      "Digital-only experience may not suit drivers who prefer phone or branch service",
      "Newer brand with a shorter Australian track record than mainstream incumbents",
    ],
    comparison: "Rollin' is most usefully compared against budget-direct brands like Bingle and Budget Direct on price for a low-mileage profile, and against mainstream insurers like AAMI, NRMA or Allianz on features and claims experience. Quoting all three styles using identical inputs, including your real annual kilometres, gives the cleanest read.",
    relatedSlugs: ["bingle", "budget-direct", "youi", "real-insurance", "aami"],
    longTailLinks: [
      { url: "/car-insurance/cheap/", label: "Cheap car insurance, what to watch for" },
      { url: "/car-insurance/comprehensive/", label: "Comprehensive car insurance explained" },
      { url: "/car-insurance/lower-premiums/", label: "Ways to lower your car insurance premium" },
    ],
    faqs: [
      { q: "How does Rollin's pay-as-you-drive pricing work?", a: "Rollin' typically prices comprehensive cover with a base charge plus a per-kilometre component, billed monthly. The exact mechanics, base rate, per-km rate, any monthly caps, are set out in the Rollin' PDS, which is the source of truth before you sign up." },
      { q: "Who underwrites Rollin' car insurance?", a: "Rollin' is distributed under its own brand but underwritten by a partner insurer that's disclosed in the PDS. The underwriting insurer is the entity that actually pays claims, so it's worth checking before deciding." },
      { q: "Is Rollin' cheaper than other Australian car insurance brands?", a: "It depends entirely on how much you drive. For lower-mileage drivers, the pay-as-you-drive model can produce a meaningfully lower annual cost. For higher-mileage drivers, flat-rate brands often work out cheaper. Quoting both with your honest kilometre figure is the only reliable test." },
      { q: "Does Rollin' offer third party cover or only comprehensive?", a: "Rollin's product offering and the specific cover types available, comprehensive, third party fire and theft, third party property, are set out in the current Rollin' PDS. Worth checking the latest version on the Rollin' site since product menus can change." },
      { q: "How do I lodge a Rollin' claim?", a: "Claims are typically lodged through the Rollin' app or web portal, with the underwriting insurer handling assessment and repair coordination. The full claims process and your obligations sit in the PDS." },
    ],
  },
];

export const getProvider = (slug: string): ProviderProfile | undefined =>
  PROVIDERS.find((p) => p.slug === slug);

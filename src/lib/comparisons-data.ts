/**
 * Head-to-head comparison data for /reviews/<slugA>-vs-<slugB>/ pages.
 *
 * Same compliance ground rules as providers-data.ts:
 *   - No "best" / "winner" / "guaranteed" language. Compliance words only:
 *     "may suit", "worth comparing", "depending on your needs".
 *   - No specific premiums, awards, claim acceptance rates, or other facts
 *     that change year to year. Pricing positioning is described in broad,
 *     evergreen terms.
 *   - Every page links readers back to PDS / TMD as the source of truth.
 */

export type ComparisonFaq = { q: string; a: string };

export type ComparisonRow = { dimension: string; a: string; b: string };

export type Comparison = {
  slugA: string;
  slugB: string;
  /** /reviews/<slugA>-vs-<slugB>/ */
  path: string;
  metaTitle: string;
  metaDescription: string;
  /** One-sentence lead under the H1. */
  lead: string;
  /** 2 paragraphs of neutral context. */
  context: string[];
  /** 4–5 themed difference blocks. */
  differences: { heading: string; body: string }[];
  whoSuitsA: string[];
  whoSuitsB: string[];
  prosA: string[];
  consA: string[];
  prosB: string[];
  consB: string[];
  /** ~6 rows for the side-by-side table. */
  table: ComparisonRow[];
  closing: string;
  /** 3–5 other comparison slugs to cross-link to (e.g. "aami-vs-nrma"). */
  relatedSlugs: string[];
  faqs: ComparisonFaq[];
};

const path = (a: string, b: string) => `/reviews/${a}-vs-${b}/`;

export const COMPARISONS: Comparison[] = [
  // 1 ─── AAMI vs NRMA ──────────────────────────────────────
  {
    slugA: "aami",
    slugB: "nrma",
    path: path("aami", "nrma"),
    metaTitle: "AAMI vs NRMA Car Insurance: How They Compare",
    metaDescription: "AAMI vs NRMA car insurance compared, distribution, cover types, key features and who each may suit. Neutral, plain-English breakdown.",
    lead: "A side-by-side look at AAMI and NRMA car insurance, two long-established mainstream Australian brands, and how they may compare for shopping purposes.",
    context: [
      "AAMI and NRMA are two of Australia's most recognisable car insurance brands, and at first glance they look broadly similar, both offer the standard ladder of cover, both distribute direct, and both have a long history serving Australian drivers. The differences are real, but they tend to live in distribution, geographic footprint and the way each brand bundles features.",
      "This page compares them on the things that usually matter at quote and claim time, without declaring a winner. The right answer almost always depends on your specific vehicle, location and what you value in an insurer.",
    ],
    differences: [
      { heading: "Distribution and presence", body: "Both brands distribute direct via website, app and phone. NRMA also has a branch network, particularly strong in NSW, ACT, QLD and Tasmania. AAMI's model is more fully digital-and-phone." },
      { heading: "Cover types", body: "Both offer comprehensive, third party fire and theft, and third party property. NRMA also offers CTP / green slip cover in NSW and the ACT; AAMI offers CTP in eligible states under its broader group footprint." },
      { heading: "Pricing positioning", body: "Both sit in the mid-market on direct pricing rather than as budget challengers. Quote competitiveness varies meaningfully by driver profile and vehicle, so the price gap can swing in either direction." },
      { heading: "Service channels", body: "AAMI: online, app and phone. NRMA: online, app, phone and physical branches in core states. The branch presence is the most concrete service-side difference." },
      { heading: "Bundling", body: "Both brands offer home, contents and other personal-lines policies that can be held alongside car insurance. Multi-policy discounts may apply on both, though it's worth pricing each policy individually before bundling." },
    ],
    whoSuitsA: [
      "Drivers wanting a recognised national mainstream brand",
      "Customers comfortable with online and phone (no branch needed)",
      "Households wanting to bundle across AAMI personal lines",
    ],
    whoSuitsB: [
      "Drivers in NSW, ACT, QLD or Tasmania who value branch access",
      "Customers who want CTP / green slip from the same insurer (NSW/ACT)",
      "Drivers wanting a multi-channel mainstream brand",
    ],
    prosA: [
      "Long-established national brand",
      "Multiple ways to engage (online, app, phone)",
      "Broad set of optional extras",
    ],
    consA: [
      "No branch network",
      "Not consistently the lowest direct price",
      "Optional extras can add up if stacked",
    ],
    prosB: [
      "Long-established Australian brand with strong eastern-state presence",
      "Branch + digital + phone channels",
      "CTP / green slip available in NSW and ACT",
    ],
    consB: [
      "Branch presence thinner outside core states",
      "Not consistently the lowest direct price",
      "Pricing can vary widely by profile",
    ],
    table: [
      { dimension: "Distribution model", a: "Direct (online, app, phone)", b: "Direct (online, app, phone, branch)" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP, CTP in eligible states", b: "Comprehensive, TPFT, TPP, CTP / green slip in NSW & ACT" },
      { dimension: "Pricing positioning", a: "Mid-market mainstream", b: "Mid-market mainstream" },
      { dimension: "Branch presence", a: "None", b: "Strong in NSW, ACT, QLD, TAS" },
      { dimension: "Bundling options", a: "AAMI personal lines (home, contents, motor, motorcycle)", b: "NRMA personal lines (home, contents, travel, etc.)" },
      { dimension: "Often suits", a: "Drivers wanting a national digital-led mainstream brand", b: "Eastern-state drivers wanting branch + digital channels" },
    ],
    closing: "AAMI and NRMA cover similar ground on cover types and overall positioning, with branch presence and CTP availability being the most concrete differentiators. Whichever may suit you best really depends on whether branch access matters and how each insurer prices for your specific vehicle and postcode.",
    relatedSlugs: ["nrma-vs-allianz", "aami-vs-budget-direct", "racq-vs-suncorp", "apia-vs-nrma", "allianz-vs-qbe"],
    faqs: [
      { q: "Is AAMI cheaper than NRMA in Australia?", a: "It depends entirely on the driver, vehicle and postcode. Both are mid-market mainstream brands and either can quote cheaper than the other on a given profile. Comparing matched quotes is the only reliable test." },
      { q: "Are AAMI and NRMA owned by the same company?", a: "No, AAMI and NRMA Insurance sit within different major Australian insurance groups. They operate as separate brands with their own pricing models, PDS documents and claims processes." },
      { q: "Which has better claims handling, AAMI or NRMA?", a: "Independent consumer review sources show mixed scores for both, with quality often varying by region and claim type. Looking at recent customer reviews and any AFCA-related data is more useful than a single broad statement." },
      { q: "Does NRMA Insurance cover green slips outside NSW?", a: "NRMA Insurance offers CTP / green slip cover in NSW and the ACT. Outside those jurisdictions, the CTP framework differs and other insurers handle it." },
      { q: "Can I bundle car insurance with home insurance at both AAMI and NRMA?", a: "Yes, both brands offer home and contents insurance alongside car insurance, and both apply multi-policy discounts in some form. Worth pricing each policy individually first to confirm the bundle is genuinely competitive." },
    ],
  },

  // 2 ─── Budget Direct vs Youi ─────────────────────────────
  {
    slugA: "budget-direct",
    slugB: "youi",
    path: path("budget-direct", "youi"),
    metaTitle: "Budget Direct vs Youi Car Insurance: How They Compare",
    metaDescription: "Budget Direct vs Youi car insurance compared, distribution, pricing, features and who each may suit. Plain-English neutral breakdown.",
    lead: "A side-by-side look at Budget Direct and Youi car insurance, two direct-to-consumer brands that take very different approaches to quoting.",
    context: [
      "Budget Direct and Youi both sit outside the traditional mainstream brands and both distribute direct to consumers. The shape of that distribution, though, is meaningfully different. Budget Direct leans into a streamlined online experience with price-competitive positioning; Youi leans into a longer phone-led conversation pitched as individually tailored pricing.",
      "Which approach may suit really depends on whether you'd rather click through a quote in five minutes or talk a consultant through your situation in twenty.",
    ],
    differences: [
      { heading: "Distribution philosophy", body: "Budget Direct prioritises a self-service online experience. Youi traditionally pairs an online entry point with a phone follow-up to refine the quote." },
      { heading: "Pricing positioning", body: "Budget Direct typically positions on price competitiveness. Youi positions on tailored pricing, the idea that more questions can produce a better-fit quote. Whether either ends up cheaper depends on the individual." },
      { heading: "Time to quote", body: "Budget Direct's online flow is generally fast. Youi's phone-led process takes longer but gives space to discuss the details." },
      { heading: "Cover and features", body: "Both offer the standard cover ladder (comprehensive, TPFT, TPP). Optional extras like hire car cover, choice of repairer and similar add-ons are commonly available on both." },
      { heading: "Who they're aimed at", body: "Budget Direct often suits self-service price-conscious shoppers. Youi often suits drivers whose situation isn't quite standard or who'd rather talk than click." },
    ],
    whoSuitsA: [
      "Drivers comfortable quoting and buying entirely online",
      "Price-conscious customers who don't need a phone consultation",
      "Self-service shoppers who'd skip extras menus anyway",
    ],
    whoSuitsB: [
      "Drivers whose situation may not fit a standard online quote form",
      "Customers happy to walk through a personalised phone quote",
      "People who want to discuss optional extras in detail",
    ],
    prosA: [
      "Often price-competitive on direct quotes",
      "Streamlined online quoting and policy management",
      "App-based claims and policy tasks",
    ],
    consA: [
      "No branch presence",
      "Optional extras may be paid add-ons rather than included",
      "Self-service model won't suit everyone",
    ],
    prosB: [
      "Tailored quote process can suit unusual situations",
      "Direct-to-consumer pricing without a broker layer",
      "Phone consultation offered upfront",
    ],
    consB: [
      "Phone-led process won't suit everyone",
      "Quote time can be longer than fully online competitors",
      "Pricing isn't always lower than mainstream insurers despite the tailoring claim",
    ],
    table: [
      { dimension: "Distribution model", a: "Online direct", b: "Phone-led direct" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP", b: "Comprehensive, TPFT, TPP" },
      { dimension: "Pricing positioning", a: "Budget direct", b: "Tailored direct" },
      { dimension: "Service channels", a: "Online, app, phone", b: "Phone-first, online support" },
      { dimension: "Bundling options", a: "Limited", b: "Limited" },
      { dimension: "Often suits", a: "Self-service price-conscious shoppers", b: "Drivers wanting a tailored conversation" },
    ],
    closing: "Budget Direct and Youi are both worth quoting if you want to test outside the mainstream. The fastest sanity check is to get matched quotes from both and at least one mainstream insurer, the spread will usually tell you something useful regardless of which way you lean.",
    relatedSlugs: ["bingle-vs-budget-direct", "aami-vs-budget-direct", "youi-vs-nrma", "coles-vs-woolworths"],
    faqs: [
      { q: "Is Budget Direct cheaper than Youi?", a: "Often yes on headline online quotes, but not always for every profile. Youi's tailored process can sometimes produce a competitive number, especially for drivers whose situation doesn't fit standard online forms cleanly." },
      { q: "Why does Youi take longer to quote than Budget Direct?", a: "Youi's model uses a longer set of questions, typically via phone, to refine the quote. Budget Direct's online flow keeps the question set tighter and faster. The trade-off is conversation depth vs speed." },
      { q: "Are Youi quotes really individually priced?", a: "Youi positions itself around individualised pricing, but every insurer ultimately rates risk against its own model. Whether Youi's longer question set produces a meaningfully better price for you specifically can only be tested by comparing." },
      { q: "Can I get a Youi quote without a phone call?", a: "Online options exist, though Youi traditionally pairs online entry with a phone follow-up. The Youi website confirms current quote pathways." },
      { q: "Which is better for younger drivers, Budget Direct or Youi?", a: "Both insurers accept younger drivers, with age-based excesses applying per the relevant PDS. Pricing varies widely by individual profile, so quoting both alongside a mainstream insurer is worth doing." },
    ],
  },

  // 3 ─── NRMA vs Allianz ───────────────────────────────────
  {
    slugA: "nrma",
    slugB: "allianz",
    path: path("nrma", "allianz"),
    metaTitle: "NRMA vs Allianz Car Insurance: How They Compare",
    metaDescription: "NRMA vs Allianz car insurance compared, distribution, features, pros and cons, and who each may suit. Neutral plain-English breakdown.",
    lead: "A side-by-side look at NRMA Insurance and Allianz car insurance, two long-established brands with different distribution footprints in Australia.",
    context: [
      "NRMA Insurance and Allianz both have long histories in Australian motor insurance, but their distribution and brand personalities differ. NRMA is most strongly associated with NSW and the eastern states and has a meaningful branch network. Allianz is part of a large global group and distributes both directly and through partner channels.",
      "On cover terms and standard inclusions they look broadly similar, most of the difference shows up in service experience, channel access and how each prices for a given profile.",
    ],
    differences: [
      { heading: "Distribution and brand", body: "NRMA is a familiar Australian retail brand with a strong eastern-state presence. Allianz is a global insurer with a significant Australian operation, distributing direct and via partners." },
      { heading: "Service channels", body: "NRMA offers online, app, phone and physical branches in NSW, ACT, QLD and TAS. Allianz offers online, app and phone, with partner-distributed Allianz policies sometimes routed through a partner brand's service team." },
      { heading: "Cover types", body: "Both offer the standard ladder. NRMA also offers CTP / green slip in NSW and the ACT. Allianz's product range extends across personal and business motor lines." },
      { heading: "Pricing positioning", body: "Both sit in the mainstream mid-market on direct pricing. Quote competitiveness varies by driver and vehicle, and Allianz quotes can also vary by whether you're buying direct or via a partner." },
      { heading: "Bundling and extras", body: "NRMA offers home, contents, travel and other personal lines. Allianz's broader product set includes business insurance alongside personal lines." },
    ],
    whoSuitsA: [
      "Eastern-state drivers wanting branch + digital channels",
      "Customers wanting CTP / green slip from the same insurer (NSW/ACT)",
      "Drivers wanting a familiar Australian retail brand",
    ],
    whoSuitsB: [
      "Drivers wanting a global insurer with broad Australian presence",
      "Customers comparing both direct and partner-distributed quotes",
      "Drivers who may also need business motor or other commercial cover",
    ],
    prosA: [
      "Strong eastern-state presence with branch + digital",
      "CTP / green slip in NSW and ACT",
      "Multiple personal-lines bundling options",
    ],
    consA: [
      "Branch network thinner outside core states",
      "Not consistently the lowest direct price",
      "Pricing varies meaningfully by profile",
    ],
    prosB: [
      "Established global insurer with long Australian operating history",
      "Available direct and through partner channels",
      "Broad product range including business insurance",
    ],
    consB: [
      "Partner-distributed Allianz quotes can carry slightly different terms",
      "Not consistently the lowest direct price",
      "Less branch presence than NRMA",
    ],
    table: [
      { dimension: "Distribution model", a: "Direct + branch", b: "Direct + partner channels" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP, CTP / green slip in NSW & ACT", b: "Comprehensive, TPFT, TPP" },
      { dimension: "Pricing positioning", a: "Mid-market mainstream", b: "Mid-market mainstream" },
      { dimension: "Branch presence", a: "Strong in NSW, ACT, QLD, TAS", b: "Limited" },
      { dimension: "Bundling options", a: "NRMA personal lines", b: "Allianz personal + business lines" },
      { dimension: "Often suits", a: "Eastern-state drivers wanting branch + digital", b: "Drivers comparing both direct and partner-distributed quotes" },
    ],
    closing: "NRMA and Allianz cover broadly similar ground on cover types, with branch presence and the partner-channel question being the most visible differentiators. Quoting both side by side on matched inputs is the only reliable way to see which prices more competitively for your situation.",
    relatedSlugs: ["aami-vs-nrma", "allianz-vs-qbe", "apia-vs-nrma", "youi-vs-nrma", "racq-vs-suncorp"],
    faqs: [
      { q: "Is NRMA cheaper than Allianz car insurance?", a: "It varies by profile. Both are mid-market mainstream brands and either can quote cheaper than the other for any given driver. Comparing matched quotes is the only reliable test." },
      { q: "Are Allianz car insurance policies sold under other brand names?", a: "Allianz distributes both directly and through partner channels. Some white-label or partner-branded car insurance products are underwritten by Allianz, the underwriter is disclosed in the relevant PDS." },
      { q: "Which has better customer service, NRMA or Allianz?", a: "Independent review sources show mixed scores for both, with experiences often varying by region, channel and claim type. Recent consumer reviews and any complaints data are more useful than a single broad statement." },
      { q: "Does Allianz offer CTP / green slip in NSW like NRMA?", a: "Allianz's CTP / green slip availability in NSW has changed over time. The latest information is on the Allianz site and the NSW SIRA list of approved CTP insurers." },
      { q: "Can I bundle car and home insurance with both NRMA and Allianz?", a: "Both insurers offer home and other personal-lines policies that can be held alongside car insurance, with multi-policy discounts available in some form. Worth pricing each policy individually first." },
    ],
  },

  // 4 ─── AAMI vs Budget Direct ─────────────────────────────
  {
    slugA: "aami",
    slugB: "budget-direct",
    path: path("aami", "budget-direct"),
    metaTitle: "AAMI vs Budget Direct Car Insurance: How They Compare",
    metaDescription: "AAMI vs Budget Direct car insurance compared, pricing, features, distribution and who each may suit. Plain-English neutral breakdown.",
    lead: "A side-by-side look at AAMI and Budget Direct car insurance, a mainstream brand and a budget direct brand competing for similar customers.",
    context: [
      "AAMI and Budget Direct take meaningfully different approaches to the same underlying market. AAMI is a long-established national mainstream brand with a broad service footprint. Budget Direct is a direct-to-consumer challenger that positions on price competitiveness.",
      "On cover types they look more similar than the brand contrast suggests. The real differences live in price, service breadth and how each handles edge cases.",
    ],
    differences: [
      { heading: "Pricing positioning", body: "AAMI sits in the mid-market on direct pricing. Budget Direct positions as a budget direct brand and often quotes lower on headline premium for similar cover. The actual gap depends on the profile." },
      { heading: "Service breadth", body: "AAMI offers online, app and phone with a broad customer service operation. Budget Direct is leaner on service, leaning into self-service online and phone." },
      { heading: "Optional extras", body: "AAMI's optional-extras menu is generally broader, with features like roadside assistance and choice of repairer commonly available. Budget Direct offers similar add-ons but the menu is sometimes leaner." },
      { heading: "Cover ladder", body: "Both offer comprehensive, third party fire and theft, and third party property. AAMI also offers CTP / green slip in eligible states under its broader group footprint." },
      { heading: "Bundling", body: "AAMI offers a wider personal-lines portfolio for bundling. Budget Direct's bundling options are more limited." },
    ],
    whoSuitsA: [
      "Drivers wanting a familiar mainstream brand",
      "Customers who value broader optional extras",
      "Households wanting to bundle multiple AAMI personal lines",
    ],
    whoSuitsB: [
      "Price-conscious drivers comfortable with online direct",
      "Customers who don't need a wide extras menu",
      "Drivers wanting to compare a budget brand against the mainstream",
    ],
    prosA: [
      "Established national brand with broad service",
      "Wide set of optional extras",
      "Bundling options across personal lines",
    ],
    consA: [
      "Not consistently the lowest direct price",
      "Optional extras can add up if stacked",
      "No branch presence",
    ],
    prosB: [
      "Often price-competitive on direct quotes",
      "Streamlined online quoting and policy management",
      "App-based claims and policy tasks",
    ],
    consB: [
      "Limited optional-extras menu compared to mainstream",
      "Self-service model won't suit everyone",
      "Limited bundling options",
    ],
    table: [
      { dimension: "Distribution model", a: "Direct mainstream (online, app, phone)", b: "Direct online + phone" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP, CTP in eligible states", b: "Comprehensive, TPFT, TPP" },
      { dimension: "Pricing positioning", a: "Mid-market mainstream", b: "Budget direct" },
      { dimension: "Optional extras menu", a: "Broad", b: "Leaner" },
      { dimension: "Bundling options", a: "AAMI personal lines", b: "Limited" },
      { dimension: "Often suits", a: "Drivers wanting service breadth", b: "Self-service price-conscious shoppers" },
    ],
    closing: "AAMI and Budget Direct often produce noticeably different headline prices for the same vehicle, but the comparison isn't only about price, service breadth and optional extras matter too. Worth quoting both alongside at least one other brand to triangulate.",
    relatedSlugs: ["aami-vs-nrma", "budget-direct-vs-youi", "bingle-vs-budget-direct", "racq-vs-suncorp"],
    faqs: [
      { q: "Is Budget Direct really cheaper than AAMI for car insurance?", a: "Often yes on headline online quotes, but it depends on the driver, vehicle and postcode. The price gap can swing either way for any specific profile." },
      { q: "Does AAMI offer the same cover types as Budget Direct?", a: "Both offer comprehensive, third party fire and theft, and third party property. AAMI also offers CTP / green slip in eligible states. Specific cover terms differ, the PDS for each policy is the source of truth." },
      { q: "Which has better claims handling, AAMI or Budget Direct?", a: "Independent review scores are mixed for both. Looking at recent consumer reviews, and ideally any AFCA-related complaints data, gives a more useful picture than a single broad statement." },
      { q: "Are AAMI and Budget Direct part of the same insurance group?", a: "No, they sit within different Australian insurance groups, with their own pricing models and PDS documents." },
      { q: "Can I bundle home insurance with both AAMI and Budget Direct?", a: "AAMI offers a broader personal-lines bundle including home and contents. Budget Direct's bundling options are more limited. Worth confirming on each insurer's site whether the policies you'd combine are available." },
    ],
  },

  // 5 ─── Youi vs NRMA ──────────────────────────────────────
  {
    slugA: "youi",
    slugB: "nrma",
    path: path("youi", "nrma"),
    metaTitle: "Youi vs NRMA Car Insurance: How They Compare",
    metaDescription: "Youi vs NRMA car insurance compared, distribution, pricing, features and who each may suit. Neutral, plain-English breakdown.",
    lead: "A side-by-side look at Youi and NRMA car insurance, a tailored direct brand and a long-established mainstream brand with a branch network.",
    context: [
      "Youi and NRMA both sell direct, but their distribution philosophies diverge. Youi's model is built around an individually tailored phone-led quote. NRMA Insurance is a long-established Australian retail brand with branches, an app and full direct sales channels, particularly strong in NSW, the ACT, QLD and Tasmania.",
      "Cover ladders are similar; the real questions are how you'd rather buy and which insurer prices more competitively for your situation.",
    ],
    differences: [
      { heading: "How you get a quote", body: "Youi typically pairs an online entry point with a phone follow-up to refine the quote. NRMA offers full self-service online quoting and policy management, plus phone and branch options." },
      { heading: "Service breadth", body: "NRMA's branch network in core eastern states is a service feature Youi doesn't replicate. Both offer phone and digital channels." },
      { heading: "Cover types", body: "Both offer the standard cover ladder. NRMA also offers CTP / green slip in NSW and the ACT." },
      { heading: "Pricing positioning", body: "Youi positions on individualised pricing; NRMA sits in the mid-market mainstream. Whether either is cheaper for you depends on the specific profile." },
      { heading: "Bundling", body: "NRMA offers a broader personal-lines portfolio for bundling. Youi's bundling options are more limited." },
    ],
    whoSuitsA: [
      "Drivers happy with a tailored phone-led quote",
      "Customers whose situation doesn't fit standard online forms cleanly",
      "People who want a consultant to walk through optional extras",
    ],
    whoSuitsB: [
      "Eastern-state drivers wanting branch + digital channels",
      "Customers wanting CTP / green slip from the same insurer (NSW/ACT)",
      "Drivers wanting a long-established mainstream brand",
    ],
    prosA: [
      "Tailored quote process can suit unusual situations",
      "Direct-to-consumer pricing without a broker layer",
      "Phone consultation offered upfront",
    ],
    consA: [
      "Phone-led process won't suit everyone",
      "Quote time can be longer than fully online competitors",
      "Limited bundling options",
    ],
    prosB: [
      "Strong eastern-state presence with branch + digital",
      "CTP / green slip available in NSW and ACT",
      "Multiple personal-lines bundling options",
    ],
    consB: [
      "Branch network thinner outside core states",
      "Not consistently the lowest direct price",
      "Pricing varies meaningfully by profile",
    ],
    table: [
      { dimension: "Distribution model", a: "Phone-led direct", b: "Direct + branch" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP", b: "Comprehensive, TPFT, TPP, CTP / green slip in NSW & ACT" },
      { dimension: "Pricing positioning", a: "Tailored direct", b: "Mid-market mainstream" },
      { dimension: "Branch presence", a: "None", b: "Strong in NSW, ACT, QLD, TAS" },
      { dimension: "Bundling options", a: "Limited", b: "NRMA personal lines (home, contents, travel)" },
      { dimension: "Often suits", a: "Drivers wanting a tailored conversation", b: "Eastern-state drivers wanting service breadth" },
    ],
    closing: "Youi and NRMA appeal to different shopping styles. If you'd rather walk through a quote with a consultant, Youi is worth comparing. If you want branch access and a long-established mainstream brand, NRMA may suit better. Either way, comparing matched quotes is what surfaces the real numbers.",
    relatedSlugs: ["budget-direct-vs-youi", "aami-vs-nrma", "nrma-vs-allianz", "apia-vs-nrma"],
    faqs: [
      { q: "Is Youi cheaper than NRMA for car insurance?", a: "Sometimes yes, sometimes no. Youi's tailored model can produce competitive prices for some profiles, but it isn't universally cheaper than NRMA. Comparing matched quotes is the only reliable test." },
      { q: "Why does Youi only quote by phone?", a: "Youi positions itself around individualised pricing using a longer set of questions, traditionally handled via phone. Online entry points exist; the phone follow-up is part of the model." },
      { q: "Does NRMA offer choice of repairer like Youi?", a: "Choice of repairer is commonly available on both brands, sometimes as a default and sometimes as an option depending on the policy tier. The PDS for each policy spells out exactly what's included." },
      { q: "Which is better for a young driver, Youi or NRMA?", a: "Both insurers accept younger drivers with age-based excesses applying per the PDS. Pricing varies widely by individual profile, so quoting both alongside another brand is worth doing." },
      { q: "Can I get NRMA car insurance outside NSW?", a: "Yes, NRMA offers cover across multiple states, with particularly strong presence in NSW, ACT, QLD and Tasmania. Availability and product specifics may differ slightly by state." },
    ],
  },

  // 6 ─── Bingle vs Budget Direct ───────────────────────────
  {
    slugA: "bingle",
    slugB: "budget-direct",
    path: path("bingle", "budget-direct"),
    metaTitle: "Bingle vs Budget Direct Car Insurance: How They Compare",
    metaDescription: "Bingle vs Budget Direct car insurance compared, pricing, features, distribution and who each may suit. Neutral plain-English breakdown.",
    lead: "A side-by-side look at Bingle and Budget Direct car insurance, two budget-positioned direct brands with different takes on what stripped-back means.",
    context: [
      "Bingle and Budget Direct both pitch at price-conscious drivers, but their products and experiences are noticeably different. Bingle takes the no-frills idea further: online-only, simpler product set, lighter optional extras. Budget Direct keeps a more conventional product shape but emphasises competitive direct pricing.",
      "If you're shopping at the budget end of the market, the two are natural comparators. The right answer depends on whether you actually want the extras Bingle leaves out.",
    ],
    differences: [
      { heading: "Product shape", body: "Bingle's product set is deliberately lean, fewer cover variations and a stripped-back optional-extras menu. Budget Direct offers a more conventional product ladder with more add-ons available." },
      { heading: "Service model", body: "Bingle is online-only with limited phone support. Budget Direct offers online, app and phone-based service." },
      { heading: "Pricing positioning", body: "Both are budget-positioned, but they get there differently. Bingle strips away features to keep the headline low. Budget Direct keeps the features and competes on direct pricing." },
      { heading: "Cover ladder", body: "Bingle offers comprehensive and third party property. Budget Direct offers comprehensive, third party fire and theft, and third party property." },
      { heading: "Who they're for", body: "Bingle suits drivers who genuinely won't use extras and want the lowest possible self-service experience. Budget Direct suits price-conscious drivers who still want a more conventional set of options." },
    ],
    whoSuitsA: [
      "Drivers comfortable with online-only insurance",
      "People who'd rarely call an insurer anyway",
      "Customers prioritising simple, low-cost cover",
    ],
    whoSuitsB: [
      "Price-conscious drivers who still want choice in cover types",
      "Customers who may want add-ons like hire car cover",
      "Drivers comparing budget options against mainstream insurers",
    ],
    prosA: [
      "Often price-competitive on direct headline premiums",
      "Streamlined online process",
      "Simple product structure",
    ],
    consA: [
      "Limited optional extras",
      "Self-service-only model",
      "Less support for unusual or higher-risk profiles",
    ],
    prosB: [
      "Often price-competitive on direct quotes",
      "More conventional cover ladder than Bingle",
      "App-based claims and policy tasks",
    ],
    consB: [
      "Optional extras may be paid add-ons",
      "Self-service model still primary",
      "Pricing can still vary widely depending on profile",
    ],
    table: [
      { dimension: "Distribution model", a: "Online-only", b: "Online direct + phone" },
      { dimension: "Cover types offered", a: "Comprehensive, TPP", b: "Comprehensive, TPFT, TPP" },
      { dimension: "Pricing positioning", a: "No-frills budget", b: "Budget direct" },
      { dimension: "Service channels", a: "Online self-service", b: "Online, app, phone" },
      { dimension: "Bundling options", a: "Very limited", b: "Limited" },
      { dimension: "Often suits", a: "Self-service drivers wanting low-cost simple cover", b: "Price-conscious drivers wanting a conventional cover ladder" },
    ],
    closing: "Bingle and Budget Direct both quote competitively at the budget end, but the trade-offs are different. Bingle's lower prices come with a lighter product. Budget Direct keeps more features in. Quoting both, plus at least one mainstream insurer, gives you a real sense of where the value sits.",
    relatedSlugs: ["budget-direct-vs-youi", "aami-vs-budget-direct", "coles-vs-woolworths", "aami-vs-nrma"],
    faqs: [
      { q: "Is Bingle cheaper than Budget Direct?", a: "Bingle is often cheaper on headline price for similar cover, partly because its product is leaner on optional extras. Whether that's the right trade-off depends on what you'd actually use." },
      { q: "Are Bingle and Budget Direct underwritten by the same insurer?", a: "No, they sit within different Australian insurance groups and operate as separate brands with their own pricing models and PDS documents." },
      { q: "Does Bingle offer hire car cover like Budget Direct?", a: "Bingle's optional-extras menu is leaner than Budget Direct's. The Bingle PDS will spell out what's available; if hire car cover matters to you, it's worth confirming before choosing." },
      { q: "Which is better for an older car, Bingle or Budget Direct?", a: "Either may suit, depending on the cover type that fits the car's value. Bingle's stripped-back model can be a fair fit if you'd run third party anyway. Budget Direct gives you third party fire and theft as a middle option." },
      { q: "Can I switch from Bingle to Budget Direct mid-policy?", a: "Yes, you can usually cancel a car insurance policy at any time. Most insurers refund the unused premium, though some charge an admin fee. Make sure new cover is in place from the day the old one ends." },
    ],
  },

  // 7 ─── Coles vs Woolworths ───────────────────────────────
  {
    slugA: "coles",
    slugB: "woolworths",
    path: path("coles", "woolworths"),
    metaTitle: "Coles vs Woolworths Car Insurance: How They Compare",
    metaDescription: "Coles vs Woolworths car insurance compared, features, pricing, loyalty alignment and who each may suit. Plain-English neutral breakdown.",
    lead: "A side-by-side look at Coles and Woolworths car insurance, two retail-distributed brands competing for similar everyday shoppers.",
    context: [
      "Coles and Woolworths both sell car insurance under their retail brand names, distributed direct to consumers and underwritten by partner insurers. The structure is similar; the brand experience and loyalty alignment differ depending on which supermarket you actually use.",
      "Cover types and product shape look broadly comparable, most of the meaningful difference shows up in the underwriter behind each brand and how loyalty integrates.",
    ],
    differences: [
      { heading: "Underwriter and brand", body: "Both are retail-distributed brands underwritten by partner insurers. The underwriter for each is disclosed in the PDS, worth checking, since they're the entity that pays claims." },
      { heading: "Loyalty alignment", body: "Coles aligns with Flybuys-style rewards (where applicable). Woolworths aligns with Everyday Rewards (where applicable). Whether reward integration applies and on what basis depends on the current promotion." },
      { heading: "Cover ladder", body: "Both offer comprehensive, third party fire and theft, and third party property. Specific inclusions and limits sit in each brand's PDS." },
      { heading: "Service experience", body: "Both lean on online and phone service handled by their underwriting partner. The retail brand is the front end; the underwriter handles claims." },
      { heading: "Pricing positioning", body: "Both are positioned as value-focused retail products. Whether either is cheaper for any specific profile depends on the underwriter's pricing model and the customer mix it targets." },
    ],
    whoSuitsA: [
      "Regular Coles shoppers wanting loyalty-aligned insurance",
      "Customers comfortable with retail-branded insurance",
      "Drivers comparing retail brands against direct insurers",
    ],
    whoSuitsB: [
      "Regular Woolworths shoppers wanting loyalty-aligned insurance",
      "Customers comfortable with retail-branded insurance",
      "Drivers comparing retail brands against direct insurers",
    ],
    prosA: [
      "Loyalty-aligned for regular Coles shoppers",
      "Standard cover ladder available",
      "Simple online quoting and management",
    ],
    consA: [
      "Underwriter may not match the brand on the front end",
      "Service experience can vary based on the underwriter",
      "Not always the lowest price for every profile",
    ],
    prosB: [
      "Loyalty-aligned for regular Woolworths shoppers",
      "Standard cover ladder",
      "Online quoting and policy management",
    ],
    consB: [
      "Underwriter may differ from the front-end brand",
      "Service depends on the underwriting partner",
      "Not always the lowest price across the board",
    ],
    table: [
      { dimension: "Distribution model", a: "Retail-branded direct (via partner)", b: "Retail-branded direct (via partner)" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP", b: "Comprehensive, TPFT, TPP" },
      { dimension: "Pricing positioning", a: "Value-focused retail", b: "Value-focused retail" },
      { dimension: "Loyalty alignment", a: "Coles / Flybuys ecosystem", b: "Woolworths / Everyday Rewards ecosystem" },
      { dimension: "Underwriter visibility", a: "Disclosed in PDS", b: "Disclosed in PDS" },
      { dimension: "Often suits", a: "Coles shoppers wanting loyalty-aligned cover", b: "Woolworths shoppers wanting loyalty-aligned cover" },
    ],
    closing: "Coles and Woolworths car insurance are similar in shape and positioning. Loyalty alignment is the most natural decider for regular shoppers, but neither is automatically cheaper than the other, and both are worth comparing against direct brands like Budget Direct, Bingle and AAMI before deciding.",
    relatedSlugs: ["bingle-vs-budget-direct", "budget-direct-vs-youi", "aami-vs-budget-direct"],
    faqs: [
      { q: "Are Coles and Woolworths car insurance the same product?", a: "No. Both are retail-distributed brands but they have different underwriters and different PDS documents. Worth comparing them as separate insurers, not assuming they're equivalent." },
      { q: "Who underwrites Coles car insurance?", a: "Coles car insurance is distributed under the Coles brand but underwritten by a partner insurer. The underwriter is disclosed in the PDS, worth checking since they're the entity that handles claims." },
      { q: "Who underwrites Woolworths car insurance?", a: "Woolworths car insurance is distributed under the Woolworths brand but underwritten by a partner insurer. The underwriter is disclosed in the PDS." },
      { q: "Do I earn more rewards with Coles or Woolworths car insurance?", a: "Reward integrations have varied over time for both brands. Whether points apply, and on what basis, depends on the current promotion, confirm with each brand before assuming." },
      { q: "Are Coles and Woolworths cheaper than mainstream insurers?", a: "Sometimes yes, sometimes no. Both position as value-focused retail products. For any specific profile, comparing against direct brands like Budget Direct or Bingle is the only reliable way to see." },
    ],
  },

  // 8 ─── RACQ vs Suncorp ───────────────────────────────────
  {
    slugA: "racq",
    slugB: "suncorp",
    path: path("racq", "suncorp"),
    metaTitle: "RACQ vs Suncorp Car Insurance: How They Compare",
    metaDescription: "RACQ vs Suncorp car insurance compared, distribution, member benefits, features and who each may suit. Plain-English neutral breakdown.",
    lead: "A side-by-side look at RACQ and Suncorp car insurance, two brands with deep Queensland roots that take very different approaches to the customer relationship.",
    context: [
      "RACQ and Suncorp both have particularly strong Queensland presence but operate on different models. RACQ is Queensland's motoring-club insurer, with member benefits across motoring, banking and travel. Suncorp is a major Australian insurer with national reach and a broader product range.",
      "For QLD drivers especially, the comparison often comes down to whether you'd actually use the member benefits, and how each prices for your specific car and circumstances.",
    ],
    differences: [
      { heading: "Brand model", body: "RACQ is a motoring-club brand with a member relationship at its centre. Suncorp is a major Australian insurer with a more conventional retail relationship." },
      { heading: "Geographic positioning", body: "RACQ's brand and member services are Queensland-aligned; Suncorp has a broader national footprint." },
      { heading: "Bundling and benefits", body: "RACQ bundles insurance with motoring, banking and travel member services. Suncorp bundles across personal-lines insurance products." },
      { heading: "Cover ladder", body: "Both offer comprehensive, third party fire and theft, and third party property. Suncorp also offers CTP / green slip in eligible states." },
      { heading: "Pricing positioning", body: "Both sit in the mid-market on direct pricing. RACQ may apply member-aligned pricing on some products, whether the bundle wins depends on whether you'd otherwise use the member services." },
    ],
    whoSuitsA: [
      "Queensland drivers wanting a member-based motoring brand",
      "Customers who'd use bundled member benefits across motoring, banking, travel",
      "Existing RACQ members consolidating services",
    ],
    whoSuitsB: [
      "Drivers wanting a major insurer with national reach",
      "Customers who don't need the member-club relationship",
      "Households wanting to bundle across Suncorp personal lines",
    ],
    prosA: [
      "Strong Queensland presence with state-affiliated branding",
      "Member benefits across motoring, banking and travel",
      "Long-established and recognisable in QLD",
    ],
    consA: [
      "Best fit really for QLD drivers, member benefits are state-aligned",
      "Member fees can offset insurance discounts if you wouldn't use services",
      "Not consistently the lowest direct price",
    ],
    prosB: [
      "Major Australian insurer with national footprint",
      "Broad product range across personal lines",
      "CTP / green slip available in eligible states",
    ],
    consB: [
      "Not consistently the lowest direct price",
      "Less of a member-style relationship",
      "Pricing varies meaningfully by profile",
    ],
    table: [
      { dimension: "Distribution model", a: "Member-aligned, QLD-focused", b: "Major insurer direct" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP, plus member services", b: "Comprehensive, TPFT, TPP, CTP in eligible states" },
      { dimension: "Pricing positioning", a: "Mid-market with member alignment", b: "Mid-market mainstream" },
      { dimension: "Geographic strength", a: "Queensland", b: "National, particularly strong in QLD historically" },
      { dimension: "Bundling options", a: "Member services + insurance", b: "Suncorp personal lines" },
      { dimension: "Often suits", a: "QLD members wanting bundled benefits", b: "Drivers wanting a major national insurer" },
    ],
    closing: "RACQ and Suncorp both quote regularly in Queensland, but they're solving slightly different problems. If you'd genuinely use RACQ member benefits, the all-in cost can be competitive. If you wouldn't, Suncorp's straightforward insurer relationship may be a cleaner fit. Quoting both is the only way to test how they price for you.",
    relatedSlugs: ["aami-vs-nrma", "nrma-vs-allianz", "apia-vs-nrma", "aami-vs-budget-direct"],
    faqs: [
      { q: "Is RACQ cheaper than Suncorp for car insurance?", a: "It depends on the driver, vehicle and whether RACQ member-aligned pricing applies. For non-members, the comparison is more like-for-like; for members, it's worth modelling the membership fee against the discount." },
      { q: "Do I need RACQ membership to take out RACQ car insurance?", a: "Membership requirements depend on the product and time period. Some RACQ products are available to non-members; others may be member-only or carry better pricing for members. The RACQ website confirms current rules." },
      { q: "Are RACQ and Suncorp part of the same insurance group?", a: "No, they sit within different Australian insurance groups. They operate as separate brands with their own pricing models and PDS documents." },
      { q: "Does Suncorp offer member benefits like RACQ?", a: "Suncorp doesn't operate a motoring-club style membership. Its bundling benefits are more about consolidating insurance products under one insurer." },
      { q: "Which is better for a Queensland driver, RACQ or Suncorp?", a: "Both quote regularly in Queensland and either may suit. The decision usually comes down to whether you'd use RACQ member services and how each prices for your specific profile. Comparing matched quotes is the cleanest test." },
    ],
  },

  // 9 ─── Allianz vs QBE ────────────────────────────────────
  {
    slugA: "allianz",
    slugB: "qbe",
    path: path("allianz", "qbe"),
    metaTitle: "Allianz vs QBE Car Insurance: How They Compare",
    metaDescription: "Allianz vs QBE car insurance compared, distribution, broker access, features and who each may suit. Neutral plain-English breakdown.",
    lead: "A side-by-side look at Allianz and QBE car insurance, two large insurers with significant Australian operations and mixed direct-and-broker distribution.",
    context: [
      "Allianz and QBE are both global insurance groups with major Australian operations covering personal and business motor insurance. Both distribute through a mix of direct and partner or broker channels, which means the same insurer can show up under different front-end brands depending on where you're shopping.",
      "On core cover types they look broadly similar, most of the difference shows up in distribution, business product range, and how easy each is to access via your preferred channel.",
    ],
    differences: [
      { heading: "Distribution channels", body: "Allianz distributes direct and through partner channels (white-label and co-branded products). QBE distributes direct and through brokers, the broker channel remains a meaningful part of how QBE products reach customers." },
      { heading: "Cover ladder", body: "Both offer comprehensive, third party fire and theft, and third party property. QBE's broader portfolio includes business motor and commercial fleet products; Allianz also has substantial business and corporate motor offerings." },
      { heading: "Broker access", body: "QBE is particularly accessible via brokers, which can help if your situation is more complex. Allianz also reaches market via partners, though typically less broker-mediated than QBE." },
      { heading: "Pricing positioning", body: "Both sit in the mid-market on direct pricing. The price differences between direct and broker-sourced quotes can be material for QBE." },
      { heading: "Service experience", body: "Both offer online, app and phone service. QBE's broker relationship adds a third channel for many customers." },
    ],
    whoSuitsA: [
      "Drivers wanting a global insurer with broad Australian presence",
      "Customers comparing both direct and partner-distributed quotes",
      "Drivers who may also need business motor or other commercial cover",
    ],
    whoSuitsB: [
      "Drivers using a broker who has access to QBE products",
      "Customers wanting a major Australian insurer with a long history",
      "Households or businesses with broader QBE relationships",
    ],
    prosA: [
      "Established global insurer with long Australian operating history",
      "Available direct and through partner channels",
      "Broad product range including business insurance",
    ],
    consA: [
      "Partner-distributed Allianz quotes can carry slightly different terms",
      "Not consistently the lowest direct price",
      "Less branch presence than some mainstream insurers",
    ],
    prosB: [
      "Long-established Australian insurer with broad product range",
      "Available both directly and via brokers",
      "Personal and business product range",
    ],
    consB: [
      "Not typically a budget brand on price",
      "Distribution model means less of a flashy retail consumer experience",
      "Broker-sourced quotes may differ from direct quotes",
    ],
    table: [
      { dimension: "Distribution model", a: "Direct + partner channels", b: "Direct + broker channels" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP, plus business motor", b: "Comprehensive, TPFT, TPP, plus business motor" },
      { dimension: "Pricing positioning", a: "Mid-market mainstream", b: "Mid-market mainstream" },
      { dimension: "Broker channel strength", a: "Limited", b: "Strong" },
      { dimension: "Bundling options", a: "Allianz personal + business lines", b: "QBE personal + business lines" },
      { dimension: "Often suits", a: "Drivers comparing direct + partner-distributed quotes", b: "Drivers (or brokers) wanting access to a major Australian insurer" },
    ],
    closing: "Allianz and QBE compete on similar territory in Australian motor insurance. The choice often comes down to whether you're shopping direct or via a broker, and whether you want the same insurer to also handle business or commercial cover. Comparing both on matched inputs gives the cleanest read.",
    relatedSlugs: ["nrma-vs-allianz", "aami-vs-nrma", "racq-vs-suncorp", "apia-vs-nrma"],
    faqs: [
      { q: "Is QBE cheaper than Allianz for car insurance?", a: "It depends on the profile and the channel. Direct quotes from each can vary widely. QBE is also commonly available through brokers, which can produce different numbers again." },
      { q: "Should I go to a broker for Allianz or QBE car insurance?", a: "Brokers are particularly useful when your situation is complex, modified vehicles, business use, or unusual driving patterns. For straightforward personal cover, direct quoting often works fine for both." },
      { q: "Are Allianz and QBE the same group?", a: "No, they're separate global insurance groups, both with major Australian operations. They operate independently with their own pricing models and PDS documents." },
      { q: "Which has better business car insurance, Allianz or QBE?", a: "Both offer substantial business and commercial motor product ranges. The right answer depends on your business profile, vehicle type and any fleet considerations, a broker can help compare on those terms." },
      { q: "Do Allianz and QBE both offer agreed value on car insurance?", a: "Both commonly offer agreed value and market value options on comprehensive car insurance, with the choice made at quote stage. The PDS for each policy confirms how each is defined and applied." },
    ],
  },

  // 10 ─── APIA vs NRMA ────────────────────────────────────
  {
    slugA: "apia",
    slugB: "nrma",
    path: path("apia", "nrma"),
    metaTitle: "APIA vs NRMA Car Insurance: How They Compare",
    metaDescription: "APIA vs NRMA car insurance compared, over-50s positioning, features and who each may suit. Neutral plain-English breakdown.",
    lead: "A side-by-side look at APIA and NRMA car insurance, an over-50s specialist brand and a long-established mainstream brand, and how they compare for mature drivers.",
    context: [
      "APIA and NRMA both compete for over-50s drivers, but from different angles. APIA is age-restricted on entry, with products specifically pitched at Australians aged 50 and over. NRMA Insurance is a mainstream brand serving all eligible drivers, with an active over-50s customer base served by its standard products.",
      "For mature drivers, the question is usually whether the over-50s positioning translates into genuinely better cover or pricing for your specific situation, or whether a mainstream brand quotes more competitively anyway.",
    ],
    differences: [
      { heading: "Eligibility", body: "APIA is restricted to drivers aged 50 and over. NRMA Insurance is open to all eligible drivers with no age-based entry rule." },
      { heading: "Product positioning", body: "APIA's product positioning emphasises features it believes suit mature drivers, like agreed value as standard, choice of repairer, and certain age-related conditions. NRMA's products are more generally pitched but include the same kinds of features as options or upgrades." },
      { heading: "Distribution and channels", body: "APIA distributes online and via phone. NRMA adds a branch network in NSW, ACT, QLD and Tasmania." },
      { heading: "Cover ladder", body: "Both offer comprehensive, third party fire and theft, and third party property. NRMA also offers CTP / green slip in NSW and the ACT." },
      { heading: "Pricing positioning", body: "APIA's pricing is positioned around its over-50s audience and may be competitive for mature drivers with clean records. NRMA's pricing varies by profile in the standard mainstream way." },
    ],
    whoSuitsA: [
      "Drivers aged 50+ wanting a brand pitched at their bracket",
      "Mature drivers who value features like agreed value as a default",
      "Customers with lower annual kilometres",
    ],
    whoSuitsB: [
      "Drivers (any age) wanting a long-established mainstream brand",
      "Eastern-state customers who value branch access",
      "Customers wanting CTP / green slip from the same insurer (NSW/ACT)",
    ],
    prosA: [
      "Specifically aimed at over-50s drivers",
      "Features often pitched at mature-driver needs",
      "Backed by a major Australian insurance group",
    ],
    consA: [
      "Not available to under-50s drivers",
      "Not automatically the cheapest option for over-50s, comparison still matters",
      "No branch network",
    ],
    prosB: [
      "Strong eastern-state presence with branch + digital",
      "CTP / green slip available in NSW and ACT",
      "Multiple personal-lines bundling options",
    ],
    consB: [
      "Branch network thinner outside core states",
      "Not specifically tuned to over-50s positioning",
      "Pricing can vary widely by profile",
    ],
    table: [
      { dimension: "Distribution model", a: "Direct, over-50s focused", b: "Direct + branch mainstream" },
      { dimension: "Cover types offered", a: "Comprehensive, TPFT, TPP", b: "Comprehensive, TPFT, TPP, CTP / green slip in NSW & ACT" },
      { dimension: "Pricing positioning", a: "Over-50s aligned", b: "Mid-market mainstream" },
      { dimension: "Eligibility", a: "Drivers 50+", b: "All eligible drivers" },
      { dimension: "Branch presence", a: "None", b: "Strong in NSW, ACT, QLD, TAS" },
      { dimension: "Often suits", a: "Over-50s drivers wanting an age-aligned brand", b: "Eastern-state drivers wanting branch + digital channels" },
    ],
    closing: "APIA's over-50s focus is its main differentiator from NRMA, but the positioning doesn't automatically translate into a better quote for every mature driver. Comparing both, alongside at least one other mainstream insurer, is the cleanest way to test which may suit. The over-50s page covers the broader market for this bracket.",
    relatedSlugs: ["aami-vs-nrma", "nrma-vs-allianz", "racq-vs-suncorp", "youi-vs-nrma"],
    faqs: [
      { q: "Is APIA cheaper than NRMA for over-50s drivers?", a: "Sometimes yes, sometimes no. APIA is positioned for the over-50s market but isn't automatically the cheapest option for every mature driver. Quoting both, and at least one other mainstream insurer, is the only reliable test." },
      { q: "Can drivers under 50 take out APIA car insurance?", a: "No, APIA's products are designed for Australians aged 50 and over, and the entry age is reflected in eligibility rules." },
      { q: "Does NRMA Insurance have an over-50s product?", a: "NRMA's standard products serve drivers across age brackets, including over-50s, but it doesn't run a dedicated age-restricted brand the way APIA does. The over-50s page covers the broader market." },
      { q: "Does APIA offer agreed value as standard?", a: "APIA commonly emphasises features like agreed value in its product positioning, but the specifics depend on the policy you choose. The PDS confirms whether it's included or optional." },
      { q: "Which is better for a driver moving from NSW to QLD?", a: "Both insurers offer cover in both states with state-specific availability and pricing. Worth re-quoting at the new address regardless of which insurer you stay with, postcode-level claims data is a major input." },
    ],
  },
];

export const getComparison = (slugA: string, slugB: string): Comparison | undefined =>
  COMPARISONS.find((c) => c.slugA === slugA && c.slugB === slugB);

export const getComparisonByPath = (path: string): Comparison | undefined =>
  COMPARISONS.find((c) => c.path === path);

/** Resolve a related comparison slug (e.g. "aami-vs-nrma") to its full record. */
export const getComparisonBySlugPair = (slugPair: string): Comparison | undefined =>
  COMPARISONS.find((c) => `${c.slugA}-vs-${c.slugB}` === slugPair);

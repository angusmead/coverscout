import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/insurance-comparison-sites/";

const faqs = [
  {
    question: "How do car insurance comparison sites make money in Australia?",
    answer:
      "Comparison sites are paid a referral fee or commission by insurers when a customer clicks through and buys a policy. The commercial model is disclosed in their Financial Services Guide (FSG). It's not inherently a problem — but it does mean the panel of insurers shown is shaped by who's willing to pay for the referral, not by who's necessarily best.",
  },
  {
    question: "Are comparison sites independent?",
    answer:
      "Comparison sites are independent of the insurers in the sense that they don't underwrite policies themselves, but they're commercial businesses funded by referral fees. Some are owned by larger insurance or financial groups, which is disclosed in their FSG. 'Independent' usually means 'not owned by a single insurer' — not 'free of commercial interest'.",
  },
  {
    question: "Do comparison sites show every insurer in Australia?",
    answer:
      "No — none of the well-known car insurance comparison sites in Australia show every insurer. Several major brands (Youi, Bingle, the motoring-club brands like RACQ, RACV and NRMA Insurance, and others) often aren't on third-party comparison panels because they don't list there. The cheapest quote on any comparison panel is the cheapest on that panel, not the cheapest in the market.",
  },
  {
    question: "Which is the best car insurance comparison site in Australia?",
    answer:
      "There isn't a single 'best' — the well-known sites have different panels, different question sets and different defaults, so the same driver can quote differently across each. The best practice is usually to use a comparison site as a starting point, then sense-check with one or two direct quotes from off-panel insurers like Youi, Bingle or your state motoring club.",
  },
  {
    question: "Is CoverScout a comparison site?",
    answer:
      "Not in the traditional sense. We're an editorial site — we publish neutral plain-English overviews of sixteen Australian car insurers and head-to-head comparisons so you can shortlist before going to insurers directly. We don't pull live quotes, take applications, or earn referral fees from insurer panels. We're funded differently and don't have any active affiliate programs as of writing.",
  },
  {
    question: "What questions should I ask before using a comparison site?",
    answer:
      "Three useful ones: which insurers are on the panel (and which aren't), how the site is paid by those insurers (referral fees vs flat fees vs ownership), and what defaults the comparison applies (excess level, optional extras, kilometres). The Financial Services Guide on the site itself usually answers the first two clearly.",
  },
];

const CarInsuranceComparisonSites = () => {
  const meta = getRouteMeta(PATH)!;
  const faqItems = faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={PATH}
        jsonLd={[breadcrumbSchema(meta.breadcrumbs), faqSchema(faqItems)]}
      />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          Insurance comparison sites in Australia
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          A plain-English guide to how Australian car insurance comparison sites work, who they
          show and don't show, how they make money, and how to use them well — including how
          CoverScout fits into the picture as a non-comparison editorial alternative.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What a comparison site actually does
        </h2>
        <p className="text-base leading-relaxed mb-5">
          A typical Australian car insurance comparison site asks you a series of questions about
          your vehicle, driver and address, then displays quotes from a panel of insurers it has
          commercial relationships with. When you click through and buy a policy, the comparison
          site is paid a referral fee or commission by the insurer. That model isn't a secret — the
          site's Financial Services Guide (FSG) sets it out — and it's how comparison sites fund
          their service.
        </p>
        <p className="text-base leading-relaxed mb-5">
          The model means a comparison site is genuinely useful as a starting point, but it isn't
          a market-wide view. The panel is shaped by which insurers will pay for the referral, not
          by who's necessarily best for your circumstances.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          The insurers comparison sites typically miss
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Several of Australia's biggest and most-quoted car insurers commonly aren't on third-party
          comparison panels:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>Youi</strong> — large Sunshine Coast-based insurer with a question-led pricing
            model. Typically only quotable directly.
          </li>
          <li>
            <strong>Bingle</strong> — direct-only budget brand owned by Suncorp Group. Doesn't
            usually appear on third-party comparison panels.
          </li>
          <li>
            <strong>State motoring clubs</strong> — RACQ (QLD), RACV (VIC), NRMA Insurance (NSW,
            ACT, QLD, TAS), RAC (WA), RAA (SA), RACT (TAS) — all typically off-panel.
          </li>
          <li>
            <strong>Some retail-branded products</strong> — depending on the partnership and
            channel
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-5">
          That doesn't make comparison sites useless — it just means they show one slice of the
          market. The cheapest quote on a comparison panel is the cheapest on that panel, not
          necessarily the cheapest available.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          How comparison sites are funded
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Most well-known Australian car insurance comparison sites operate on a referral-fee or
          commission model paid by the insurer. Specifically:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>Per-acquisition fee</strong> — the most common structure. The site is paid when
            a customer buys a policy through the click-through.
          </li>
          <li>
            <strong>Per-quote fee</strong> — less common, but some sites are paid for each quote
            generated even if the customer doesn't buy
          </li>
          <li>
            <strong>Tier or premium placement</strong> — some sites offer paid prominence in
            results, separate from the headline ranking
          </li>
          <li>
            <strong>Flat advertising fees</strong> — for insurers that aren't on the active panel
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-5">
          This isn't unique to comparison sites or to insurance — most online financial product
          marketplaces work this way. The Australian Securities and Investments Commission (ASIC)
          requires the commercial model to be disclosed in the FSG.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          How to use comparison sites well
        </h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Treat the result as a partial view.</strong> The cheapest quote on the panel is
            the cheapest <em>on that panel</em>, not in the market.
          </li>
          <li>
            <strong>Sense-check with one or two off-panel quotes.</strong> Try Youi, your state
            motoring club, or Bingle. Use identical inputs.
          </li>
          <li>
            <strong>Check the defaults.</strong> Comparison sites apply defaults for excess,
            optional extras and kilometres — make sure they match what you'd actually pick.
          </li>
          <li>
            <strong>Read the FSG.</strong> It tells you which insurers are on the panel and how
            the site is paid. Two minutes; worth doing.
          </li>
          <li>
            <strong>Compare features, not just price.</strong> Two policies at the same headline
            price can have very different excesses, exclusions and claim experiences.
          </li>
        </ol>
        <p className="text-base leading-relaxed mb-5">
          The general comparison framework lives on our{" "}
          <Link to="/car-insurance/comparison/" className="text-primary hover:underline">
            comparison page
          </Link>
          .
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Where CoverScout fits in
        </h2>
        <p className="text-base leading-relaxed mb-5">
          CoverScout isn't a comparison site in the traditional sense. We don't pull live quotes
          and we don't take applications. We're an editorial site — we publish neutral plain-English
          overviews of sixteen Australian car insurers (including the off-panel ones), a small
          number of head-to-head comparisons, and guides to help you understand what you're
          actually buying.
        </p>
        <p className="text-base leading-relaxed mb-5">
          We don't currently run any active affiliate programs, and we don't take payment for
          editorial coverage or favourable wording. Our{" "}
          <Link to="/how-we-make-money/" className="text-primary hover:underline">
            how-we-make-money
          </Link>{" "}
          page sets out the full commercial picture.
        </p>
        <p className="text-base leading-relaxed mb-5">
          The practical workflow we'd suggest:
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            Use our{" "}
            <Link to="/reviews/" className="text-primary hover:underline">
              provider directory
            </Link>{" "}
            to shortlist three to five insurers across budget-friendly, balanced and broader-cover
            categories.
          </li>
          <li>
            Use a comparison site for fast quotes from the on-panel insurers in your shortlist.
          </li>
          <li>
            Quote any off-panel insurers (Youi, Bingle, your state motoring club) directly with the
            same inputs.
          </li>
          <li>
            Compare on features and excess, not just headline price.
          </li>
        </ol>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          A note on review sites and "best" rankings
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Several Australian sites publish "best car insurance" rankings or star ratings. Some are
          genuinely independent (and disclose their methodology); others are commercially funded
          and the rankings can quietly correlate with referral relationships. Worth checking the
          methodology page on any ranking site before treating the order as gospel — and worth
          treating any list of "best" insurers as a starting point for your own quoting, not a
          decision.
        </p>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Build your shortlist on CoverScout
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Plain-English overviews of sixteen Australian car insurers — including the off-panel
            ones comparison sites typically miss. No live quotes, no fake star ratings, no
            sponsored placements.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Provider directory
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/comparison/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Comparison framework
            </Link>
            <Link
              to="/how-we-make-money/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              How we make money
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceComparisonSites;

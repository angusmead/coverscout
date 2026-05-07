import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/comparison/";

const faqs = [
  {
    question: "What is car insurance comparison and how does it work in Australia?",
    answer:
      "Car insurance comparison is the process of putting two or more policies side by side using the same inputs — same vehicle, same driver, same address, same level of cover, same excess — so the prices and features are genuinely comparable. In Australia, you can do this through comparison websites, broker quotes, or by getting direct quotes from each insurer one at a time.",
  },
  {
    question: "Are car insurance comparison sites accurate?",
    answer:
      "They're useful as a starting point, but they don't show every Australian insurer — a number of large brands (Youi, Bingle, RACQ, RACV, NRMA and others) often aren't included on third-party comparison panels because they don't list there. Treat any comparison panel as a partial view and always sense-check against direct quotes from a couple of insurers you'd actually consider.",
  },
  {
    question: "Why do two comparison results show different prices for the same car?",
    answer:
      "Because each comparison engine uses a slightly different question set, defaults different excesses or extras, and only displays insurers it has a commercial relationship with. The same insurer can also quote differently depending on the partner channel. Make sure the inputs (excess, cover type, optional extras, kilometres) match across results before you compare prices.",
  },
  {
    question: "What's the difference between comparison sites and a broker?",
    answer:
      "A comparison site shows quotes from a panel of insurers it's connected to and earns a referral fee when you buy. A broker is licensed to advise on cover and arrange a policy on your behalf — they may have access to different insurers and can take instructions about specific needs. Both are commercial; the disclosures sit in the FSG and PDS for each.",
  },
  {
    question: "Does CoverScout have a comparison engine?",
    answer:
      "Not yet. We're an editorial site — we publish neutral plain-English overviews of Australian car insurers and head-to-head comparisons so you can shortlist before going to insurers directly. We don't pull live prices or take applications. Always verify current pricing and PDS terms with the insurer before deciding.",
  },
  {
    question: "How many insurers should I compare?",
    answer:
      "Three to five usually gives you enough signal without becoming a chore. Pick a mix — one mainstream insurer, one budget-direct brand, and either a motoring-club brand or a specialist that fits your circumstances. Going beyond five rarely changes the outcome much.",
  },
];

const CarInsuranceComparison = () => {
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
          Car insurance comparison in Australia
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          A practical guide to comparing car insurance properly — what counts as a fair comparison,
          where comparison sites help, where they fall short, and the framework we use at
          CoverScout to keep things genuinely apples-to-apples.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What "car insurance comparison" actually means
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Strictly speaking, comparing two car insurance policies means putting them side by side
          using identical inputs — same vehicle, same driver, same postcode, same cover level, same
          excess, same optional extras — so any difference in price or features is real, not an
          artefact of mismatched assumptions.
        </p>
        <p className="text-base leading-relaxed mb-5">
          The trouble is that most "comparison" people actually do is much looser than this:
          comparing last year's renewal price against a single new quote, or comparing two quotes
          with different excesses without realising it. A clean comparison takes ten extra minutes
          and almost always changes the answer.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          The three ways Australians compare car insurance
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Each of these has trade-offs. Most shoppers end up using more than one.
        </p>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Comparison sites</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fast, but show only insurers on their commercial panel. Several major Australian
              brands typically aren't included.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Direct quotes</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Slower, but covers any insurer you choose. Best for sense-checking what a comparison
              site returns and including off-panel brands.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Brokers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Licensed to advise and arrange. Useful for non-standard situations or where you'd like
              someone to do the leg-work for you.
            </p>
          </div>
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Why comparison-site results aren't the whole picture
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Comparison engines display panel insurers — the brands they have a commercial relationship
          with. Several of Australia's biggest car insurers (Youi, Bingle, the motoring-club brands,
          and others) often aren't on those panels. So the cheapest quote on a comparison site is
          the cheapest <em>on that panel</em>, not the cheapest in the market.
        </p>
        <p className="text-base leading-relaxed mb-5">
          That doesn't make comparison sites useless — it just means they're a starting point. The
          right move is to take whatever a comparison site returns and sense-check it against direct
          quotes from one or two off-panel brands you'd actually consider. Our{" "}
          <Link to="/reviews/" className="text-primary hover:underline">
            provider directory
          </Link>{" "}
          covers sixteen insurers including the ones panels typically miss.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What to actually compare (beyond the price)
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Two policies at the same price can be very different products. The features that most
          often matter:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>Cover type</strong> — comprehensive, third party fire and theft, or third party
            property only
          </li>
          <li>
            <strong>Sum insured basis</strong> — agreed value vs market value
          </li>
          <li>
            <strong>Excess structure</strong> — basic excess plus any age, inexperienced-driver, or
            at-fault excesses
          </li>
          <li>
            <strong>Choice of repairer</strong> — included, optional extra, or not available
          </li>
          <li>
            <strong>Hire car cover</strong> — included after non-fault claims, or only as a paid
            extra
          </li>
          <li>
            <strong>New-for-old replacement</strong> — and the conditions attached (vehicle age,
            time owned)
          </li>
          <li>
            <strong>No-claim bonus protection</strong> — see our explainer on the{" "}
            <Link to="/car-insurance/no-claim-bonus/" className="text-primary hover:underline">
              no-claim bonus
            </Link>
          </li>
          <li>
            <strong>Exclusions</strong> — flood, hail, listed-driver restrictions, business use
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-5">
          The full framework lives on our{" "}
          <Link to="/car-insurance/compare/" className="text-primary hover:underline">
            comparing car insurance
          </Link>{" "}
          page.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Mistakes that quietly break a comparison
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Different excesses across quotes.</strong> Raising the excess on one quote
            without realising makes it look cheaper than it is.
          </li>
          <li>
            <strong>Different sum insured basis.</strong> An agreed value quote against a market
            value quote isn't a fair comparison even if they look similar on the surface.
          </li>
          <li>
            <strong>Optional extras toggled differently.</strong> Hire car, choice of repairer,
            roadside — small ticks that move the price.
          </li>
          <li>
            <strong>Driver list mismatches.</strong> Comparing a "any driver" quote to a
            "listed-drivers only" quote will skew price.
          </li>
          <li>
            <strong>Annual kilometres.</strong> Some insurers default low, some default high. Set
            this consciously.
          </li>
          <li>
            <strong>Comparing only on price.</strong> The cheapest quote isn't useful if it
            excludes a peril you're materially exposed to.
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          A simple comparison routine
        </h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            Decide your cover type and excess up front, before quoting anyone. Use the{" "}
            <Link to="/car-insurance/excess/" className="text-primary hover:underline">
              excess explainer
            </Link>{" "}
            if you're unsure.
          </li>
          <li>
            Quote three to five insurers using the same inputs. Mix mainstream, budget-direct, and
            either a motoring-club or specialist brand.
          </li>
          <li>
            Note the headline price and the things that aren't price — choice of repairer, hire car,
            sum insured basis.
          </li>
          <li>
            Read the PDS sections for the two or three you're most likely to choose. Look at
            exclusions and the claims process.
          </li>
          <li>
            Pick the policy that's competitively priced <em>and</em> covers the things you're
            actually worried about.
          </li>
        </ol>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          How CoverScout fits in
        </h2>
        <p className="text-base leading-relaxed mb-5">
          CoverScout isn't a comparison engine and we don't pull live quotes. We publish neutral
          plain-English overviews of sixteen Australian car insurers and a small number of
          head-to-head comparisons, with the aim of helping you shortlist before going to insurers
          directly. There are no fake star ratings, no invented prices, and no insurer pays to
          appear.
        </p>
        <p className="text-base leading-relaxed mb-5">
          For background on what shapes the price you'll be quoted, see{" "}
          <Link
            to="/car-insurance/how-much-is-car-insurance/"
            className="text-primary hover:underline"
          >
            how much car insurance costs in Australia
          </Link>
          . For the foundations, the{" "}
          <Link to="/car-insurance/" className="text-primary hover:underline">
            car insurance hub
          </Link>{" "}
          covers cover types and what each one includes.
        </p>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Start your shortlist
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Browse plain-English overviews of sixteen Australian car insurers, or jump to the
            comparison framework to plan a side-by-side.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Browse provider reviews
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/compare/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Comparison framework
            </Link>
            <Link
              to="/car-insurance/quotes/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              How quotes work
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceComparison;

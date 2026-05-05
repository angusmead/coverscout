import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/best/";

const faqs = [
  {
    question: "Who decides what the 'best' car insurance is?",
    answer:
      "There's no single authority. Industry awards, consumer review sites, government data, and individual reviewers each apply their own criteria — price, claims experience, app quality, financial strength, and so on. The closest thing to a useful answer is the policy that's best for your particular situation, not best in the abstract.",
  },
  {
    question: "Are insurance awards and star ratings reliable?",
    answer:
      "They can be a useful starting point, but they're not the same as a recommendation for you specifically. Different ratings weight different things, and an insurer that scores well overall may still be a poor fit if you're outside its typical target market. Use ratings alongside the PDS and TMD, not in place of them.",
  },
  {
    question: "Is the most expensive car insurance policy always the best?",
    answer:
      "No. A higher premium often reflects broader inclusions, lower excesses, or stronger optional extras — but it can also reflect pricing decisions that don't translate into more value for your situation. The best test is whether the extra spend buys things you'd actually use.",
  },
  {
    question: "Should I just stay with my current insurer if I've never claimed?",
    answer:
      "A claim-free relationship is worth something, but loyalty isn't always rewarded with the most competitive renewal price. Comparing at renewal — even if you decide to stay — is one of the most reliable ways to keep the price honest.",
  },
  {
    question: "How can I judge how an insurer handles claims?",
    answer:
      "Look at consumer review sites for patterns, not single complaints. Check whether the insurer publishes claims acceptance rates or response time data. Independent industry data, like APRA general insurance statistics, can also help. The PDS will tell you the formal claims process.",
  },
  {
    question: "Does brand recognition matter when choosing car insurance?",
    answer:
      "Brand can be a rough proxy for financial strength and longevity, both of which matter when you may need to make a claim years down the track. But challenger brands often offer competitive cover and smoother digital experiences, so brand alone isn't a reason to dismiss them.",
  },
];

const CarInsuranceBest = () => {
  const meta = getRouteMeta(PATH)!;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={PATH}
        jsonLd={breadcrumbSchema(meta.breadcrumbs)}
      />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          Best car insurance in Australia: how to choose what's right for you
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          A practical guide to thinking about "best" in car insurance — what the word actually means,
          who gets to decide, and how to identify a policy that may suit your specific situation.
          Useful for anyone tired of generic "top 10" lists and wanting a clearer way to choose.
        </p>

        <p className="text-base leading-relaxed mb-5">
          Search for the best car insurance in Australia and you'll find dozens of lists, each ranking
          insurers slightly differently. That's not a coincidence. There's no objective "best" — what
          looks like the best policy for one person can look like a poor fit for the next, even with
          the same car and the same postcode.
        </p>

        <p className="text-base leading-relaxed mb-5">
          This guide takes the opposite approach: instead of declaring winners, it walks through what
          "best" can reasonably mean in different situations, what to weigh, and how to land on a
          shortlist you actually trust. If you're starting from zero, the{" "}
          <Link to="/car-insurance/" className="text-primary hover:underline">
            car insurance hub
          </Link>{" "}
          covers the fundamentals first.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What does "best car insurance" actually mean?
        </h2>
        <p className="text-base leading-relaxed mb-5">
          When people talk about the best car insurance, they usually mean one of a few different
          things — and the differences matter.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>Best value</strong> — the policy that delivers the most useful cover for what
            you're paying.
          </li>
          <li>
            <strong>Most popular</strong> — the policies a lot of Australians choose. Popularity is a
            signal, not a guarantee of fit.
          </li>
          <li>
            <strong>Highest rated</strong> — top-scoring policies under a particular review framework.
            The framework is doing a lot of the work.
          </li>
          <li>
            <strong>Best for a specific need</strong> — the policy that may suit a young driver, a
            family with two cars, or someone who only drives on weekends.
          </li>
          <li>
            <strong>Strongest claims experience</strong> — the policy whose claims handling, response
            times, and customer experience tend to score well in independent data.
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-5">
          A policy can be excellent on one axis and ordinary on another. Naming "the" best one in
          isolation usually means quietly choosing which axis to privilege.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Key things to understand
        </h2>
        <p className="text-base leading-relaxed mb-5">
          A handful of points come up over and over when sifting "best of" lists for car insurance.
          Worth keeping in mind before you treat any ranking as gospel.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Most lists don't cover the whole market.</strong> They cover the insurers in the
            ranking provider's panel or dataset. Brands you'd recognise are often missing.
          </li>
          <li>
            <strong>Methodology shapes the result.</strong> A list weighted toward price will look
            different from one weighted toward features — even with the same insurers.
          </li>
          <li>
            <strong>Best for one driver isn't best for another.</strong> A policy that suits a
            55-year-old with a paid-off Camry may not suit a 22-year-old with a financed hatchback.
          </li>
          <li>
            <strong>Claims experience is hard to compare on price alone.</strong> Two similarly priced
            policies can deliver very different experiences when something goes wrong.
          </li>
          <li>
            <strong>The PDS and TMD beat any "best of" list.</strong> The product disclosure
            statement spells out what's actually covered; the target market determination tells you
            who the product is designed for. Our{" "}
            <Link to="/guides/how-to-read-a-pds/" className="text-primary hover:underline">
              how to read a PDS
            </Link>{" "}
            guide is a useful primer.
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          How to choose what may be best for you
        </h2>
        <p className="text-base leading-relaxed mb-5">
          A repeatable approach beats trusting any single ranking. The steps below scale from a quick
          renewal review to a full re-evaluation.
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Be honest about what matters most to you.</strong> Lowest premium, broadest cover,
            simplest app, fastest claims, choice of repairer — pick your top two. Trying to optimise
            for everything usually means optimising for nothing.
          </li>
          <li>
            <strong>Decide on cover type before shortlisting.</strong> The{" "}
            <Link to="/car-insurance/comprehensive/" className="text-primary hover:underline">
              comprehensive car insurance
            </Link>{" "}
            page covers what that level typically includes; third party options are covered separately.
          </li>
          <li>
            <strong>Get matched quotes</strong> from at least three insurers using the same inputs.
            See the{" "}
            <Link to="/car-insurance/quotes/" className="text-primary hover:underline">
              car insurance quotes
            </Link>{" "}
            page for the inputs that need to stay constant.
          </li>
          <li>
            <strong>Compare features, not just headlines.</strong> Hire car cover, choice of repairer,
            agreed vs market value, excess structure, and key exclusions are the usual differentiators.
            Our{" "}
            <Link to="/car-insurance/compare/" className="text-primary hover:underline">
              compare car insurance
            </Link>{" "}
            page walks through how.
          </li>
          <li>
            <strong>Cross-reference with independent data.</strong> APRA, AFCA complaint data, and
            multiple consumer review sources can help triangulate.
          </li>
          <li>
            <strong>Read the PDS and TMD on your shortlist.</strong> If you're outside the target
            market, that's a meaningful flag.
          </li>
        </ol>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Common mistakes to avoid when choosing
        </h2>
        <p className="text-base leading-relaxed mb-5">
          The "best policy" mistakes mostly come down to outsourcing the decision to a list, or
          weighting the wrong factor too heavily.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Treating "highest rated" as universally best.</strong> A four-star average across
            10,000 policies doesn't tell you about your specific situation.
          </li>
          <li>
            <strong>Picking on brand familiarity alone.</strong> Big-name insurers can be excellent or
            ordinary depending on the policy and the year.
          </li>
          <li>
            <strong>Picking on price alone.</strong> Covered separately on our{" "}
            <Link to="/car-insurance/cheap/" className="text-primary hover:underline">
              cheap car insurance
            </Link>{" "}
            page — worth reading if you're tempted by the lowest quote.
          </li>
          <li>
            <strong>Ignoring claims data.</strong> The whole point of insurance is the claim. An
            insurer that's awkward at claim time isn't actually best, however cheap.
          </li>
          <li>
            <strong>Not asking the right questions up front.</strong> Our{" "}
            <Link
              to="/guides/questions-to-ask-before-buying-insurance/"
              className="text-primary hover:underline"
            >
              questions to ask before buying insurance
            </Link>{" "}
            guide covers the most useful ones.
          </li>
          <li>
            <strong>Forgetting to re-evaluate.</strong> The best policy for you in 2024 may not be the
            best one in 2025 — pricing models, life circumstances, and the vehicle itself all change.
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What affects which policy may be best for you
        </h2>
        <p className="text-base leading-relaxed mb-5">
          The right answer depends on the situation. The factors below tend to do most of the work.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Driver profile.</strong> Age, experience, claims history, and licence type all
            shift which insurers may price competitively for you. Our{" "}
            <Link to="/car-insurance/young-drivers/" className="text-primary hover:underline">
              young drivers
            </Link>{" "}
            page covers that bracket specifically.
          </li>
          <li>
            <strong>Vehicle.</strong> A new financed car often points toward comprehensive cover with
            agreed value; an older car may not warrant it.
          </li>
          <li>
            <strong>Where and how the car is used.</strong> City commuting, regional driving, and
            weekend-only use produce different risk profiles and different "best" answers.
          </li>
          <li>
            <strong>What you value in a claim.</strong> Speed, choice of repairer, hire car
            availability, or just minimal excess — different insurers prioritise these differently.
          </li>
          <li>
            <strong>Budget tolerance.</strong> Some people prefer a higher premium and lower excess
            for predictability; others prefer the reverse. Neither is wrong.
          </li>
          <li>
            <strong>How much fine print you want to read.</strong> Genuinely. Cover-rich policies
            usually come with longer PDS documents and more conditions to track.
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-5">
          For a deeper look at what drives the price specifically, see the{" "}
          <Link to="/car-insurance/cost/" className="text-primary hover:underline">
            car insurance cost
          </Link>{" "}
          page.
        </p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Compare your options
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Once you've decided what "best" means in your situation, comparing matched quotes is the
            fastest way to put it to the test. The pages below walk through both sides of the
            decision.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/car-insurance/compare/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Compare car insurance
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/quotes/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Get car insurance quotes
            </Link>
            <Link
              to="/guides/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Read our guides
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceBest;

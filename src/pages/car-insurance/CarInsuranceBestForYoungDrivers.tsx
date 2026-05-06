import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/best-for-young-drivers/";

const faqs = [
  {
    question: "What counts as a 'young driver' for car insurance in Australia?",
    answer:
      "Most Australian insurers treat drivers under 25 as a higher-risk rating tier, with stricter pricing again for under-21s and provisional licence holders. A few insurers extend the loading up to 30 for inexperienced drivers. The exact age cut-offs and excess loadings sit in each insurer's PDS.",
  },
  {
    question: "Why is car insurance so expensive for young drivers?",
    answer:
      "Australian crash data consistently shows higher claim frequency and severity for drivers under 25. Insurers price for that pattern, which is why young-driver premiums and at-fault excesses can be a multiple of those for older drivers — even with a clean record. The good news is that pricing usually drops noticeably once you've held an open licence for a few years claim-free.",
  },
  {
    question: "Is it cheaper to be a listed driver on a parent's policy?",
    answer:
      "Often, yes — being added as a listed driver on a parent's comprehensive policy (rather than holding your own) can be cheaper, but the parent's premium will rise to reflect the added risk. The car must genuinely be theirs and they must be the main driver. Misrepresenting who the main driver is can void cover, so it's worth being honest about it from the start.",
  },
  {
    question: "What's the cheapest car insurance for young drivers in Australia?",
    answer:
      "There isn't one cheapest insurer for all young drivers — pricing varies sharply by car, address, history and which insurers actively target younger demographics. Bingle and Budget Direct often quote competitively for young drivers, and Youi sometimes prices well depending on how you answer their questions. Always quote at least three to five insurers using identical inputs.",
  },
  {
    question: "Can a young driver get comprehensive cover?",
    answer:
      "Yes — most major Australian insurers offer comprehensive cover to young drivers, but the premium and at-fault excess will be higher. Some insurers add an additional age-based excess (often $500–$1,500) on top of the basic excess if a driver under 25 is at fault. It's worth comparing both the premium and the total at-fault excess across insurers, not just the headline price.",
  },
  {
    question: "Do telematics or 'pay-as-you-drive' policies help young drivers?",
    answer:
      "A small number of Australian insurers offer pay-as-you-drive or kilometre-based policies that may suit young drivers with low annual mileage, since you're not subsidising the average. Telematics-based policies that track driving behaviour are less common in Australia than in the UK or US but worth checking if your insurer offers one. Read the data terms carefully.",
  },
];

const CarInsuranceBestForYoungDrivers = () => {
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
          Best car insurance for young drivers in Australia
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          A practical guide to comparing car insurance as a young driver in Australia — what
          insurers actually price for, the levers that move premiums, and which features may suit
          drivers under 25 most.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What "best" actually means for a young driver
        </h2>
        <p className="text-base leading-relaxed mb-5">
          There's no single "best" car insurance for young drivers — what suits you depends on your
          car, your address, your driving history and how you answer each insurer's questions.
          What's reliably true is that the insurers that price well for young drivers tend to be
          either budget-direct brands with simple online quoting (Bingle, Budget Direct) or
          insurers that price flexibly off your specific risk profile (Youi).
        </p>
        <p className="text-base leading-relaxed mb-5">
          For background on how insurers think about "best" generally, see our{" "}
          <Link to="/car-insurance/best/" className="text-primary hover:underline">
            best car insurance
          </Link>{" "}
          page.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Why young drivers pay more
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Australian insurers price young drivers higher because crash and claim data consistently
          show three things:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>Claim frequency</strong> — drivers under 25 are statistically more likely to
            have an at-fault claim
          </li>
          <li>
            <strong>Claim severity</strong> — when claims happen, they tend to cost more
          </li>
          <li>
            <strong>Inexperience</strong> — even safe young drivers carry less time-on-road, which
            insurers treat as a separate factor
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-5">
          The premium loading is real but not permanent — pricing typically drops noticeably once
          you've held an open licence for a few years claim-free.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Insurers worth shortlisting as a young driver
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Premiums vary so much by individual circumstance that any list is a starting point, not a
          ranking. The insurers most worth quoting as a young driver in Australia tend to be:
        </p>
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Budget-direct brands</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Bingle and Budget Direct are often competitive for young drivers because their pricing
              models are stripped-down and channel-direct.
            </p>
            <Link
              to="/reviews/budget-friendly/"
              className="text-sm text-primary hover:underline"
            >
              Browse budget-friendly insurers →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Risk-flexible brands</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Youi prices off detailed questions, which can favour young drivers with specific
              risk-reducing factors (low km, off-street parking, restricted use).
            </p>
            <Link to="/reviews/youi/" className="text-sm text-primary hover:underline">
              Read the Youi overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Mainstream insurers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              AAMI, Allianz, GIO, NRMA, Suncorp and QBE all cover young drivers but typically with
              higher age-based excesses. Worth quoting for the feature set.
            </p>
            <Link to="/reviews/balanced/" className="text-sm text-primary hover:underline">
              Browse mainstream insurers →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Listed-driver on a parent policy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Often cheaper than a young driver holding their own policy — provided the parent is
              genuinely the main driver of the vehicle.
            </p>
          </div>
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          The features that matter most
        </h2>
        <p className="text-base leading-relaxed mb-5">
          For a young driver, two parts of the policy are worth more attention than the headline
          premium:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>At-fault excess structure</strong> — many insurers add an age-based excess
            ($500–$1,500 typically) on top of the basic excess if a driver under 25 is at fault.
            Read it carefully — the headline premium can hide a much bigger excess at claim time.
          </li>
          <li>
            <strong>Choice of repairer</strong> — included as standard for some insurers, optional
            extra for others
          </li>
          <li>
            <strong>Restricted-driver policies</strong> — listing only specific drivers can cut the
            premium meaningfully if no-one else needs to drive the car
          </li>
          <li>
            <strong>No-claim bonus rules</strong> — see our explainer on the{" "}
            <Link to="/car-insurance/no-claim-bonus/" className="text-primary hover:underline">
              no-claim bonus
            </Link>
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Practical levers to lower a young-driver premium
        </h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Pick the car carefully.</strong> A small, low-powered, common-model car typically
            quotes much lower than a sports model or a popular theft target.
          </li>
          <li>
            <strong>Be honest about kilometres.</strong> If your annual km is genuinely low, set it
            accurately — insurers price it.
          </li>
          <li>
            <strong>Restrict the driver list.</strong> If you're the only one driving the car, list
            only yourself.
          </li>
          <li>
            <strong>Consider raising the basic excess.</strong> Lowers the premium, but check it
            against the at-fault excess so you understand the total claim cost.
          </li>
          <li>
            <strong>Park off the street where possible.</strong> Insurers ask, and it factors into
            the rating.
          </li>
          <li>
            <strong>Quote three to five insurers using identical inputs.</strong> The cheapest
            insurer for a 22-year-old in one suburb may not be the cheapest for the next.
          </li>
        </ol>
        <p className="text-base leading-relaxed mb-5">
          For more on premium levers generally, see{" "}
          <Link to="/car-insurance/lower-premiums/" className="text-primary hover:underline">
            how to lower your car insurance premium
          </Link>
          .
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          The young-drivers page covers the fundamentals
        </h2>
        <p className="text-base leading-relaxed mb-5">
          For a deeper dive into what insurers actually look at and why provisional licence holders
          face the steepest pricing, our{" "}
          <Link to="/car-insurance/young-drivers/" className="text-primary hover:underline">
            car insurance for young drivers
          </Link>{" "}
          page walks through the full picture.
        </p>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Compare insurers as a young driver
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Browse plain-English overviews of fifteen Australian car insurers, then quote three to
            five direct using identical inputs to find the policy that may suit you best.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/budget-friendly/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Budget-friendly insurers
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/young-drivers/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Young drivers fundamentals
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

export default CarInsuranceBestForYoungDrivers;

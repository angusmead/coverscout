import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/best-comprehensive/";

const faqs = [
  {
    question: "Who has the best comprehensive car insurance in Australia?",
    answer:
      "There's no single 'best' comprehensive insurer for everyone — it depends on your vehicle, your address, your driving history, and what features matter most to you. NRMA, AAMI, Allianz, Suncorp, RACQ, RACV and APIA are widely shortlisted because they tend to offer broader feature sets and well-established claims handling. The right pick is usually the one whose feature set, exclusions and price all line up against your specific needs.",
  },
  {
    question: "What does comprehensive car insurance actually include?",
    answer:
      "Most Australian comprehensive policies cover damage to your own vehicle from collisions (at-fault and not-at-fault), theft, fire, storm, hail, flood and vandalism, plus damage you cause to other people's property. Most include limited coverage for personal effects in the car and emergency repairs after an accident. Optional extras typically include hire car after non-fault claims, choice of repairer, and roadside assistance.",
  },
  {
    question: "How much does comprehensive car insurance cost in Australia?",
    answer:
      "Comprehensive premiums typically fall between roughly $700 and $2,500+ per year depending on driver, vehicle and postcode. Lower-risk drivers (older, clean record, low km, common car) often quote at the lower end; younger drivers, premium vehicles, and high-claim postcodes push toward the upper end. The how-much-is-car-insurance page covers this in more detail.",
  },
  {
    question: "What's the difference between comprehensive policies?",
    answer:
      "More than people expect. Two policies at the same price can differ in agreed value vs market value sum insured, choice of repairer, hire car cover, new-for-old replacement conditions, no-claim bonus protection, at-fault excess structure, and exclusions for storm, flood or specific use cases. The PDS for each spells these out — worth reading the sections that matter to you, not just the headline price.",
  },
  {
    question: "Is comprehensive worth it on an older car?",
    answer:
      "Sometimes — depends on the car's market value, your savings buffer, and whether you'd realistically replace it after a write-off. Once a car drops below roughly $5,000 market value, the maths often favours third party fire and theft instead, since you'd typically be claiming on the at-fault excess on a full payout that's only marginally above that excess. Worth running both numbers.",
  },
  {
    question: "Does comprehensive cover hail and flood?",
    answer:
      "Most comprehensive policies in Australia cover hail and flood as standard, but not all — and exclusions can apply in specific regions, for older cars, or for new policies during severe-weather events. Flood definitions vary too: 'rising water' versus 'storm runoff' can be treated differently. Always check the PDS, especially if you're in a flood-exposed or hail-prone region.",
  },
];

const CarInsuranceBestComprehensive = () => {
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
          Best comprehensive car insurance in Australia
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          A practical guide to choosing comprehensive car insurance in Australia — which insurers
          offer broader feature sets, what to look for beyond the headline premium, and how to
          shortlist the policy that may suit you most.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What "best comprehensive" actually means
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Comprehensive is the broadest standard car insurance cover available in Australia, but
          "best" depends on what you weigh most. Cheapest is one definition; broadest feature set
          is another; smoothest claims handling is a third. The best policy for a city commuter
          with a new car looks different to the best policy for an older driver in a regional area
          with a paid-off vehicle.
        </p>
        <p className="text-base leading-relaxed mb-5">
          For the fundamentals of what comprehensive covers and how it differs from third party,
          see our{" "}
          <Link to="/car-insurance/comprehensive/" className="text-primary hover:underline">
            comprehensive car insurance
          </Link>{" "}
          page.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Insurers commonly shortlisted for comprehensive
        </h2>
        <p className="text-base leading-relaxed mb-5">
          The insurers that consistently appear on shortlists for comprehensive cover tend to be
          those with broader feature sets, established branch or partner networks, or specialist
          features that suit specific demographics:
        </p>
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">NRMA Insurance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              One of Australia's largest comprehensive insurers, with strong NSW and ACT presence
              and broad feature inclusions.
            </p>
            <Link to="/reviews/nrma/" className="text-sm text-primary hover:underline">
              Read the NRMA overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">AAMI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              National coverage with broad comprehensive features and a long-established claims
              process. Part of the Suncorp Group.
            </p>
            <Link to="/reviews/aami/" className="text-sm text-primary hover:underline">
              Read the AAMI overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Allianz</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Global insurer with strong Australian presence, broader feature options and access
              to specialist cover types.
            </p>
            <Link to="/reviews/allianz/" className="text-sm text-primary hover:underline">
              Read the Allianz overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Suncorp Insurance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Major Australian insurer (Brisbane-headquartered) with broad comprehensive features
              and a national branch and partner footprint.
            </p>
            <Link to="/reviews/suncorp/" className="text-sm text-primary hover:underline">
              Read the Suncorp overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">RACQ / RACV</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              State motoring clubs (Queensland and Victoria) with member benefits and integrated
              roadside assistance — strong fits for in-state members.
            </p>
            <Link to="/reviews/racq/" className="text-sm text-primary hover:underline">
              Read the RACQ overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">APIA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Specialist insurer for over-50s with comprehensive features tailored to that segment
              — worth comparing if you qualify on age.
            </p>
            <Link to="/reviews/apia/" className="text-sm text-primary hover:underline">
              Read the APIA overview →
            </Link>
          </div>
        </div>
        <p className="text-base leading-relaxed mb-5">
          The full broader-cover bucket — five insurers with broader feature sets and partner
          networks — is on our{" "}
          <Link to="/reviews/broader-cover/" className="text-primary hover:underline">
            broader cover insurers
          </Link>{" "}
          page.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What to look for in a comprehensive policy
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Beyond the headline premium, the features most worth comparing on comprehensive:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>Sum insured basis</strong> — agreed value (you and the insurer agree the figure
            up front) versus market value (set at claim time). Agreed gives certainty; market
            usually quotes lower.
          </li>
          <li>
            <strong>New-for-old replacement</strong> — most insurers offer this on new cars within a
            specified period or kilometre limit. Conditions vary; read the PDS.
          </li>
          <li>
            <strong>Choice of repairer</strong> — included as standard, an optional extra, or not
            available depending on the insurer
          </li>
          <li>
            <strong>Hire car after non-fault claims</strong> — included or paid extra, with daily
            limits and duration caps
          </li>
          <li>
            <strong>Excess structure</strong> — basic excess plus age-based, inexperienced-driver
            and at-fault excesses can stack. See our{" "}
            <Link to="/car-insurance/excess/" className="text-primary hover:underline">
              excess explainer
            </Link>
            .
          </li>
          <li>
            <strong>No-claim bonus protection</strong> — see our{" "}
            <Link to="/car-insurance/no-claim-bonus/" className="text-primary hover:underline">
              no-claim bonus
            </Link>{" "}
            page
          </li>
          <li>
            <strong>Hail, flood and storm coverage</strong> — usually included as standard but worth
            checking explicitly, especially in exposed regions
          </li>
          <li>
            <strong>Listed-driver vs any-driver</strong> — narrower driver lists usually price lower
            but exclude anyone not named
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Comprehensive vs cheaper cover types
        </h2>
        <p className="text-base leading-relaxed mb-5">
          The trade-off against{" "}
          <Link to="/car-insurance/third-party/" className="text-primary hover:underline">
            third party property
          </Link>{" "}
          or third party fire and theft is real but not always large. For lower-risk drivers,
          comprehensive can quote surprisingly close to third party fire and theft, especially once
          you factor in what you'd otherwise pay out of pocket for damage to your own car. For
          higher-risk drivers or older cars, the gap widens and the maths can flip the other way.
          Worth quoting both for your specific profile.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          A shortlisting routine for comprehensive
        </h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            Decide your sum insured basis (agreed vs market) and excess up front. These two choices
            shape every quote that follows.
          </li>
          <li>
            Quote three to five insurers using identical inputs. Mix mainstream (NRMA, AAMI,
            Allianz, Suncorp, GIO, QBE) with at least one budget-direct brand for price reference.
          </li>
          <li>
            Compare features, not just price. Choice of repairer, hire car, new-for-old replacement
            — note where each insurer lands.
          </li>
          <li>
            Read the PDS for the two or three you're most likely to choose. Focus on excess
            structure, exclusions and the claims process.
          </li>
          <li>
            Pick the policy that's competitively priced <em>and</em> covers what matters to you. The
            general framework lives on our{" "}
            <Link to="/car-insurance/comparison/" className="text-primary hover:underline">
              comparison page
            </Link>
            .
          </li>
        </ol>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Compare comprehensive insurers
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Browse five insurers with broader feature sets and the full directory of fifteen
            Australian car insurers, then quote a handful direct using identical inputs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/broader-cover/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Broader cover insurers
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/comprehensive/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Comprehensive fundamentals
            </Link>
            <Link
              to="/car-insurance/comparison/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Comparison framework
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceBestComprehensive;

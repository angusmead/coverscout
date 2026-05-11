import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/car-insurance-australia/";

const faqs = [
  {
    question: "How is car insurance regulated in Australia?",
    answer:
      "General insurers in Australia are licensed and prudentially supervised by APRA, and their conduct is overseen by ASIC under the design and distribution obligations (DDO). Every product has a Product Disclosure Statement (PDS) and a Target Market Determination (TMD) that spell out what's covered and who the product is intended for.",
  },
  {
    question: "Do I need car insurance to drive a car in Australia?",
    answer:
      "Compulsory Third Party (CTP), sometimes called a 'green slip' in NSW, is the only mandatory cover. It's required to register a vehicle in every state and territory, and it covers injury claims to other people. Every other cover type is optional, including damage to your own car.",
  },
  {
    question: "What's the difference between CTP and other car insurance?",
    answer:
      "CTP only covers personal injury claims to other people involved in an accident, it doesn't cover any damage to vehicles or property. Third party property covers damage your car causes to other people's property. Third party fire and theft adds limited cover for your own car if it's stolen or burnt. Comprehensive covers your own car for a wider range of events.",
  },
  {
    question: "Are all Australian car insurers part of the same group?",
    answer:
      "No. Australia's general insurance market includes several independent groups (Suncorp, IAG, Allianz Australia, QBE) plus state-affiliated motoring clubs (RACQ, RACV, NRMA Insurance) and budget direct insurers (Bingle, Budget Direct, Youi). Some retail-branded products (Coles, Woolworths) are underwritten by partner insurers, which the PDS discloses.",
  },
  {
    question: "What happens if I disagree with an insurer's claim decision?",
    answer:
      "Start with the insurer's internal dispute resolution process, every Australian insurer has one. If you're not satisfied, you can escalate at no cost to the Australian Financial Complaints Authority (AFCA) at afca.org.au. AFCA's decisions are binding on the insurer up to specified compensation limits.",
  },
  {
    question: "How often should I review my car insurance?",
    answer:
      "At least once a year, typically around renewal, premiums shift between insurers and your circumstances (vehicle, address, kilometres, driving history) change too. Also worth re-checking after big life events: moving address, buying or selling a vehicle, adding a new driver, or any at-fault claim.",
  },
];

const CarInsuranceAustralia = () => {
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
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />

        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">
          Car insurance Australia: everything you need to know
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A complete shopper's overview of the Australian car insurance market, the cover types,
          the brands worth knowing, what shapes prices, how the regulatory framework protects you,
          and where to start comparing if you're new to all of this.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          The Australian car insurance market in a nutshell
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Australian drivers can choose from more than a hundred private motor insurance products
          across roughly thirty active brands. The market splits broadly into four channels:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Mainstream direct insurers</strong>, long-established national brands like
            AAMI, NRMA Insurance, Allianz, GIO and Suncorp
          </li>
          <li>
            <strong>Budget direct insurers</strong>, Budget Direct, Bingle, and similar players
            positioned around price
          </li>
          <li>
            <strong>State-affiliated motoring clubs</strong>, RACQ in Queensland, RACV in
            Victoria, NRMA in NSW
          </li>
          <li>
            <strong>Retail-branded and partner-distributed</strong>, Coles, Woolworths, Qantas,
            Kogan and others, underwritten by partner insurers
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Plus specialist brands like APIA (over-50s) and the broker channel (where QBE in
          particular is widely accessible). Our{" "}
          <Link to="/reviews/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            provider directory
          </Link>{" "}
          covers the major brands in detail.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          The four cover types, quick reference
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Australian motor insurance has settled around four standard cover types. The first is
          mandatory; the rest are optional.
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="font-sans font-semibold text-[16px] tracking-tight mb-1">
              Compulsory Third Party (CTP), mandatory
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Required to register a vehicle. Covers injury claims to other people. Doesn't cover
              vehicle damage. Sold separately as a "green slip" in NSW and the ACT; bundled into
              registration in QLD, VIC, WA, SA and TAS.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="font-sans font-semibold text-[16px] tracking-tight mb-1">
              Third party property, entry level
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Covers damage your car causes to other people's property, including their vehicle.
              Doesn't cover damage to your own car. Cheapest of the optional cover types.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="font-sans font-semibold text-[16px] tracking-tight mb-1">
              Third party fire and theft, middle ground
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Adds limited cover for your own car if it's stolen or burnt, on top of third party
              property cover. Often only marginally more than third party property.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="font-sans font-semibold text-[16px] tracking-tight mb-1">
              Comprehensive, broadest standard cover
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Covers damage to your own car (accident, theft, fire, certain weather events) plus
              damage your car causes to others. The{" "}
              <Link to="/car-insurance/comprehensive/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
                comprehensive page
              </Link>{" "}
              has the full breakdown.
            </p>
          </div>
        </div>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What you actually pay for
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A car insurance premium is mostly the insurer's risk-based estimate of how likely you are
          to claim, plus operational costs and government charges (GST, stamp duty, and in some
          states an emergency or fire services levy). The headline number you see at quote stage
          packages all of that into a single figure.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Two drivers at the same address can quote very different premiums, driving history,
          age, the specific make and model, annual kilometres, chosen excess and any optional
          extras all factor in. For deeper coverage of the cost side, see{" "}
          <Link
            to="/car-insurance/how-much-is-car-insurance/"
            className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue"
          >
            how much is car insurance in Australia
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          The regulatory framework, light touch but real
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A few protections are worth knowing about as a shopper:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>APRA</strong>, prudentially regulates general insurers, including capital
            requirements that ensure the insurer can actually pay claims
          </li>
          <li>
            <strong>ASIC and the DDO regime</strong>, every product must have a Target Market
            Determination (TMD) that defines who the product is designed for, and insurers must
            distribute consistently with it
          </li>
          <li>
            <strong>The PDS</strong>, Product Disclosure Statement; the binding document that
            spells out what's covered, what's excluded, and how claims work
          </li>
          <li>
            <strong>Cooling-off period</strong>, most policies include a window (commonly 14–21
            days) where you can cancel for a full refund, provided you haven't claimed
          </li>
          <li>
            <strong>AFCA</strong>, the Australian Financial Complaints Authority handles disputes
            you can't resolve directly with the insurer
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Choosing what may suit you
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The right cover depends on a few things only you can weigh:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Vehicle value</strong>, comprehensive may suit if your car's worth more than
            you'd want to lose. Third party property may suit if it's older and you'd self-insure
            the loss.
          </li>
          <li>
            <strong>Risk tolerance</strong>, how comfortable are you wearing the cost of repairing
            or replacing your own car if something goes wrong?
          </li>
          <li>
            <strong>How you'll use the car</strong>, daily commuting, occasional weekends, business
            use? Each maps differently to risk.
          </li>
          <li>
            <strong>Where you live and park</strong>, postcode-level claim history is a major
            input. High-theft or high-storm areas push premiums up.
          </li>
          <li>
            <strong>Your driving history</strong>, recent at-fault claims and demerits affect
            available pricing.
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For background on the basics first, see the{" "}
          <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            car insurance hub
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          How to compare properly
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Comparing matched quotes annually is the single most reliable lever for a fair price. The
          steps are basic but easy to skip:
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>Decide which cover type may suit your situation first</li>
          <li>Get quotes from at least three insurers using identical inputs</li>
          <li>Compare features (hire car, choice of repairer, agreed vs market value), not just headline price</li>
          <li>Check excesses, including age-based and claim-type excesses</li>
          <li>Read the PDS and TMD, especially the exclusions section</li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Our{" "}
          <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            comparison guide
          </Link>{" "}
          covers each step in detail, and{" "}
          <Link to="/car-insurance/quotes/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            getting car insurance quotes
          </Link>{" "}
          covers what insurers ask for.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Common pitfalls
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Choosing the cheapest policy without reading the exclusions.</strong> The
            savings often evaporate the first time you need to claim something the policy doesn't
            cover. See{" "}
            <Link to="/car-insurance/cheap/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              cheap car insurance
            </Link>{" "}
            for what to watch.
          </li>
          <li>
            <strong>Not declaring modifications, additional drivers, or business use.</strong>{" "}
            Anything not disclosed can give the insurer grounds to reduce or decline a claim.
          </li>
          <li>
            <strong>Picking the lowest excess by default.</strong> A very low excess raises your
            premium, sometimes by more than you'd ever save in a typical claim cycle.
          </li>
          <li>
            <strong>Forgetting to update the insurer when things change.</strong> A new address,
            a new regular driver, or significantly different annual kilometres can all change
            what's considered fair pricing.
          </li>
        </ul>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Start comparing
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            The cleanest way to land on a policy that may suit you is to quote a couple of insurers
            on identical inputs and read the PDS for the cover types you're weighing. The pages
            below cover both.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/car-insurance/compare/"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Compare car insurance
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/reviews/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Browse providers
            </Link>
            <Link
              to="/car-insurance/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Car insurance hub
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceAustralia;

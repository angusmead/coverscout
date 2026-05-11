import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/compare/nsw/";

const faqs = [
  {
    question: "Is car insurance more expensive in NSW than other states?",
    answer:
      "Sydney metro postcodes consistently sit at the higher end of national premiums, mainly because of vehicle density, theft and claim frequency, and repair costs. Regional NSW often quotes closer to the national mid-range. Rates also reflect the green slip (CTP) being priced separately from registration in NSW, unlike most other states.",
  },
  {
    question: "Do I need a green slip and car insurance separately in NSW?",
    answer:
      "Yes. NSW is one of the few states where Compulsory Third Party (CTP) is sold as a separate 'green slip' through licensed CTP insurers, it's mandatory for registration and only covers personal injury claims. Comprehensive, third party fire and theft, and third party property are all separate optional policies that cover damage to vehicles and property.",
  },
  {
    question: "Which insurers operate in NSW?",
    answer:
      "Most large Australian car insurers cover NSW, including NRMA Insurance (with strong NSW heritage), AAMI, Allianz, Budget Direct, Bingle, GIO, QBE, Suncorp, Youi, Coles and Woolworths. NRMA, GIO and Allianz are also licensed CTP green slip providers in NSW alongside QBE and Suncorp-owned brands.",
  },
  {
    question: "Why are Sydney premiums often higher than regional NSW?",
    answer:
      "Insurers price by postcode, and Sydney's metro postcodes typically have higher claim frequency, more frequent theft and break-ins, denser traffic and longer repair-shop wait times. Regional postcodes generally see fewer claims per registered vehicle, which often shows up as a meaningfully lower premium for the same driver and car.",
  },
  {
    question: "How do I compare car insurance in NSW properly?",
    answer:
      "Set your cover type, excess and optional extras consistently before quoting, then quote three to five insurers using the exact same inputs. Mix at least one mainstream brand, one budget-direct brand, and consider NRMA given its NSW footprint. Compare the green slip (CTP) component separately from your comprehensive or third party premium so you don't double-count.",
  },
  {
    question: "Can I keep my no-claim bonus if I move to NSW from another state?",
    answer:
      "Generally yes, Australian insurers will recognise no-claim bonus history from other states when you provide your prior insurer details or renewal notice. Some insurers do their own checks against industry databases too. Worth confirming the rating they apply at quote time, since the structure varies by insurer.",
  },
];

const CarInsuranceCompareNSW = () => {
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
          Compare car insurance in NSW
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A NSW-specific guide to comparing car insurance, what makes the state different (green
          slips, postcode pricing, the NRMA factor), which insurers are worth shortlisting, and how
          to set up a comparison that's actually apples-to-apples.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What makes NSW different
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          NSW has a few quirks that change how a comparison shapes up versus other states:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Green slip (CTP) is separate.</strong> NSW and the ACT are the two jurisdictions
            where CTP is sold as a stand-alone green slip rather than bundled into registration. You
            buy it from a licensed CTP insurer when you register or renew.
          </li>
          <li>
            <strong>Sydney metro pricing is its own beast.</strong> A handful of postcodes, inner
            west, eastern suburbs, parts of western Sydney, sit at the high end nationally because
            of theft, density and claim frequency.
          </li>
          <li>
            <strong>NRMA Insurance has strong NSW roots.</strong> Worth including in any NSW
            shortlist purely on coverage and brand presence; it's not always on third-party
            comparison panels.
          </li>
          <li>
            <strong>Hail and storm exposure varies sharply by region.</strong> Coastal NSW and parts
            of the Northern Rivers carry meaningful weather exposure that insurers price for.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Insurers commonly compared in NSW
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The NSW car insurance market is well-served, most major Australian insurers operate
          here. A reasonable shortlist usually includes a mix of:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>NSW-rooted brands</strong>, NRMA Insurance
          </li>
          <li>
            <strong>Mainstream insurers</strong>, AAMI, Allianz, GIO, QBE, Suncorp
          </li>
          <li>
            <strong>Budget-direct brands</strong>, Bingle, Budget Direct, Youi
          </li>
          <li>
            <strong>Retail-branded</strong>, Coles Car Insurance, Woolworths Car Insurance
            (underwritten by partner insurers, disclosed in the PDS)
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Plain-English overviews of each are in our{" "}
          <Link to="/reviews/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            provider directory
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Green slips: the NSW-only piece
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A green slip, Compulsory Third Party (CTP), is required to register a vehicle in NSW
          and only covers personal injury claims to other people. It's purchased separately through
          a small panel of licensed CTP insurers. The State Insurance Regulatory Authority (SIRA)
          publishes a free comparison tool for CTP at <em>greenslips.nsw.gov.au</em>.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          When you compare comprehensive or third party policies, make sure you're not accidentally
          adding the CTP cost into the comparison or omitting it from one quote and including it in
          another. They're priced and bought separately.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What shapes your NSW premium
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Beyond the standard rating factors that apply nationally, three things tend to swing NSW
          quotes the most:
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Postcode</strong>, the difference between a high-claim Sydney postcode and a
            quiet regional postcode can be hundreds of dollars a year for the same driver and
            vehicle.
          </li>
          <li>
            <strong>Where the car is parked overnight</strong>, secure off-street parking versus on
            the street can move the premium even within the same postcode.
          </li>
          <li>
            <strong>Driver age and history</strong>, NSW has comparatively strict licensing rules,
            and insurers price younger and less experienced drivers accordingly. The{" "}
            <Link to="/car-insurance/young-drivers/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              young drivers page
            </Link>{" "}
            covers this in detail.
          </li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For the broader picture of what shapes any quote, see{" "}
          <Link
            to="/car-insurance/how-much-is-car-insurance/"
            className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue"
          >
            how much car insurance costs in Australia
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          A NSW comparison routine
        </h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            Decide your cover type and excess up front. Use the{" "}
            <Link to="/car-insurance/excess/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              excess explainer
            </Link>{" "}
            if you're undecided.
          </li>
          <li>
            Quote three to five insurers using identical inputs. Include NRMA on the list, it's
            often missing from comparison panels.
          </li>
          <li>
            Compare the green slip (CTP) separately using SIRA's free comparison tool. Don't mix the
            two figures together.
          </li>
          <li>
            Check exclusions for hail, storm and flood, material in many NSW regions and not always
            included by default.
          </li>
          <li>
            Read the PDS for the two or three you're most likely to choose, focusing on excess
            structure, choice of repairer and any age/at-fault excesses.
          </li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The general framework lives on our{" "}
          <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            comparing car insurance
          </Link>{" "}
          page.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Common NSW pitfalls
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            Mixing your green slip cost into a comprehensive comparison
          </li>
          <li>
            Comparing only on-panel insurers and missing NRMA, RACV (cross-border), or other
            off-panel brands
          </li>
          <li>
            Forgetting that storm and hail exclusions may apply in coastal regions
          </li>
          <li>
            Letting an old NSW address linger on a renewal after you've moved interstate (or vice
            versa)
          </li>
        </ul>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Build your NSW shortlist
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            Browse plain-English overviews of sixteen Australian car insurers, including NRMA and
            other off-panel brands, then quote a handful direct using identical inputs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Browse provider reviews
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/compare/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Comparison framework
            </Link>
            <Link
              to="/car-insurance/quotes/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              How quotes work
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceCompareNSW;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/car-insurance-companies/";

const faqs = [
  {
    question: "How many car insurance companies are there in Australia?",
    answer:
      "There are roughly 15–20 well-known car insurance brands in Australia, but they sit under a much smaller number of underwriting groups. Suncorp Group (AAMI, GIO, Suncorp, Apia, Bingle, Shannons), IAG (NRMA, CGU, SGIO, SGIC), Allianz Australia, QBE, Auto & General (Budget Direct, ING, Virgin), and Youi between them underwrite the bulk of the market.",
  },
  {
    question: "Are all Australian car insurers licensed and regulated?",
    answer:
      "Yes. Every general insurer offering car insurance in Australia must be licensed and prudentially supervised by APRA (the Australian Prudential Regulation Authority), and their conduct is overseen by ASIC under the design and distribution obligations. All of them are also part of the Australian Financial Complaints Authority (AFCA) external dispute resolution scheme.",
  },
  {
    question: "What's the difference between an insurer and an insurance brand?",
    answer:
      "An insurer is the licensed entity that takes on the underwriting risk and pays claims. A brand is the customer-facing name on the product. Several Australian car insurance brands (Coles, Woolworths, Bingle, ING) are underwritten by partner insurers, the actual insurer is disclosed in the PDS. The brand handles marketing and the customer experience; the insurer carries the risk.",
  },
  {
    question: "Which is the largest car insurance company in Australia?",
    answer:
      "Suncorp Group and IAG (Insurance Australia Group) are the two largest general insurers in Australia by market share, between them underwriting many of the country's best-known car insurance brands. Allianz Australia, QBE and Auto & General are also significant players. Market share figures from APRA's quarterly statistics give the most current picture.",
  },
  {
    question: "Should I choose a big company or a smaller insurer?",
    answer:
      "Both can be solid choices, APRA's prudential regime applies equally, so financial soundness isn't really the issue. Larger insurers tend to have broader feature sets, established branch networks and longer claims-handling histories. Smaller or budget-direct brands often price more sharply with leaner online-only servicing. The right choice depends on what you weigh most: price, features, channel, or claim experience.",
  },
  {
    question: "How do I check who actually underwrites a car insurance brand?",
    answer:
      "Open the PDS for the policy you're considering. Every Australian PDS discloses the issuer (the underwriting insurer) and any relevant distributor relationships up front. The Financial Services Guide (FSG) for the brand also lists this. If you can't see it clearly, that's a signal to look more carefully before buying.",
  },
];

const CarInsuranceCompanies = () => {
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
          Car insurance companies in Australia
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A guide to who actually sells car insurance in Australia, the major underwriting groups,
          the brands that sit underneath them, the difference between an insurer and a brand, and
          how to figure out who's really carrying the risk on the policy you're considering.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          The Australian car insurance market in one picture
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Roughly 15–20 well-known car insurance brands operate in Australia, but they sit under a
          much smaller number of underwriting groups. Most of the brands you'll see advertised are
          owned by, or underwritten through, one of six or seven larger entities. Knowing the
          structure helps when you're comparing, two brands that look like rivals can quietly be
          underwritten by the same insurer.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          The major underwriting groups
        </h2>
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Suncorp Group</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              ASX-listed general insurer headquartered in Brisbane. Brands include AAMI, GIO,
              Suncorp Insurance, APIA, Bingle and Shannons.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">IAG (Insurance Australia Group)</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              ASX-listed general insurer. Brands include NRMA Insurance (in NSW, ACT, QLD, TAS),
              SGIO (WA), SGIC (SA) and CGU. RAA Insurance and Coles Insurance are partnerships.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Allianz Australia</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Australian arm of the global Allianz Group. Operates Allianz-branded car insurance
              and underwrites several partner-branded products.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">QBE Insurance</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Australian-headquartered global insurer. QBE-branded car insurance is part of a much
              broader general insurance portfolio.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Auto &amp; General</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Direct-channel insurer underwriting Budget Direct, ING and Virgin Money car
              insurance, among others.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Youi</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Direct-channel insurer headquartered on the Sunshine Coast, with a question-led
              quoting model that prices off detailed risk inputs.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">State motoring clubs</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              RACQ (Queensland), RACV (Victoria), RAC (Western Australia), RAA (South Australia)
              and RACT (Tasmania) all offer car insurance to members and the general public.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Retail-branded partnerships</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
              Coles Car Insurance and Woolworths Car Insurance are retail brands underwritten by
              partner insurers (disclosed in each PDS).
            </p>
          </div>
        </div>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Plain-English overviews of sixteen of the brands above sit in our{" "}
          <Link to="/reviews/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            provider directory
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Insurer vs brand: why it matters
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The brand on the front of the policy isn't always the insurer carrying the risk. Several
          well-known Australian car insurance brands are underwritten by partner insurers under a
          distribution arrangement. Coles Car Insurance, Woolworths Car Insurance, ING and Virgin
          Money car insurance are common examples, the actual issuer is named in the PDS.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          This isn't a problem in itself; it's standard practice. But it's worth knowing if:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            You want to avoid duplicating insurers across multiple brand-named policies
          </li>
          <li>
            You're comparing brands that look like rivals but quietly share an underwriter
          </li>
          <li>
            You care about which insurer's claims process you'll actually deal with
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Reviewed brands by category
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          We've grouped the sixteen Australian car insurance brands we cover into three editorial
          buckets, not rankings, but groupings that reflect how each insurer publicly positions:
        </p>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Budget-friendly</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Bingle, Budget Direct, Coles, Real Insurance, Rollin', Woolworths
            </p>
            <Link
              to="/reviews/budget-friendly/"
              className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue"
            >
              Browse the bucket →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Balanced</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              AAMI, GIO, RACQ, RACV, Suncorp
            </p>
            <Link to="/reviews/balanced/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Browse the bucket →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Broader cover</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Allianz, APIA, NRMA, QBE, Youi
            </p>
            <Link to="/reviews/broader-cover/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Browse the bucket →
            </Link>
          </div>
        </div>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          How to choose between companies
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Choosing an insurer isn't really about picking the biggest brand or the one with the best
          ad. The questions that tend to matter:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Does the price suit your profile?</strong> Different insurers price the same
            risk very differently, quote three to five before deciding
          </li>
          <li>
            <strong>Do the features match your situation?</strong> Choice of repairer, hire car,
            agreed value, no-claim bonus protection
          </li>
          <li>
            <strong>How does the claims process work?</strong> Online-only, phone, branch, and
            whether that suits how you'd want to claim
          </li>
          <li>
            <strong>What's their dispute history?</strong> AFCA publishes data on complaint volumes
            by financial firm if you want a check
          </li>
          <li>
            <strong>Are the exclusions a fit?</strong> Storm, flood, hail, business use,
            unlisted-driver, read the PDS
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The general comparison framework lives on our{" "}
          <Link to="/car-insurance/comparison/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            comparison page
          </Link>
          .
        </p>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Browse the directory
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            Plain-English overviews of sixteen Australian car insurance brands, neutral, evergreen,
            no fake star ratings, with the underwriter for each disclosed where relevant.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Provider directory
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/comparison/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Comparison framework
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

export default CarInsuranceCompanies;

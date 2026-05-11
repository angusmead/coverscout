import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { ProviderLogo } from "@/components/insurance/ProviderLogo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/best-cheap/";

const faqs = [
  {
    question: "Who has the cheapest car insurance in Australia?",
    answer:
      "There's no single cheapest insurer for everyone. Bingle, Budget Direct and Coles often quote at the lower end, and Youi sometimes prices well depending on how you answer their questions. The cheapest brand for one driver is rarely the cheapest for another, which is why quoting three to five insurers using identical inputs gives you a more useful answer than relying on rankings.",
  },
  {
    question: "Is the cheapest car insurance always worth taking?",
    answer:
      "Not always. Two policies at the same price can have very different excess structures, exclusions and claim experiences. The cheapest premium with a $2,000 at-fault excess and no choice of repairer can cost more after one claim than a slightly higher premium with a $500 excess. Always compare the all-in picture, not just the headline price.",
  },
  {
    question: "What's the difference between cheap and cheap-and-good?",
    answer:
      "Cheap-and-good usually means a policy that's competitive on price for your specific profile, with sensible inclusions for the things you actually need (storm/flood, choice of repairer, hire car if you commute), and an excess structure that won't sting at claim time. Cheap-only often strips features back to hit a price point, which may suit some drivers but not others.",
  },
  {
    question: "How can I get cheap car insurance without losing important cover?",
    answer:
      "Compare three to five insurers using identical inputs, raise your basic excess if you can absorb it, list only the drivers who actually drive the car, drop optional extras you wouldn't use, and protect your no-claim bonus. Avoid stripping back essentials like flood, storm or choice of repairer just to hit a price — these can be expensive to be without.",
  },
  {
    question: "Are budget-direct insurers reliable at claim time?",
    answer:
      "Yes — all Australian general insurers are licensed and prudentially regulated by APRA, and conduct is overseen by ASIC. Budget-direct brands like Bingle and Budget Direct go through the same regulatory regime and the same Australian Financial Complaints Authority (AFCA) dispute process as any mainstream insurer. The trade-off tends to be in service model (online-first, fewer extras) rather than financial soundness.",
  },
  {
    question: "Does third party fire and theft work out cheaper than comprehensive?",
    answer:
      "Often, yes — third party fire and theft typically prices well below comprehensive, with third party property cheaper again. But the gap isn't always huge for lower-risk drivers, and you lose cover for damage to your own vehicle. Worth quoting both for your specific profile rather than assuming third party is always the cheaper move.",
  },
];

const CarInsuranceBestCheap = () => {
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
          Best cheap car insurance in Australia
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A practical guide to finding car insurance that's both cheap <em>and</em> worth taking —
          which Australian insurers tend to price competitively, what cheap policies often strip
          back, and how to spot the difference between a real bargain and a quote that bites at
          claim time.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What "best cheap" actually means
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Cheapest and best aren't the same — and "best cheap" is the overlap: a policy that's
          competitive on price for your specific profile while still covering the things you'd
          materially regret being without. The right "best cheap" choice for one driver looks
          completely different to another, because pricing models vary so much by insurer.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For background on cheap car insurance generally — including the traps that make a quote
          look cheaper than it really is — see our{" "}
          <Link to="/car-insurance/cheap/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            cheap car insurance
          </Link>{" "}
          page.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Insurers that often price toward the lower end
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The Australian insurers that tend to quote competitively on price aren't necessarily the
          cheapest for everyone. They're the ones whose pricing models, channel costs and product
          design lean budget-friendly:
        </p>
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="border border-border rounded-lg p-5 bg-card">
            <div className="flex items-center gap-3 mb-2">
              <ProviderLogo slug="bingle" name="Bingle" size="md" />
              <h3 className="font-sans font-bold text-lg">Bingle</h3>
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Stripped-back, online-only insurer designed around a low-cost direct model. Often
              priced at the budget end, with limited optional extras.
            </p>
            <Link to="/reviews/bingle/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Read the Bingle overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <div className="flex items-center gap-3 mb-2">
              <ProviderLogo slug="budget-direct" name="Budget Direct" size="md" />
              <h3 className="font-sans font-bold text-lg">Budget Direct</h3>
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Direct-channel insurer with broad cover available, often quoting competitively
              especially for lower-risk profiles.
            </p>
            <Link to="/reviews/budget-direct/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Read the Budget Direct overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <div className="flex items-center gap-3 mb-2">
              <ProviderLogo slug="coles" name="Coles" size="md" />
              <h3 className="font-sans font-bold text-lg">Coles Car Insurance</h3>
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Retail-branded and underwritten by a partner insurer (disclosed in the PDS), often
              with promotional pricing and flybuys-linked benefits.
            </p>
            <Link to="/reviews/coles/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Read the Coles overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <div className="flex items-center gap-3 mb-2">
              <ProviderLogo slug="real-insurance" name="Real Insurance" size="md" />
              <h3 className="font-sans font-bold text-lg">Real Insurance</h3>
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Direct-channel insurer with simple online quoting, often competitive for everyday
              drivers with standard requirements.
            </p>
            <Link to="/reviews/real-insurance/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Read the Real Insurance overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <div className="flex items-center gap-3 mb-2">
              <ProviderLogo slug="rollin" name="Rollin'" size="md" />
              <h3 className="font-sans font-bold text-lg">Rollin'</h3>
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Digital-first pay-as-you-drive insurer (web and app) that prices comprehensive cover
              off your kilometres — often the cheapest option for genuinely low-mileage drivers.
            </p>
            <Link to="/reviews/rollin/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Read the Rollin' overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <div className="flex items-center gap-3 mb-2">
              <ProviderLogo slug="woolworths" name="Woolworths" size="md" />
              <h3 className="font-sans font-bold text-lg">Woolworths Car Insurance</h3>
            </div>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Retail-branded and underwritten by a partner insurer (disclosed in the PDS), with
              Everyday Rewards integration and frequent promotional pricing.
            </p>
            <Link to="/reviews/woolworths/" className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Read the Woolworths overview →
            </Link>
          </div>
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-sans font-bold text-lg mb-2">Browse the budget category</h3>
            <p className="text-[14.5px] text-muted-foreground leading-[1.6] mb-3">
              Six insurers that publicly position around price, with plain-English overviews and
              key facts.
            </p>
            <Link
              to="/reviews/budget-friendly/"
              className="text-sm text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue"
            >
              Budget-friendly insurers →
            </Link>
          </div>
        </div>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What cheap policies often strip back
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Cheap doesn't always mean inferior — but the cost has to come from somewhere. The most
          common ways insurers hit lower price points:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Higher excesses</strong> — both basic and at-fault excesses can be larger,
            sometimes much larger, than mainstream policies
          </li>
          <li>
            <strong>No choice of repairer</strong> — repairs done at the insurer's network only
          </li>
          <li>
            <strong>No hire car after non-fault claims</strong> — or only as a paid optional extra
          </li>
          <li>
            <strong>Listed-driver only</strong> — anyone not listed isn't covered at all
          </li>
          <li>
            <strong>Online-only servicing</strong> — limited or no phone support
          </li>
          <li>
            <strong>Tighter exclusions</strong> — for storm, flood, hail or specific use cases
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          None of these are bad in isolation — but it's worth knowing what you're trading away when
          you take the cheaper quote.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          How to find cheap car insurance that's actually good
        </h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Decide your non-negotiables first.</strong> Choice of repairer? Hire car after
            an accident? Specific perils (flood, hail) covered? Knowing what you won't compromise
            on protects you from a quote that's cheap because it dropped something you needed.
          </li>
          <li>
            <strong>Quote three to five insurers using identical inputs.</strong> Same vehicle,
            same address, same excess, same extras. The framework lives on our{" "}
            <Link to="/car-insurance/comparison/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              comparison page
            </Link>
            .
          </li>
          <li>
            <strong>Read the PDS sections that matter.</strong> Excess, exclusions, claim process,
            repairer network. The cheapest premium isn't worth much if these don't suit you.
          </li>
          <li>
            <strong>Run the at-fault excess calculation.</strong> Cheap policies can have $1,000+
            at-fault excesses. Two claims and you've spent more than a year of premium savings.
          </li>
          <li>
            <strong>Sense-check beyond the price.</strong> A budget-direct quote and a mainstream
            quote can be the same number — usually the budget version trades features for price.
          </li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For more on the levers that genuinely lower a premium without quietly stripping cover,
          see{" "}
          <Link to="/car-insurance/lower-premiums/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            how to lower your car insurance premium
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          When cheap is a perfectly sensible choice
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Plenty of drivers are well-served by a budget-direct policy: experienced drivers with
          clean records, low annual kilometres, an older car, secure parking, and no specific
          requirements about repairer choice. For this profile, the cheaper quote often is the
          better quote — and the trade-offs that come with it don't matter much in practice.
        </p>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Compare budget-friendly insurers
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            Browse five Australian insurers that publicly position around price, plus the broader
            directory and the comparison framework.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/budget-friendly/"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Budget-friendly insurers
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/cheap/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Cheap car insurance guide
            </Link>
            <Link
              to="/car-insurance/comparison/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Comparison framework
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceBestCheap;

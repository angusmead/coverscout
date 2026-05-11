import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { CarInsuranceComparisonTool } from "@/components/insurance/CarInsuranceComparisonTool";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/compare/";

const faqs = [
  {
    question: "Do comparison sites show every car insurer in Australia?",
    answer:
      "No. Most comparison services only display insurers they have a commercial arrangement with, which means some brands, including several large ones, may not appear. It's worth checking who is and isn't included before treating any list as the full market.",
  },
  {
    question: "Is the cheapest comprehensive policy always the best value?",
    answer:
      "Not necessarily. Two policies at very different prices can have meaningfully different excesses, exclusions, and optional inclusions. The cheaper option may exclude things you'd want covered, or come with a much higher claim excess. Comparing on price alone can be misleading.",
  },
  {
    question: "How often should I compare car insurance?",
    answer:
      "Many people compare around renewal each year, since premiums often shift with your driving record, address, and the insurer's pricing model. Reviewing every 12 months, or whenever your circumstances change, can help you check whether your current policy still suits your needs.",
  },
  {
    question: "Will switching car insurers affect my no-claim discount?",
    answer:
      "Most insurers will recognise a no-claim discount you've built up elsewhere, but the rules vary. Ask the new insurer how they verify your claims history and whether your existing rating will transfer in full before you commit to switching.",
  },
  {
    question: "What information do I need to compare car insurance?",
    answer:
      "Typically your vehicle details (make, model, year, registration), where it's parked overnight, who drives it and their licence history, your annual kilometres, and any optional extras you want quoted. Using identical inputs across quotes is what makes a comparison fair.",
  },
  {
    question: "Can I trust online star ratings for car insurance?",
    answer:
      "Star ratings can be a useful signal but they're not the whole story. Different review sources weight different factors, and what matters most to one person (price, claims experience, app, features) may matter less to another. Use ratings alongside the PDS and TMD, not in place of them.",
  },
];

const CarInsuranceCompare = () => {
  const meta = getRouteMeta(PATH)!;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={PATH}
        jsonLd={breadcrumbSchema(meta.breadcrumbs)}
      />
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />

        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">
          Compare car insurance in Australia (what actually matters)
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A practical guide to comparing car insurance policies in Australia, what to put side by side,
          which features actually move the needle, and how to read past a tempting headline price. Useful
          for anyone shopping new cover, weighing a renewal, or wondering whether to switch.
        </p>

        <CarInsuranceComparisonTool />

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5 mt-12">
          Most car insurance comparisons collapse the question down to a single number: which one is
          cheapest? That's understandable, but it leaves a lot on the table. Two policies that look
          almost identical at the top of a results page can behave very differently the day you actually
          need them. This guide walks through what to compare, in what order, and the bits people most
          often miss.
        </p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          If you're still working out which type of car insurance may suit your situation, our{" "}
          <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            car insurance hub
          </Link>{" "}
          covers the basics first.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What does "comparing car insurance" actually mean?
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          At its simplest, comparing car insurance means lining up two or more policies, for the same
          car, drivers, and circumstances, and looking at how they differ. Done well, it's not just a
          price exercise. It's a check on whether each policy includes the things you care about, with
          excesses and exclusions you can live with.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A good comparison does three things at once:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>It gives you matched quotes that use the same inputs.</li>
          <li>
            It surfaces the meaningful differences, features, excesses, exclusions, not just the
            premium.
          </li>
          <li>It points you back to the underlying PDS and TMD for the policies you're shortlisting.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Key things to understand before you compare
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A handful of features are responsible for most of the real-world differences between car
          insurance policies. Knowing what each one is, and how the insurers tend to vary on it, makes
          a comparison much faster.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Premium</strong>, the headline price. Worth checking whether it's quoted monthly or
            annually, and whether paying upfront earns a discount.
          </li>
          <li>
            <strong>Excess</strong>, the amount you pay toward each claim. Some policies layer extra
            excesses on top (age-based, inexperienced driver, claim type). Our explainer on{" "}
            <Link to="/guides/insurance-excess-explained/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              how insurance excess works
            </Link>{" "}
            walks through the common patterns.
          </li>
          <li>
            <strong>Agreed vs market value</strong>, agreed value locks in a payout figure at policy
            start; market value is calculated at the time of the claim. We unpack the trade-offs in our{" "}
            <Link to="/guides/market-value-vs-agreed-value/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              market value vs agreed value
            </Link>{" "}
            guide.
          </li>
          <li>
            <strong>Hire car cover</strong>, whether the policy provides a replacement vehicle while
            yours is being repaired or while a not-at-fault claim is sorted out, and for how long.
          </li>
          <li>
            <strong>Windscreen and glass cover</strong>, some policies include a free windscreen claim
            per year; others charge an excess.
          </li>
          <li>
            <strong>Choice of repairer</strong>, whether you can choose your own repairer or are
            limited to the insurer's network. This often matters more than people expect.
          </li>
          <li>
            <strong>Exclusions</strong>, situations the policy won't cover. Common examples include
            unlicensed drivers, undeclared modifications, or driving under the influence.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          How to compare car insurance options properly
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A repeatable approach beats ad-hoc tab-flicking. The steps below scale from a quick renewal
          check to a full market sweep.
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Decide on cover type first.</strong> Comprehensive, third party fire and theft,
            third party property, or CTP-only, that decision frames everything else. The{" "}
            <Link to="/car-insurance/comprehensive/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              comprehensive car insurance
            </Link>{" "}
            and{" "}
            <Link to="/car-insurance/third-party/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              third party car insurance
            </Link>{" "}
            pages walk through what each one typically includes.
          </li>
          <li>
            <strong>Lock in your inputs.</strong> Same car, same drivers, same address, same annual
            kilometres, same excess. Anything that changes between quotes will skew the price.
          </li>
          <li>
            <strong>Get at least three quotes.</strong> One from a major insurer, one from a direct or
            challenger brand, and ideally one from a comparison source. That spread tends to surface the
            real range.
          </li>
          <li>
            <strong>Build a side-by-side table.</strong> Premium · excess · agreed/market value · hire
            car · windscreen · choice of repairer · key exclusions. A simple spreadsheet beats memory.
          </li>
          <li>
            <strong>Read the PDS for your shortlist.</strong> Especially the "what is not covered"
            section. Two pages, ten minutes, usually decisive.
          </li>
          <li>
            <strong>Check the TMD.</strong> This describes who the product is designed for. If you're
            clearly outside the target market, that's worth weighing.
          </li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For a deeper dive on what insurers ask for at quote stage, see our guide to{" "}
          <Link to="/car-insurance/quotes/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            car insurance quotes
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Common mistakes to avoid when comparing
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Most comparison missteps come down to looking at the wrong number, or stopping the analysis
          too early.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Comparing on premium alone.</strong> A policy that's $200 cheaper but carries a
            $400 higher excess and excludes hire car may not be the saving it looks like.
          </li>
          <li>
            <strong>Letting different inputs creep in.</strong> If one quote uses a $500 excess and
            another uses $1,500, you're comparing different products.
          </li>
          <li>
            <strong>Assuming every comparison covers the whole market.</strong> Most don't, including
            ours. It pays to spot-check the major insurers separately.
          </li>
          <li>
            <strong>Skipping the exclusions.</strong> The exclusions section of the PDS is short, and
            it's where the real differences often sit.
          </li>
          <li>
            <strong>Optimising for the wrong claim.</strong> If you've never had a windscreen chip but
            you do drive long distances, hire car cover probably matters more than glass cover.
          </li>
          <li>
            <strong>Overlooking the cheaper-policy traps</strong> we cover in our{" "}
            <Link to="/car-insurance/cheap/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              cheap car insurance
            </Link>{" "}
            guide.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What affects the options and prices you'll see
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Even when you compare carefully, the universe of quotes you see is shaped by a few factors
          that sit underneath the comparison itself.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>The insurers a comparison includes.</strong> Different sites have different panels.
            A brand missing from one comparison can easily appear on another.
          </li>
          <li>
            <strong>Your driving and claims history.</strong> Recent claims and incidents typically push
            premiums up; a long claim-free record usually pulls them down.
          </li>
          <li>
            <strong>Your vehicle.</strong> Make, model, year, and theft/repair statistics all factor
            into pricing.
          </li>
          <li>
            <strong>Where you live.</strong> Postcode-level claim history is a major driver of premium
            differences. Our state pages, including{" "}
            <Link to="/car-insurance/nsw/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              NSW
            </Link>
            ,{" "}
            <Link to="/car-insurance/vic/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Victoria
            </Link>
            , and{" "}
            <Link to="/car-insurance/qld/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              Queensland
            </Link>{" "}
           , cover the local nuances.
          </li>
          <li>
            <strong>Optional extras.</strong> Hire car, choice of repairer, and no-claim discount
            protection each have a price. Adding all of them to one quote and none to another won't be a
            useful comparison.
          </li>
          <li>
            <strong>How recently you compared.</strong> Insurer pricing models change. A quote from six
            months ago is a starting point, not a benchmark.
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For more on how premiums get built, see our explainer on{" "}
          <Link to="/car-insurance/cost/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            what affects car insurance cost
          </Link>
          .
        </p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Compare your options
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            When you're ready to put policies side by side, start with quotes that use matched inputs.
            If you'd like to read more first, the car insurance hub and our guides cover the
            fundamentals.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/car-insurance/quotes/"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Get car insurance quotes
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Car insurance basics
            </Link>
            <Link
              to="/guides/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Read our guides
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceCompare;

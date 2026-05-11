import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/cheap/";

const faqs = [
  {
    question: "Is the cheapest car insurance policy always worth buying?",
    answer:
      "Not always. The cheapest policy can be a perfectly good fit if its inclusions match your needs and you're comfortable with the excess and exclusions. The risk is buying on price alone and discovering at claim time that something you assumed was covered isn't. The PDS is the document that resolves this either way.",
  },
  {
    question: "How can I lower my car insurance premium without compromising cover?",
    answer:
      "Common levers include lifting your excess (within reason), reviewing optional extras you may not actually use, paying annually rather than monthly, and shopping around at renewal. None of these change the underlying cover quality — they're tweaks to the price you pay for it.",
  },
  {
    question: "Are direct insurers cheaper than going through a broker?",
    answer:
      "Direct insurers can be cheaper for simpler policies because there's no broker commission baked in. Brokers can be useful when your situation is more complex — modified vehicles, business use, or higher-risk profiles — where their access to specialist insurers may produce a better outcome. It depends on the situation.",
  },
  {
    question: "Will increasing my excess always reduce my premium?",
    answer:
      "Most insurers will lower the premium if you raise the excess, but the saving usually flattens out at higher excess levels. It's worth modelling: if a $500 excess increase only drops the premium by $80 a year, the maths may not stack up against the risk of paying the higher excess at claim time.",
  },
  {
    question: "Are pay-per-kilometre or low-kilometre policies actually cheaper?",
    answer:
      "They can be, particularly for people who drive well below the average annual kilometres. The savings come from the insurer's view that less driving means less risk. Whether it works out cheaper for you depends on the per-kilometre rate, the base premium, and how accurately you estimate your usage.",
  },
  {
    question: "Why has my premium gone up at renewal even though nothing changed?",
    answer:
      "Insurers re-rate every year based on broader claims data, weather events, repair costs, and their own pricing strategy. Your loyalty isn't always rewarded. Comparing at renewal is one of the most reliable ways to keep the price honest.",
  },
];

const CarInsuranceCheap = () => {
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
          Cheap car insurance in Australia: how to save without getting burned
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A practical guide to lowering your car insurance premium in Australia without quietly stripping
          out cover you'll regret losing. Covers what cheap actually means, the levers that work, the
          ones that backfire, and how to know when the saving is real.
        </p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          "Cheap" is one of the most loaded words in insurance. A policy can be cheap because the
          insurer has priced it competitively for your risk, or because it quietly excludes things you
          assumed were standard. The first kind of cheap is great. The second is the kind that produces
          unhappy stories at claim time.
        </p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          This guide walks through how to tell the difference, and how to lower your premium in ways
          that don't trade away cover quality. If you'd like the broader fundamentals first, the{" "}
          <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            car insurance hub
          </Link>{" "}
          is the place to start.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What does "cheap car insurance" actually mean?
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          There are three different versions of cheap floating around, and they often get blurred
          together:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Genuinely competitive pricing</strong> — same level of cover, lower premium.
          </li>
          <li>
            <strong>Lower cover, lower price</strong> — a policy that's cheaper because it includes
            less, excludes more, or carries a higher excess.
          </li>
          <li>
            <strong>A different product entirely</strong> — third party property instead of
            comprehensive, for example. Much cheaper, but covering a different set of risks.
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          All three can be reasonable choices for the right person. Problems usually arise when someone
          thinks they're buying the first kind and ends up with one of the others.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Key things to understand before chasing a cheaper price
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A few mental models make it much easier to weigh a cheap quote against a more expensive one
          without getting into a 40-tab spreadsheet.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Premium is the cost of transferring a risk.</strong> A lower premium for the same
            risk is a win. A lower premium because the risk has been quietly handed back to you isn't.
          </li>
          <li>
            <strong>Excess is a hidden second price.</strong> A cheaper-looking policy with a $1,500
            excess vs a $500 one means you carry $1,000 more risk per claim. Our guide on{" "}
            <Link to="/guides/insurance-excess-explained/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              insurance excess
            </Link>{" "}
            unpacks this further.
          </li>
          <li>
            <strong>Exclusions matter more than inclusions.</strong> Most policies look very similar in
            their inclusions section. The differences usually live in the exclusions — see{" "}
            <Link to="/guides/common-insurance-exclusions/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              common insurance exclusions
            </Link>{" "}
            for the patterns to watch.
          </li>
          <li>
            <strong>Annual price drift is normal.</strong> Insurers re-rate every year. The cheapest
            insurer this year may not be the cheapest next year — comparing at renewal is the closest
            thing to a free saving in this market.
          </li>
          <li>
            <strong>The PDS and TMD are non-negotiable.</strong> If a policy is cheaper than the rest,
            it's worth a few minutes to understand why before you switch.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          How to find genuinely cheaper cover
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Cheaper-and-still-good is mostly about being deliberate. The steps below tend to produce the
          biggest legitimate savings.
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Compare at every renewal.</strong> Even if you stay put, knowing what else is out
            there is the strongest negotiating lever you have. Our{" "}
            <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              compare car insurance
            </Link>{" "}
            page covers how to do it methodically.
          </li>
          <li>
            <strong>Get matched quotes</strong> from at least three insurers — same vehicle, same
            drivers, same excess. The{" "}
            <Link to="/car-insurance/quotes/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              car insurance quotes
            </Link>{" "}
            page lists the inputs that need to stay constant.
          </li>
          <li>
            <strong>Test a higher excess.</strong> Re-quote at $1,000 and $1,500 excess. If the saving
            is real and you can comfortably absorb the higher out-of-pocket, that's a clean lever.
          </li>
          <li>
            <strong>Strip out optional extras you don't actually use.</strong> Hire car after a not-at-
            fault accident is great if you commute; less useful if you don't.
          </li>
          <li>
            <strong>Pay annually if you can.</strong> Many insurers add a small surcharge for monthly
            payments — usually a few percent.
          </li>
          <li>
            <strong>Bundle thoughtfully.</strong> Multi-policy discounts (home + car, for example) can
            be worth checking, but only if the bundled policies are themselves competitive.
          </li>
        </ol>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Common mistakes to avoid when chasing a cheaper premium
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Almost every "I got burned by cheap insurance" story traces back to one of these.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Under-disclosing to lower the premium.</strong> Tweaking annual kilometres,
            omitting a regular driver, or hiding a recent claim can produce a cheaper quote — and a
            denied claim down the track.
          </li>
          <li>
            <strong>Assuming all comprehensive policies are similar.</strong> They're broadly similar
            in shape, but the details on hire car cover, choice of repairer, and replacement value
            differ meaningfully.
          </li>
          <li>
            <strong>Defaulting to the lowest excess.</strong> A low excess feels safer but often
            inflates the premium for years between claims you may never make. Our deeper{" "}
            <Link to="/guides/cheap-insurance-traps/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              cheap insurance traps
            </Link>{" "}
            guide covers this trap and others.
          </li>
          <li>
            <strong>Switching for a $40 saving.</strong> The hassle and any switching fees can outweigh
            the gain. Worth doing the maths first.
          </li>
          <li>
            <strong>Going cheap on a vehicle that warrants more cover.</strong> A newer or financed car
            may not suit a third party policy purely because it's cheaper. The{" "}
            <Link to="/car-insurance/best/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              best car insurance
            </Link>{" "}
            page covers different "best for" profiles.
          </li>
          <li>
            <strong>Forgetting to recheck after a circumstance change.</strong> Moving house, changing
            jobs, or adding a new driver can either raise or lower your premium — telling the insurer
            keeps everything aboveboard.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What affects how cheap your premium can realistically get
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Some pricing factors are within your control. Others aren't. Knowing which is which stops
          you from chasing savings that aren't really available to you.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Driver age and history.</strong> Younger or less experienced drivers typically pay
            more. Our{" "}
            <Link to="/car-insurance/young-drivers/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              car insurance for young drivers
            </Link>{" "}
            page covers ways to compare in that bracket.
          </li>
          <li>
            <strong>Where you live and park.</strong> Postcode-level claims data feeds straight into
            premiums.
          </li>
          <li>
            <strong>The vehicle.</strong> Repair cost, theft frequency, and safety profile all matter.
            A cheaper-to-insure car is sometimes the biggest available saving.
          </li>
          <li>
            <strong>Annual kilometres and use.</strong> Lower mileage typically means a lower premium —
            so long as the figure is accurate.
          </li>
          <li>
            <strong>Cover type.</strong> Third party fire and theft sits between third party property
            and comprehensive on price. Whether the gap is worth it depends on the car.
          </li>
          <li>
            <strong>Discounts and loyalty.</strong> First-year online discounts, multi-policy
            discounts, and no-claim bonuses all interact. The{" "}
            <Link to="/car-insurance/cost/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              car insurance cost
            </Link>{" "}
            page covers the broader picture.
          </li>
        </ul>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Compare your options
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            The most reliable way to lower your premium is to compare regularly with matched inputs.
            The pages below cover both — and our guides go deeper on the patterns to watch for.
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
              to="/car-insurance/quotes/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Get car insurance quotes
            </Link>
            <Link
              to="/guides/cheap-insurance-traps/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Cheap insurance traps
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceCheap;

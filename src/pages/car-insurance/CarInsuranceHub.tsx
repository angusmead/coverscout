import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";
import { PROVIDERS, getProvider } from "@/lib/providers-data";
import { COMPARISONS } from "@/lib/comparisons-data";

const PATH = "/car-insurance/";

const TOPIC_GROUPS: { heading: string; items: { label: string; to: string }[] }[] = [
  {
    heading: "Cover types",
    items: [
      { label: "Comprehensive car insurance", to: "/car-insurance/comprehensive/" },
      { label: "Third party car insurance", to: "/car-insurance/third-party/" },
      { label: "Car insurance excess explained", to: "/car-insurance/excess/" },
    ],
  },
  {
    heading: "Pricing & premiums",
    items: [
      { label: "Cheap car insurance", to: "/car-insurance/cheap/" },
      { label: "Lower your car insurance premium", to: "/car-insurance/lower-premiums/" },
      { label: "Pay monthly car insurance", to: "/car-insurance/pay-monthly/" },
      { label: "No-claim bonus explained", to: "/car-insurance/no-claim-bonus/" },
    ],
  },
  {
    heading: "Drivers & profiles",
    items: [
      { label: "Car insurance for young drivers", to: "/car-insurance/young-drivers/" },
      { label: "Car insurance for over 50s", to: "/car-insurance/over-50s/" },
      { label: "Car insurance for high-risk drivers", to: "/car-insurance/high-risk-drivers/" },
    ],
  },
  {
    heading: "Compare, quote & claim",
    items: [
      { label: "Compare car insurance", to: "/car-insurance/compare/" },
      { label: "Get car insurance quotes", to: "/car-insurance/quotes/" },
      { label: "Best car insurance, how to choose", to: "/car-insurance/best/" },
      { label: "Car insurance claims process", to: "/car-insurance/claims/" },
    ],
  },
];

const faqs = [
  {
    question: "Is car insurance compulsory in Australia?",
    answer:
      "Compulsory Third Party (CTP) insurance is required in every Australian state and territory before you can drive a registered vehicle. CTP covers injury claims to other people, not damage to your car or someone else's property. Other types of car insurance, like third party property, third party fire and theft, and comprehensive, are optional.",
  },
  {
    question: "What's the difference between comprehensive and third party car insurance?",
    answer:
      "Third party property insurance generally covers damage your vehicle causes to other people's property, but not damage to your own car. Comprehensive insurance typically covers both, damage to other people's property and damage to your own vehicle from things like accidents, theft, fire, or weather. Cover, exclusions, and limits vary between policies, so it's worth comparing the PDS.",
  },
  {
    question: "How is my car insurance premium calculated?",
    answer:
      "Insurers consider many factors when pricing a policy, including your age and driving history, the make and model of your car, where it's parked overnight, how often you drive, your chosen excess, and any optional extras. Two insurers can quote very different premiums for the same person, which is one reason comparing options can be useful.",
  },
  {
    question: "What is an excess and how does it work?",
    answer:
      "An excess is the amount you agree to pay toward a claim before the insurer pays the rest. A higher excess usually means a lower premium, but a larger out-of-pocket cost when you claim. Some policies also have additional excesses for younger or inexperienced drivers, or for specific claim types.",
  },
  {
    question: "Can I switch car insurers mid-policy?",
    answer:
      "Yes, you can usually cancel a policy at any time. Most insurers will refund the unused portion of your premium, though some may charge an administration fee. Before switching, check that any new cover is in place from the day the old one ends, and review the new PDS so you understand what's included and excluded.",
  },
  {
    question: "What should I do after a car accident?",
    answer:
      "Make sure everyone is safe and call emergency services if anyone is injured. Exchange names, contact details, registration numbers, and insurer details with other drivers involved. Take photos of the scene and any damage. Then contact your insurer as soon as practical, most have 24/7 claims lines and can guide you through the next steps.",
  },
];

const h2 = "font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5";
const body = "text-[16px] leading-[1.65] text-foreground/85 mb-5";
const inlineLink = "text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue";
const italicAccent: React.CSSProperties = {
  fontFamily: '"EB Garamond", "Fraunces", serif',
  fontStyle: "italic",
  fontWeight: 700,
  letterSpacing: "-0.01em",
};

const CarInsuranceHub = () => {
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
          Car insurance in{" "}
          <span className="text-brand-blue" style={italicAccent}>
            Australia.
          </span>
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A plain-English guide to how car insurance works in Australia, the main types of cover, what
          drives the price, and how to compare policies in a way that actually makes sense. Useful whether
          you're buying cover for the first time, renewing an existing policy, or just trying to work out
          if you're paying too much.
        </p>

        <p className={body}>
          Car insurance can feel like a maze of acronyms, fine print, and very similar-looking quotes.
          This page is designed to cut through that. By the end you'll understand what each type of cover
          does (and doesn't) include, what makes premiums move, and a simple framework for comparing
          policies side by side.
        </p>

        <p className={body}>
          Throughout this guide we link to deeper explainers and to our{" "}
          <Link to="/car-insurance/compare/" className={inlineLink}>
            comparison page
          </Link>{" "}
          if you want to start lining up options for your situation.
        </p>

        <h2 className={h2}>What is car insurance?</h2>
        <p className={body}>
          Car insurance is a contract between you and an insurer. You pay a premium, usually monthly or
          annually, and in return, the insurer agrees to cover certain costs if something goes wrong.
          Exactly what those costs are depends on the type of policy and what's in the Product Disclosure
          Statement (PDS).
        </p>
        <p className={body}>
          In Australia there are four main types of car insurance:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong className="text-foreground">Compulsory Third Party (CTP)</strong>, also called a
            green slip in NSW. Required to register a vehicle. Covers injury claims to other people.
            Doesn't cover any vehicle damage.
          </li>
          <li>
            <strong className="text-foreground">Third party property</strong>, covers damage your car
            causes to other people's property, including their vehicle.
          </li>
          <li>
            <strong className="text-foreground">Third party fire and theft</strong>, third party
            property cover plus limited cover for your own car if it's stolen or damaged by fire.
          </li>
          <li>
            <strong className="text-foreground">Comprehensive</strong>, the broadest common cover.
            Typically includes damage to your car (including from accidents, theft, fire, and certain
            weather events) plus damage your car causes to others.
          </li>
        </ul>
        <p className={body}>
          Only CTP is mandatory. The other three are optional, and which one may suit you depends on
          things like the value of your car, how much you can comfortably pay out of pocket, and your
          appetite for risk.
        </p>

        <h2 className={h2}>Key things to understand</h2>
        <p className={body}>
          A few concepts come up over and over again when comparing car insurance. Getting your head
          around them once makes every quote easier to read.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong className="text-foreground">Premium</strong>, the price you pay for the policy.
            Quoted as monthly or annual, but paying annually can sometimes work out cheaper.
          </li>
          <li>
            <strong className="text-foreground">Excess</strong>, the amount you contribute toward a
            claim before the insurer pays the rest. We unpack this in our guide on{" "}
            <Link to="/car-insurance/excess/" className={inlineLink}>
              how car insurance excess works
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Sum insured</strong>, the maximum the insurer will pay
            if your car is written off. This can be set as either an <em>agreed value</em> (a figure you
            and the insurer agree at the start) or a <em>market value</em> (calculated at the time of the
            claim). See our explainer on{" "}
            <Link to="/guides/market-value-vs-agreed-value/" className={inlineLink}>
              market value vs agreed value
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Inclusions and exclusions</strong>, what's covered and
            what isn't. Two policies that look identical at first glance can have very different
            exclusions buried in the fine print.
          </li>
          <li>
            <strong className="text-foreground">PDS and TMD</strong>, the Product Disclosure Statement
            spells out the full terms, and the Target Market Determination describes who the product is
            designed for. Both are worth reading. Our guide on{" "}
            <Link to="/guides/how-to-read-a-pds/" className={inlineLink}>
              how to read a PDS
            </Link>{" "}
            walks through the sections that matter most.
          </li>
          <li>
            <strong className="text-foreground">Cooling-off period</strong>, most policies include a
            window (commonly 14–21 days) where you can cancel for a full refund if you change your mind,
            provided you haven't claimed.
          </li>
        </ul>

        <h2 className={h2}>How to compare car insurance options</h2>
        <p className={body}>
          Comparing policies properly takes a bit more than scanning a list of prices. A simple step-by-
          step approach can help you weigh apples against apples rather than apples against pears.
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong className="text-foreground">Decide which type of cover may suit your
            situation.</strong> If your car is older and worth less than a few thousand dollars, a third
            party policy might be enough; if it's newer or financed, comprehensive is often considered.
          </li>
          <li>
            <strong className="text-foreground">Get quotes that use the same inputs.</strong> Same
            vehicle, same drivers, same address, same excess. Without that, you're not really comparing.
          </li>
          <li>
            <strong className="text-foreground">Compare features, not just headline price.</strong> Hire
            car after an accident, choice of repairer, windscreen cover, and new-for-old replacement can
            all make a meaningful difference depending on what you value.
          </li>
          <li>
            <strong className="text-foreground">Check exclusions and excesses.</strong> Look for
            age-based excesses, claim-type excesses, and any conditions about who can drive the car.
          </li>
          <li>
            <strong className="text-foreground">Read the PDS and TMD.</strong> Especially the sections
            on what's <em>not</em> covered.
          </li>
        </ol>
        <p className={body}>
          Our{" "}
          <Link to="/car-insurance/compare/" className={inlineLink}>
            compare car insurance
          </Link>{" "}
          page walks through what to put side by side, and{" "}
          <Link to="/car-insurance/quotes/" className={inlineLink}>
            car insurance quotes
          </Link>{" "}
          covers what information you'll typically need to get a quote in the first place.
        </p>

        <h2 className={h2}>Common mistakes to avoid</h2>
        <p className={body}>
          A handful of patterns trip up a lot of people. None of them are catastrophic on their own, but
          collectively they can lead to nasty surprises at claim time.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong className="text-foreground">Choosing the cheapest policy without checking the
            exclusions.</strong> The savings may evaporate the first time you need to claim something
            the policy doesn't cover. Our guide to{" "}
            <Link to="/car-insurance/cheap/" className={inlineLink}>
              cheap car insurance
            </Link>{" "}
            covers what to watch for.
          </li>
          <li>
            <strong className="text-foreground">Not declaring modifications, drivers, or business
            use.</strong> Anything not disclosed can give the insurer grounds to reduce or decline a
            claim.
          </li>
          <li>
            <strong className="text-foreground">Picking the lowest excess by default.</strong> A low
            excess raises your premium, sometimes by more than you'd ever save in a typical claim
            cycle.
          </li>
          <li>
            <strong className="text-foreground">Forgetting to update your insurer when things
            change.</strong> A new address, a new regular driver, or significantly different annual
            kilometres can all change what's considered fair pricing.
          </li>
          <li>
            <strong className="text-foreground">Skipping the PDS.</strong> Even a quick skim of the
            exclusions section can save a lot of grief.
          </li>
        </ul>

        <h2 className={h2}>What affects your premium</h2>
        <p className={body}>
          Every insurer uses its own rating model, but most weigh broadly similar factors. Understanding
          them makes it easier to see why two quotes can differ so much for the same car.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong className="text-foreground">Driver age and history.</strong> Younger and less
            experienced drivers typically pay more, as do drivers with recent at-fault claims or licence
            demerits. We dig into this on the{" "}
            <Link to="/car-insurance/young-drivers/" className={inlineLink}>
              car insurance for young drivers
            </Link>{" "}
            page.
          </li>
          <li>
            <strong className="text-foreground">Vehicle make, model and age.</strong> Cars that are
            expensive to repair, frequently stolen, or carry higher safety risk often attract higher
            premiums.
          </li>
          <li>
            <strong className="text-foreground">Where you live and where the car is parked
            overnight.</strong> Postcode-level claim history feeds into pricing.
          </li>
          <li>
            <strong className="text-foreground">How you use the vehicle.</strong> Annual kilometres,
            commuting distance, and whether it's used for business can all matter.
          </li>
          <li>
            <strong className="text-foreground">Excess.</strong> Choosing a higher excess generally
            lowers the premium.
          </li>
          <li>
            <strong className="text-foreground">Optional extras.</strong> Hire car cover, choice of
            repairer, no-claim discount protection, and similar add-ons each have a price.
          </li>
        </ul>
        <p className={body}>
          For more on what shapes the headline number, see our pages on{" "}
          <Link to="/car-insurance/cheap/" className={inlineLink}>
            cheap car insurance
          </Link>{" "}
          and{" "}
          <Link to="/car-insurance/lower-premiums/" className={inlineLink}>
            lowering your premium
          </Link>
          .
        </p>

        <h2 className={h2}>Browse all car insurance topics</h2>
        <p className={body}>
          The full set of plain-English car insurance pages, grouped by what you're trying to work out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {TOPIC_GROUPS.map((g, i) => (
            <div key={g.heading} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[11.5px] uppercase tracking-[0.08em] font-semibold text-muted-foreground/70">
                  {g.heading}
                </div>
                <div className="font-mono text-[12px] text-brand-blue tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <ul className="space-y-2.5 text-[14.5px]">
                {g.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-foreground hover:text-brand-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className={h2}>Australian car insurance providers</h2>
        <p className={body}>
          Plain-English overviews of {PROVIDERS.length} Australian car insurance brands, what each
          offers, who it may suit, and how it compares.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
          {[...PROVIDERS]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((p) => (
              <Link
                key={p.slug}
                to={p.path}
                className="text-[14px] font-medium bg-card border border-border rounded-full px-4 py-2.5 hover:border-foreground hover:bg-secondary transition text-center"
              >
                {p.name}
              </Link>
            ))}
        </div>
        <p className="text-[14px] text-muted-foreground mb-14">
          See the{" "}
          <Link to="/reviews/" className={inlineLink}>
            full reviews hub
          </Link>{" "}
          for more detail on each.
        </p>

        <h2 className={h2}>Head-to-head comparisons</h2>
        <p className={body}>
          Side-by-side comparisons of the most-asked-about pairings. None declare a winner, the right
          fit depends on your vehicle, location and what you value in an insurer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
          {COMPARISONS.map((c) => {
            const a = getProvider(c.slugA);
            const b = getProvider(c.slugB);
            if (!a || !b) return null;
            return (
              <Link
                key={c.path}
                to={c.path}
                className="group flex items-center justify-between bg-card border border-border rounded-2xl px-5 py-4 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_hsl(0_0%_0%/0.04),0_16px_40px_hsl(0_0%_0%/0.08)] transition"
              >
                <span className="font-sans font-semibold text-[16px] tracking-tight">
                  {a.name} <span className="text-muted-foreground text-[14px] font-medium">vs</span> {b.name}
                </span>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition" />
              </Link>
            );
          })}
        </div>

        <FAQAccordion
          items={faqs}
          heading="Frequently asked questions"
          className="mt-16"
        />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Compare your options
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            When you're ready to weigh policies side by side, head to our comparison page. If you'd
            rather start with quotes, or want to read more first, we've got you covered there too.
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
              to="/guides/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Read our guides
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceHub;

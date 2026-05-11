import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/how-much-is-car-insurance/";

const faqs = [
  {
    question: "What's the average car insurance premium in Australia?",
    answer:
      "There isn't one figure that's genuinely useful. Comprehensive premiums commonly fall between roughly $700 and $2,500+ a year depending on driver, vehicle and postcode. Third party fire and theft sits below that, third party property below that again. Quoting your own profile against several insurers is more useful than chasing an average.",
  },
  {
    question: "Why is my car insurance so much more expensive than my neighbour's?",
    answer:
      "Two drivers at the same address can quote very differently. Driving history, age, the specific make and model, annual kilometres, chosen excess and any optional extras all factor in. Even a few years' age difference or a recent at-fault claim can move a quote noticeably.",
  },
  {
    question: "Does the cost include CTP / green slip?",
    answer:
      "Generally no. Comprehensive, third party fire and theft, and third party property are priced separately from CTP. In NSW and the ACT you buy CTP (a 'green slip') separately. In other states it's usually bundled into your vehicle registration. Don't double-count when comparing quotes.",
  },
  {
    question: "Will switching insurers actually save me money?",
    answer:
      "Sometimes meaningfully, sometimes not at all. Insurers' pricing models change year to year, and the cheapest brand for one driver isn't the cheapest for another. Comparing matched quotes annually is the only reliable way to test whether your current price is still competitive.",
  },
  {
    question: "Does a higher excess always mean a lower premium?",
    answer:
      "Almost always — but the size of the saving varies by insurer. It's worth modelling out: if raising your excess by $500 only saves $80 a year, the maths only works in your favour if you'd go more than six or so years between claims.",
  },
  {
    question: "Are monthly payments more expensive than annual?",
    answer:
      "Often slightly. Many Australian insurers add a small loading for monthly payments to cover the extra processing. The exact gap is in each insurer's PDS — our pay monthly page has more on the trade-off.",
  },
];

const CarInsuranceHowMuch = () => {
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
          How much is car insurance in Australia?
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A useful answer to a deceptively simple question. Car insurance in Australia varies more
          widely than most people expect — which is why a single "average" figure rarely tells you
          much. This page breaks down what actually shapes the price, the ranges most drivers see,
          and the practical levers for landing closer to the lower end.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          There's no single price — and that's the honest answer
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Most "average car insurance" figures you'll see online are old, narrowly sourced, or
          cherry-picked from a single insurer. Premiums vary so much by driver profile, vehicle,
          postcode and excess that quoting one number is rarely useful. The more useful framing is
          understanding the components — and which of them you can move.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For background on how the cover types themselves work, the{" "}
          <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            car insurance hub
          </Link>{" "}
          covers the basics first.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What you're actually paying for
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Your annual premium is a mix of three broad components:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Risk-based pricing</strong> — the insurer's estimate of how likely you are to
            claim and how much that claim might cost
          </li>
          <li>
            <strong>Operational costs and margin</strong> — running the insurer, paying assessors,
            building reserves
          </li>
          <li>
            <strong>Government charges</strong> — GST, stamp duty, and (in some states) emergency
            services or fire services levies
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The risk-based portion is the largest part of most quotes — and the part that moves most
          when your circumstances change.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Typical ranges most drivers see
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Comprehensive car insurance for a private vehicle typically falls within a wide band —
          consumer-comparison sources commonly cite ranges from roughly $700 a year at the lower
          end to $2,500+ at the higher end. Third party fire and theft generally sits below that,
          third party property below that again, and CTP is a separate state-set figure.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          If your quote sits well outside that band on either side, it's worth understanding why
          before you assume something's wrong. Younger drivers, expensive or theft-prone vehicles,
          high-risk postcodes, recent claims and high annual kilometres push toward the upper end.
          Older drivers with clean records, low annual kilometres and a budget vehicle can quote
          below the typical floor.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          The biggest premium drivers
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Australian insurers each use their own rating model, but most weigh broadly similar
          factors. Understanding them makes it easier to see why two quotes can differ so much for
          the same car.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Driver age and experience</strong> — younger and less experienced drivers
            typically pay more because the statistical claim probability is higher
          </li>
          <li>
            <strong>Vehicle make, model and year</strong> — repair cost, parts availability, and
            theft frequency for the model
          </li>
          <li>
            <strong>Where you live and where the car is parked overnight</strong> — postcode-level
            claim history feeds in
          </li>
          <li>
            <strong>Annual kilometres</strong> — more time on the road means more exposure to risk
          </li>
          <li>
            <strong>Excess</strong> — see our explainer on{" "}
            <Link to="/car-insurance/excess/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              how excess works
            </Link>
          </li>
          <li>
            <strong>Claim and driving history</strong> — at-fault claims and demerits push premiums
            up
          </li>
          <li>
            <strong>Optional extras</strong> — hire car cover, choice of repairer and similar each
            carry a small premium
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          For the deeper take on each lever, see{" "}
          <Link to="/car-insurance/lower-premiums/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            how to lower your car insurance premium
          </Link>
          .
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Comprehensive vs third party — what the gap looks like
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          As a general rule, the broader the cover, the higher the premium. But the gap between{" "}
          <Link to="/car-insurance/comprehensive/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            comprehensive
          </Link>{" "}
          and third party isn't always huge — especially for lower-risk drivers, where comprehensive
          can be surprisingly competitive once you factor in what you'd otherwise pay out of pocket
          for damage to your own car.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The trade-off is worth working through on your own profile rather than assuming third
          party is always the cheaper move. Our{" "}
          <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            comparison guide
          </Link>{" "}
          walks through what to put side by side.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          How costs differ across states
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          State of residence affects premiums in a few ways:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>CTP / green slip</strong> — separately priced in NSW and the ACT, generally
            bundled into vehicle registration in QLD, VIC, WA, SA and TAS
          </li>
          <li>
            <strong>Postcode-level claim history</strong> — claim frequency varies by region, and
            insurers price for it
          </li>
          <li>
            <strong>State stamp duty and levies</strong> — small, but real, line-item differences
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The other components — risk pricing, operational costs, GST — apply everywhere.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What you can do about your premium
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A few practical levers, in roughly the order of bang-for-buck:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Compare matched quotes annually.</strong> Premiums shift between insurers year
            to year, sometimes meaningfully. The{" "}
            <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              comparison guide
            </Link>{" "}
            walks through what to put side by side.
          </li>
          <li>
            <strong>Consider raising your excess.</strong> More out-of-pocket if you claim, lower
            premium up front. Worth modelling against your typical claim cycle.
          </li>
          <li>
            <strong>Bundle if you genuinely will.</strong> Multi-policy discounts apply at most
            insurers — but only worth it if both policies are individually competitive.
          </li>
          <li>
            <strong>Skip optional extras you wouldn't actually use.</strong> Each add-on carries a
            small premium.
          </li>
          <li>
            <strong>Protect your no-claim bonus.</strong> See our explainer on the{" "}
            <Link to="/car-insurance/no-claim-bonus/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              car insurance no-claim bonus
            </Link>
            .
          </li>
          <li>
            <strong>Tactics in detail</strong> — see{" "}
            <Link to="/car-insurance/cheap/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              cheap car insurance
            </Link>{" "}
            and{" "}
            <Link to="/car-insurance/lower-premiums/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              lower premiums
            </Link>
            .
          </li>
        </ul>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Compare your options
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            The cleanest way to find your real number is to quote a couple of insurers using
            identical inputs. The comparison page covers what to put side by side; the quotes page
            covers what insurers ask for.
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

export default CarInsuranceHowMuch;

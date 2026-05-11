import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/quotes/";

const faqs = [
  {
    question: "How long does it take to get a car insurance quote online?",
    answer:
      "Most online quote forms take five to ten minutes if you have your vehicle and licence details handy. Some insurers offer indicative quotes faster, but you'll usually need to provide more detail to get a binding figure you can actually buy from.",
  },
  {
    question: "Do car insurance quotes affect my credit score?",
    answer:
      "Getting a quote on its own typically doesn't affect your credit score in Australia. Insurers may run identity and history checks before issuing a policy, but a quote request itself isn't usually treated as a credit enquiry. Always check the insurer's privacy policy if you want to be sure.",
  },
  {
    question: "Why are my quotes so different between insurers?",
    answer:
      "Each insurer has its own pricing model, claims data, and view of risk for things like your vehicle, location, and driving history. Two insurers can look at the same person and arrive at very different premiums. Our guide on why insurance quotes change explains the main drivers.",
  },
  {
    question: "Is the quoted premium the price I'll actually pay?",
    answer:
      "Usually yes, provided the information you supplied is accurate and you buy within the quote's validity window. If anything you disclosed turns out to be incorrect — like annual kilometres or who drives the car — the insurer can adjust the premium or, in some cases, decline a claim later.",
  },
  {
    question: "How long is a car insurance quote valid?",
    answer:
      "Quote validity varies by insurer, but somewhere between 14 and 30 days is common. After that the insurer may need to re-quote in case their pricing has changed. Always check the quote document for the exact expiry date.",
  },
  {
    question: "Can I get one quote that compares every insurer?",
    answer:
      "No single quote covers every insurer in Australia. Comparison services usually display only the insurers they have arrangements with. To get a fuller picture, it's worth pairing a comparison with at least one direct quote from a major insurer not on the panel.",
  },
];

const CarInsuranceQuotes = () => {
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
          Car insurance quotes in Australia: how to compare them properly
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          A practical guide to getting and reading car insurance quotes in Australia — what insurers
          ask, why two quotes for the same car can look so different, and how to set yourself up for an
          apples-to-apples comparison. Useful whether you're shopping fresh cover or sense-checking a
          renewal.
        </p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Getting a car insurance quote sounds simple — punch in some details, see a number. But the
          number you see depends heavily on the questions you answer and how consistent you are across
          insurers. A small change in any one input can move the premium by hundreds of dollars, which
          is part of why quote-shopping has a reputation for being confusing.
        </p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The good news: once you know what insurers ask and why, the process gets quick. If you'd
          rather start with the basics first, the{" "}
          <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            car insurance hub
          </Link>{" "}
          is the broader primer.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What is a car insurance quote?
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A car insurance quote is an insurer's price for a specific policy, calculated from the
          information you provide. It usually comes with a summary of the cover (premium, excess, sum
          insured, headline inclusions) and a link to the full Product Disclosure Statement (PDS) and
          Target Market Determination (TMD).
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A quote is not the same as a policy. It's an offer based on your disclosures — buy it within
          the validity period and the price typically holds; let it lapse, or change a detail, and the
          insurer can re-quote.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What information you'll need
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Having the right details ready means a quote takes minutes rather than half an hour. Most
          insurers will ask for some version of the following.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Vehicle details</strong> — registration, make, model, year, body type, transmission,
            and any factory or aftermarket modifications.
          </li>
          <li>
            <strong>Where it lives</strong> — your address, where the car is parked overnight, and
            whether it's garaged.
          </li>
          <li>
            <strong>Who drives it</strong> — names, dates of birth, licence types and history for the
            main driver and any other regular drivers.
          </li>
          <li>
            <strong>How it's used</strong> — annual kilometres, commuting distance, and whether the car
            is used for business.
          </li>
          <li>
            <strong>Claims and incidents</strong> — at-fault and not-at-fault claims in the last few
            years, plus any traffic offences.
          </li>
          <li>
            <strong>Cover preferences</strong> — cover type, excess level, sum insured (or
            agreed/market value preference), and any optional extras.
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Even one inconsistent answer between insurers can throw your comparison off. Writing your
          inputs down once and reusing them across quotes is one of the easiest improvements you can
          make.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          How to compare car insurance quotes step by step
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          The goal is not to collect the most quotes — it's to collect quotes that are actually
          comparable. The following sequence usually does the job in under an hour.
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Pick your cover type and excess up front.</strong> Decide on comprehensive vs third
            party (and which excess you're modelling) before you start typing. The{" "}
            <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              compare car insurance
            </Link>{" "}
            page covers how to choose.
          </li>
          <li>
            <strong>Get three to five quotes</strong> using identical inputs. A blend of major insurers,
            challenger brands, and a comparison source tends to produce a useful spread.
          </li>
          <li>
            <strong>Lay them out side by side.</strong> A simple table with premium, excess, sum
            insured method, hire car, windscreen, choice of repairer, and key exclusions makes
            differences obvious.
          </li>
          <li>
            <strong>Spot-check the cheapest quote against the most expensive one.</strong> If the
            $1,400 policy and the $2,200 policy look similar on the summary, the answer is in the PDS.
          </li>
          <li>
            <strong>Re-quote with one variable changed.</strong> Trying a higher excess or removing an
            optional extra shows you how price-sensitive each insurer is. Sometimes the order changes.
          </li>
          <li>
            <strong>Read the PDS and TMD on your shortlist.</strong> Especially the exclusions and the
            target market description.
          </li>
        </ol>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Common mistakes to avoid with quotes
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Quote-shopping mistakes tend to fall into one of two buckets: comparing the wrong things, or
          quietly under-disclosing.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Switching inputs between quotes.</strong> A different excess, sum insured, or annual
            kilometres figure on different forms produces a comparison you can't trust.
          </li>
          <li>
            <strong>Under-stating annual kilometres or business use.</strong> Tempting because it usually
            lowers the premium, but it can also give the insurer grounds to reject a claim later.
          </li>
          <li>
            <strong>Leaving the youngest regular driver off the policy.</strong> Listing a younger
            driver may push the premium up, but failing to declare them can invalidate cover when they
            crash.
          </li>
          <li>
            <strong>Treating the indicative price as the final price.</strong> Some quote tools show a
            ballpark first and then adjust after a fuller question set.
          </li>
          <li>
            <strong>Stopping at one quote.</strong> Renewing without comparing leaves you exposed to
            quiet annual price drift. The same insurer can be the best one year and the most expensive
            the next.
          </li>
          <li>
            <strong>Chasing the cheapest quote</strong> at the expense of cover quality. Our{" "}
            <Link to="/car-insurance/cheap/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              cheap car insurance
            </Link>{" "}
            guide covers the trade-offs.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Why quotes vary so much between insurers
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A spread of $500–$1,000 between quotes for the same car isn't unusual. The main reasons sit
          underneath the headline price.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Each insurer prices risk differently.</strong> Two insurers can weight your age,
            postcode, or vehicle very differently based on their own claims data.
          </li>
          <li>
            <strong>Discounts and loadings vary.</strong> No-claim discounts, multi-policy discounts,
            and online sign-up offers can shift a quote significantly.
          </li>
          <li>
            <strong>Default cover settings differ.</strong> One insurer's "standard" comprehensive may
            include hire car cover; another's may not.
          </li>
          <li>
            <strong>Excess defaults differ.</strong> A quote tool that pre-selects a $500 excess will
            look more expensive than one that defaults to $1,500.
          </li>
          <li>
            <strong>Markets shift.</strong> Reinsurance costs, weather events, and broader claims
            trends all feed through into pricing over time. See{" "}
            <Link to="/guides/why-insurance-quotes-change/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              why insurance quotes change
            </Link>{" "}
            for more.
          </li>
          <li>
            <strong>Your details change too.</strong> A new address, a new regular driver, or a recent
            claim can all move the number. The{" "}
            <Link to="/car-insurance/cost/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              car insurance cost
            </Link>{" "}
            page covers the main factors.
          </li>
        </ul>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">
            Compare your options
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            Once you've got your inputs ready, the comparison itself is fast. The pages below walk
            through what to put side by side and where the meaningful differences usually sit.
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
              to="/car-insurance/best/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Best car insurance
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

export default CarInsuranceQuotes;

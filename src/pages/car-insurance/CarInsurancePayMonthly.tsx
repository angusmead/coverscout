import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/pay-monthly/";

const faqs = [
  { question: "Does paying car insurance monthly cost more than paying annually in Australia?", answer: "It often does. Many insurers add a small surcharge for monthly payments — commonly a few percent of the annual premium. Some insurers offer monthly at the same total price as annual, but it isn't the norm." },
  { question: "Is there a credit check for paying car insurance monthly?", answer: "Some insurers carry out an identity or credit check before approving monthly payments. Others don't. The application form or PDS will indicate what applies. The check itself is generally a soft check and doesn't typically affect your credit score." },
  { question: "What happens if I miss a monthly car insurance payment?", answer: "Most insurers allow a short grace period before treating the policy as in default. Repeated missed payments can lead to the policy being cancelled, leaving you uninsured. Cancellation can also affect your record with that insurer in future." },
  { question: "Are there car insurers in Australia that don't charge extra for monthly payments?", answer: "A small number of insurers offer monthly payments at no extra cost compared to annual. They tend to be the exception rather than the rule, and the underlying premium still varies between insurers. Worth comparing both pricing structures." },
  { question: "Can I switch from annual to monthly mid-policy?", answer: "Some insurers allow it; others require the change at renewal. There's usually no penalty for the change itself, but the recalculation may include the monthly surcharge if one applies." },
  { question: "Does paying monthly affect my no-claim bonus or cover quality?", answer: "Generally no. The cover and no-claim bonus rules are the same regardless of payment frequency. The differences are in price and in how the insurer handles missed payments." },
];

const CarInsurancePayMonthly = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Pay monthly car insurance in Australia: pros, cons and what to watch</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">A practical guide to paying car insurance monthly in Australia — how it works, what it typically costs compared to paying annually, and the things worth checking before signing up.</p>

        <p className="text-base leading-relaxed mb-5">Paying car insurance monthly spreads the cost into smaller, more predictable chunks. For many people that's the easier choice. The trade-off is usually a slightly higher total cost over the year, plus a few mechanics worth understanding before you commit.</p>
        <p className="text-base leading-relaxed mb-5">If you're working out whether monthly suits you alongside other ways to lower the price, see our <Link to="/car-insurance/lower-premiums/" className="text-primary hover:underline">how to lower your car insurance</Link> guide.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What is "pay monthly" car insurance?</h2>
        <p className="text-base leading-relaxed mb-5">"Pay monthly" simply means paying your premium in twelve equal monthly instalments rather than a single annual payment. The cover itself is the same — same insurer, same policy, same PDS — but the cash-flow shape is different and the total cost can be slightly different too.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Most insurers add a surcharge.</strong> Commonly between 5% and 10% of the annual premium spread across the year.</li>
          <li><strong>Some insurers don't.</strong> A handful offer monthly at the same total cost. Worth checking when comparing.</li>
          <li><strong>Direct debit is usually required.</strong> Manual monthly transfers aren't always offered.</li>
          <li><strong>Missed payments matter.</strong> Repeated misses can lead to cancellation; an insurance lapse can affect your no-claim bonus and future quotes.</li>
          <li><strong>Cover is the same as annual.</strong> Same PDS, same TMD, same claim entitlements.</li>
          <li><strong>The convenience can be real.</strong> Smaller, predictable bills smooth household budgeting for many people.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">How to compare monthly vs annual properly</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Get the same insurer to quote both ways.</strong> The difference is the surcharge.</li>
          <li><strong>Calculate the annualised cost.</strong> Twelve months × monthly amount, then compared to the annual quote.</li>
          <li><strong>Compare insurers on both bases.</strong> Insurer A might be cheaper annually but Insurer B might be cheaper monthly. The <Link to="/car-insurance/compare/" className="text-primary hover:underline">compare car insurance</Link> page covers the broader framework.</li>
          <li><strong>Factor in your real cash flow.</strong> Saving 5% by paying annually only matters if you can comfortably make the lump-sum payment.</li>
          <li><strong>Check missed-payment rules.</strong> Some insurers have stricter rules than others.</li>
          <li><strong>Read the PDS</strong> to confirm cover and excess remain the same regardless of payment frequency.</li>
        </ol>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Treating the monthly figure as the headline price.</strong> Comparison only works if you annualise.</li>
          <li><strong>Skipping the surcharge in your maths.</strong> A 5–10% premium uplift can outweigh a small switching saving.</li>
          <li><strong>Letting a payment fail repeatedly.</strong> Risks cancellation and a coverage gap.</li>
          <li><strong>Choosing monthly purely to lower the headline.</strong> Cheaper looking, not cheaper paying.</li>
          <li><strong>Forgetting to check whether monthly is available</strong> on a policy you're switching to. Some specialised products are annual-only.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What affects whether monthly may suit you</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Cash-flow comfort.</strong> Predictable smaller bills vs one larger one is partly a behavioural choice.</li>
          <li><strong>Surcharge size.</strong> Small surcharge — monthly is roughly neutral. Larger surcharge — annual generally wins on total cost.</li>
          <li><strong>Reliability of payments.</strong> Stable income with autopay capability favours monthly without much risk.</li>
          <li><strong>Whether the insurer offers a no-surcharge monthly option.</strong> Worth checking specifically.</li>
          <li><strong>Tendency to switch insurers mid-year.</strong> Annual policies may have a different refund pattern.</li>
          <li><strong>Multi-policy bundles.</strong> Some bundle discounts only apply to annual payments.</li>
        </ul>
        <p className="text-base leading-relaxed mb-5">For broader pricing factors, see <Link to="/car-insurance/cost/" className="text-primary hover:underline">car insurance cost</Link>.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">Compare your options</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">Quoting the same policy on both monthly and annual bases — and comparing across insurers — is the cleanest way to see which suits.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Get car insurance quotes</Link>
            <Link to="/car-insurance/lower-premiums/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Lower your premium</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsurancePayMonthly;

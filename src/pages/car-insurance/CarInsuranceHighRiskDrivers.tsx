import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/high-risk-drivers/";

const faqs = [
  { question: "What makes someone a 'high-risk driver' to Australian insurers?", answer: "There's no single definition. Insurers commonly assign higher risk based on a combination of factors, recent at-fault claims, demerits and traffic offences, certain serious convictions like drink driving, very young or very inexperienced drivers, and a history of policy cancellations. Each insurer applies its own underwriting criteria." },
  { question: "Can I get car insurance with multiple at-fault claims?", answer: "Often yes, though not from every insurer. Some mainstream insurers will decline cover after a certain number of recent at-fault claims; others will offer cover at a higher premium or with conditions. Brokers and specialist insurers can sometimes help where mainstream insurers won't." },
  { question: "Will a drink-driving conviction affect my car insurance?", answer: "Almost always yes. Many insurers either decline cover, charge significantly higher premiums, or impose specific exclusions. The conviction usually needs to be disclosed for a defined period, the PDS and quote questions will spell out the disclosure window." },
  { question: "Are there specialist insurers for high-risk drivers in Australia?", answer: "Yes, a small number of insurers and brokers focus on harder-to-place risks. They generally won't be the cheapest option, but they may be willing to offer cover where mainstream brands won't. Comparing through both direct insurers and brokers is often necessary." },
  { question: "How long do incidents stay on my insurance record?", answer: "It varies by insurer and incident type, but a window of three to five years is common for most claims and offences. Serious convictions can be relevant for longer. Disclosure obligations on quote forms typically reflect these timeframes." },
  { question: "Can I lower my premium over time after being classed as high-risk?", answer: "Generally yes, with patience and a clean record. As at-fault incidents fall outside the disclosure window and you build claim-free time, premiums usually trend back toward standard. Comparing every renewal helps catch the moment a different insurer's pricing model becomes more favourable." },
];

const CarInsuranceHighRiskDrivers = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />
        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">Car insurance for high-risk drivers in Australia</h1>
        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">A practical guide to car insurance if you've been classed as high-risk in Australia, what insurers mean by the term, where to look for cover, and how to compare your options without giving up cover quality.</p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Being told you're "high-risk" by an insurer isn't a permanent label. It's a snapshot based on a particular insurer's view of your record at a particular point in time. Different insurers see the same record differently, which is why comparing matters more, not less, when you're in this position.</p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">If you're newer to the topic generally, the <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance hub</Link> covers the surrounding fundamentals.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What is a "high-risk driver" in Australian car insurance?</h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">There's no single regulated definition. In practice, insurers tend to use the term informally for drivers whose claims and conviction history puts them outside their standard pricing model. That can include any combination of:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>Multiple at-fault claims in the past few years</li>
          <li>Serious driving convictions (drink driving, drug driving, dangerous driving)</li>
          <li>A history of licence suspensions or demerit-point accumulations</li>
          <li>Past policy cancellations by another insurer</li>
          <li>Very young or recently licensed drivers, also covered on our <Link to="/car-insurance/young-drivers/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">young drivers</Link> page</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">The result is usually higher premiums, more conditions, or, in some cases, being declined by an insurer's automated quote engine altogether.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Decline by one insurer doesn't mean decline by all.</strong> Different insurers underwrite differently.</li>
          <li><strong>Brokers can be useful.</strong> They have access to specialist insurers that aren't always available direct.</li>
          <li><strong>Disclosure is critical.</strong> Failing to disclose claims, demerits or convictions can void cover.</li>
          <li><strong>Premiums tend to ease with time.</strong> As incidents age out of the disclosure window and a clean run rebuilds, options usually broaden.</li>
          <li><strong>Excess and conditions may differ.</strong> A specialist policy may carry higher excesses or specific exclusions worth understanding upfront.</li>
          <li><strong>The PDS and TMD remain the source of truth</strong>, particularly important when the policy is unusual.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">How to compare car insurance as a high-risk driver</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Disclose everything accurately.</strong> The cover is only useful if a claim isn't refused later.</li>
          <li><strong>Get matched quotes</strong> from a broader-than-usual mix, mainstream insurers, challenger brands, and at least one specialist or broker.</li>
          <li><strong>Compare cover, not just price.</strong> Specialist policies sometimes carry tighter exclusions or higher excesses.</li>
          <li><strong>Check the PDS for any unusual conditions</strong>, driver restrictions, geographic limits, or specific event exclusions.</li>
          <li><strong>Re-quote as your record clears.</strong> An incident from three years ago may not affect your quote the same way it did last year.</li>
          <li><strong>Keep records.</strong> Notes of when offences and claims occurred make accurate disclosure easier in future.</li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Our <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">compare car insurance</Link> page covers the broader comparison framework.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Under-disclosing on the quote form.</strong> The fastest way to a refused claim down the track.</li>
          <li><strong>Stopping after one decline.</strong> Other insurers and brokers may still be willing.</li>
          <li><strong>Driving uninsured because cover seems hard to find.</strong> Even costly third party cover usually beats no cover at all.</li>
          <li><strong>Ignoring exclusions on a specialist policy.</strong> Sometimes the cover is narrower than a standard policy of the same name.</li>
          <li><strong>Not re-quoting as time passes.</strong> Premiums often drop meaningfully as incidents age.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What affects what high-risk drivers pay</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Type and recency of incidents.</strong> A recent at-fault claim weighs more than one from four years ago.</li>
          <li><strong>Severity of convictions.</strong> Major offences carry more weight than minor infringements.</li>
          <li><strong>Time since the most recent incident.</strong> Each year of clean driving generally helps.</li>
          <li><strong>Vehicle.</strong> A modest, easy-to-repair car often quotes better than a higher-risk one for the same driver.</li>
          <li><strong>Excess level.</strong> Higher excesses can buy down the premium materially.</li>
          <li><strong>Insurer choice.</strong> Specialist insurers price for risk profiles that mainstream brands won't touch.</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">For broader pricing factors, see <Link to="/car-insurance/cost/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance cost</Link>.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">Compare your options</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">Comparison shopping matters more, not less, when you've been classed as high-risk. Different insurers will price your situation very differently.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Get car insurance quotes</Link>
            <Link to="/car-insurance/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Car insurance basics</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceHighRiskDrivers;

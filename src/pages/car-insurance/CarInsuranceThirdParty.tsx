import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/third-party/";

const faqs = [
  { question: "What's the difference between third party property insurance and CTP?", answer: "CTP (compulsory third party) is mandatory in every Australian state and territory and covers injury claims to other people. Third party property is optional and covers damage your vehicle causes to other people's property. They sit side by side rather than overlapping." },
  { question: "Does third party car insurance cover me if my car is stolen?", answer: "A standard third party property policy generally doesn't cover theft of your own vehicle. If theft and fire matter to you, third party fire and theft (a level above) may suit better. Comprehensive covers a broader set of events again." },
  { question: "Can I add fire and theft cover to a basic third party policy?", answer: "Some insurers offer a separate 'third party fire and theft' product rather than letting you bolt fire and theft onto basic third party. The features and pricing vary, so it's worth checking the PDS and quoting both." },
  { question: "Is third party property cover enough for a financed car?", answer: "Most lenders require comprehensive cover on a financed car so the loan asset is protected against damage to the car itself. Third party generally doesn't meet that condition. Worth checking your loan agreement first." },
  { question: "What happens if an uninsured driver hits my car and I only have third party?", answer: "Some third party property policies include limited 'uninsured motorist extension' cover for situations where you weren't at fault and the other driver can be identified but isn't insured. Limits and conditions vary, the PDS is the source of truth." },
  { question: "How much cheaper is third party than comprehensive in Australia?", answer: "There's no fixed ratio, but third party property is typically a fraction of the price of comprehensive. The exact gap depends on the vehicle, the driver, and the insurer. Comparing both for the same situation is the only way to see your real numbers." },
];

const CarInsuranceThirdParty = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />
        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">Third party car insurance in Australia</h1>
        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">A plain-English guide to third party property car insurance in Australia, what it covers, what it doesn't, how it compares to CTP and comprehensive, and the situations it may suit.</p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Third party car insurance often gets dismissed as the bargain-basement option, but for the right car and driver, it can be a perfectly reasonable choice. Understanding exactly what it does, and doesn't, cover is the difference between an informed decision and a regret at claim time.</p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">If you'd rather start with the broader basics, the <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance hub</Link> covers all four types of car insurance side by side.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What is third party car insurance?</h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Third party property car insurance is an optional policy that covers damage your vehicle causes to other people's property, most often, their car. It generally doesn't cover damage to your own vehicle. There are usually three flavours people group under "third party":</p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Third party property only</strong>, damage to other people's property.</li>
          <li><strong>Third party fire and theft</strong>, third party property cover plus limited cover if your car is stolen or damaged by fire.</li>
          <li><strong>CTP</strong>, compulsory third party. Covers injury to people, not vehicle damage. Required to register your car. The <Link to="/car-insurance/ctp/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">CTP / green slip</Link> page covers this in more depth.</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">When most people say "third party car insurance" they mean the first or second of these.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Damage to your own car usually isn't covered.</strong> If you write off your own car in a single-vehicle incident, a basic third party policy generally won't pay for it.</li>
          <li><strong>It's not the same as CTP.</strong> CTP covers people; third party property covers vehicles and other property.</li>
          <li><strong>Some policies include a limited 'uninsured motorist' extension.</strong> Worth a careful PDS read.</li>
          <li><strong>Excess still applies.</strong> Even on a third party claim you'll typically pay an excess.</li>
          <li><strong>Optional extras are limited.</strong> Hire car cover and choice of repairer features are more common on comprehensive policies.</li>
          <li><strong>The PDS resolves edge cases</strong>, what counts as 'property', whether trailers are included, and how claims involving your own car interact with the policy.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">How to compare third party policies</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Decide between third party property only and fire and theft.</strong> The price gap is usually small and the cover difference is meaningful for cars stored on the street.</li>
          <li><strong>Get matched quotes</strong>, same vehicle, same drivers, same excess. Our <Link to="/car-insurance/quotes/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance quotes</Link> page lists what to keep constant.</li>
          <li><strong>Quote comprehensive too</strong> for the same situation. Sometimes comprehensive isn't much more expensive than you'd expect, and the cover difference is significant.</li>
          <li><strong>Compare excesses and limits</strong> on each third party policy, the per-claim limit on damage to other people's property can vary.</li>
          <li><strong>Read the PDS and TMD.</strong> Especially the exclusions section and any uninsured motorist clauses.</li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Our <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">compare car insurance</Link> page covers the broader comparison framework.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Confusing third party property with CTP.</strong> They're different products solving different problems.</li>
          <li><strong>Choosing third party purely on price</strong> for a car you couldn't afford to replace yourself.</li>
          <li><strong>Assuming theft is covered.</strong> Standard third party property generally doesn't cover theft, third party fire and theft does, with limits.</li>
          <li><strong>Skipping the comprehensive quote</strong> on the assumption it's much more expensive. Sometimes it isn't.</li>
          <li><strong>Not reading the property damage limit.</strong> A claim against you involving an expensive vehicle can be larger than you'd expect.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What affects whether third party may suit you</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>The value of your car.</strong> Lower-value cars tend to make third party an easier choice.</li>
          <li><strong>Whether the car is financed.</strong> Lenders usually require comprehensive cover.</li>
          <li><strong>Your ability to absorb a write-off yourself.</strong> If replacing the car would be difficult, comprehensive often makes more sense.</li>
          <li><strong>Where the car is parked.</strong> Street parking in higher-theft areas may push toward at least third party fire and theft.</li>
          <li><strong>Your driving environment.</strong> Single-vehicle incidents are more likely on rural roads, in winter conditions, or on high-traffic commutes.</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">For more on what shapes the price of any car insurance, see our <Link to="/car-insurance/cost/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance cost</Link> page.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">Compare your options</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">Quoting third party and comprehensive side by side for the same vehicle is usually the fastest way to see whether the cheaper option really suits.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/comprehensive/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Comprehensive cover</Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Get car insurance quotes</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceThirdParty;

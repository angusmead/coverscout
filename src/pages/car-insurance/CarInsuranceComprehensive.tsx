import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/comprehensive/";

const faqs = [
  { question: "What does comprehensive car insurance typically cover in Australia?", answer: "Most comprehensive policies cover accidental damage to your own car, damage your car causes to other people's property, theft, fire, vandalism, and certain weather events. Inclusions and limits vary between insurers, so the PDS is the source of truth for any specific policy." },
  { question: "Does comprehensive car insurance cover damage from natural disasters?", answer: "Most comprehensive policies cover damage from storms, hail, and floods, but with conditions. For example, deliberately driving into floodwater is often excluded. The PDS will spell out what's in and out." },
  { question: "Will my comprehensive policy cover a hire car or borrowed car?", answer: "Cover for cars you don't own varies. Some comprehensive policies extend limited cover to a hire car or borrowed car for short periods; others require a separate add-on. Check the PDS before assuming you're covered." },
  { question: "Can I add roadside assistance to a comprehensive policy?", answer: "Many insurers offer roadside assistance as an optional extra on comprehensive policies. The cost and inclusions (towing distances, after-hours, callout limits) vary, so it's worth comparing it against a standalone roadside provider." },
  { question: "What's typically excluded from comprehensive car insurance?", answer: "Common exclusions include damage caused while driving under the influence, driving an unregistered or unroadworthy vehicle, undeclared modifications, claims involving unlisted drivers, and wear and tear. Each insurer's exclusions list sits in the PDS." },
  { question: "Is comprehensive worth it for an old car?", answer: "It depends on the car's market value and how easily you could replace it yourself. If the car is worth a few thousand dollars and you could absorb the loss, third party may suit. If replacement would be difficult, comprehensive may still be the more straightforward choice." },
];

const CarInsuranceComprehensive = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Comprehensive car insurance in Australia</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">A clear guide to comprehensive car insurance in Australia — what's typically included, what's commonly excluded, the optional extras worth knowing about, and when comprehensive may be worth comparing.</p>

        <p className="text-base leading-relaxed mb-5">Comprehensive car insurance is the broadest standard cover in Australia. It's also the most variable — two policies that both call themselves "comprehensive" can have very different fine print. Knowing what to look for makes the comparison much faster.</p>
        <p className="text-base leading-relaxed mb-5">If you're still working out which type of cover may suit, the <Link to="/car-insurance/" className="text-primary hover:underline">car insurance hub</Link> sits comprehensive next to the other options.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What is comprehensive car insurance?</h2>
        <p className="text-base leading-relaxed mb-5">Comprehensive car insurance is an optional policy that typically covers both damage to your own car and damage your car causes to other people's property. The bundle usually includes accidental damage, theft, fire, vandalism, and certain weather events, with optional extras layered on top.</p>
        <p className="text-base leading-relaxed mb-5">It sits at the top of the standard cover ladder above third party, third party fire and theft, and CTP. CTP — the only mandatory cover in Australia — handles injury to people; comprehensive deals with vehicle and property damage.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Comprehensive isn't all-encompassing.</strong> The name implies a broader scope than it actually has — exclusions still apply.</li>
          <li><strong>Agreed value vs market value</strong> — most comprehensive policies offer one, the other, or both. Our <Link to="/guides/market-value-vs-agreed-value/" className="text-primary hover:underline">explainer</Link> walks through the trade-offs.</li>
          <li><strong>Excess structure varies.</strong> Beyond the standard excess, you may also pay an age-based excess, inexperienced driver excess, or specific claim type excess.</li>
          <li><strong>Hire car after an accident</strong> may be standard, optional, or absent depending on the policy.</li>
          <li><strong>Choice of repairer</strong> may or may not be included. It often matters more than people expect.</li>
          <li><strong>The PDS and TMD beat the marketing copy.</strong> Two policies marketed identically can have different exclusions and benefit limits.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">How to compare comprehensive policies</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Lock in your inputs</strong> — same vehicle, same drivers, same excess level — before quoting. The <Link to="/car-insurance/quotes/" className="text-primary hover:underline">car insurance quotes</Link> page covers what to keep constant.</li>
          <li><strong>Get matched quotes</strong> from at least three insurers, mixing major brands with at least one challenger.</li>
          <li><strong>Build a feature comparison.</strong> Premium · excess · sum insured method · hire car · windscreen · choice of repairer · key exclusions.</li>
          <li><strong>Quote a higher-excess version</strong> alongside the default. Sometimes the saving is significant; sometimes it isn't.</li>
          <li><strong>Read the PDS</strong> for your shortlist. Especially the "what is not covered" section.</li>
          <li><strong>Check the TMD</strong> to make sure the policy is designed for someone in your situation.</li>
        </ol>
        <p className="text-base leading-relaxed mb-5">Our <Link to="/car-insurance/compare/" className="text-primary hover:underline">compare car insurance</Link> page covers the broader framework if you'd like more detail.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Assuming comprehensive means 'covers everything'.</strong> Exclusions still apply, and the differences between policies live there.</li>
          <li><strong>Picking the lowest premium</strong> without checking what's been stripped out.</li>
          <li><strong>Defaulting to market value</strong> on a long-held car when an agreed value would suit better.</li>
          <li><strong>Stacking optional extras you may not use</strong> — see our <Link to="/car-insurance/cheap/" className="text-primary hover:underline">cheap car insurance</Link> guide for cleaner ways to lower the price.</li>
          <li><strong>Not declaring modifications, business use, or all regular drivers.</strong> All can give the insurer grounds to reduce or refuse a claim.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What affects comprehensive premiums</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Driver age and history.</strong> See <Link to="/car-insurance/young-drivers/" className="text-primary hover:underline">car insurance for young drivers</Link> for the lower-experience end.</li>
          <li><strong>Vehicle make, model, and year.</strong> Repair cost, theft frequency, and safety profile all weigh.</li>
          <li><strong>Where you live and park.</strong> Postcode-level claims data is a meaningful input.</li>
          <li><strong>Annual kilometres and use.</strong> Lower mileage and personal-only use generally rate better.</li>
          <li><strong>Sum insured method.</strong> An agreed value above market value will usually cost more.</li>
          <li><strong>Optional extras.</strong> Each one has a price.</li>
        </ul>
        <p className="text-base leading-relaxed mb-5">For a wider breakdown of pricing factors, see <Link to="/car-insurance/cost/" className="text-primary hover:underline">car insurance cost</Link>.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">Compare your options</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">Quoting comprehensive across three or more insurers — with matched inputs — usually surfaces a useful spread. The pages below walk through both the comparison itself and the alternatives.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/third-party/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Third party cover</Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Get car insurance quotes</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceComprehensive;

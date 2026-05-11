import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/over-50s/";

const faqs = [
  { question: "Do drivers over 50 actually get cheaper car insurance in Australia?", answer: "Often, but not always. Drivers in their fifties and sixties tend to have established claim records, which insurers usually rate well. Premiums commonly tick back up later in life as risk profiles shift, so the picture isn't a single straight line." },
  { question: "Are there car insurers that specialise in cover for older Australian drivers?", answer: "Yes — a handful of brands target the over-50s market specifically, often emphasising features like senior-driver discounts, choice of repairer, or simpler claims handling. Whether they're the most competitive option depends on the individual quote, so it's worth comparing them against general insurers too." },
  { question: "Should I declare medical conditions to my car insurer?", answer: "If a condition affects your fitness to drive (and may affect your licence), most insurers expect to be told. Failing to disclose a relevant condition can give the insurer grounds to refuse a claim. The PDS and your duty of disclosure spell out what applies." },
  { question: "Does retiring change my car insurance premium?", answer: "It can. Lower annual kilometres, no daily commute, and off-peak driving patterns often look favourable to insurers. Letting your insurer know about a meaningful change in usage is a good habit at every renewal." },
  { question: "Can I be refused car insurance after a certain age?", answer: "There's no single legal cut-off in Australia, but some insurers apply maximum entry ages or additional underwriting checks beyond a certain age. Specialist over-50s insurers may continue to offer cover where mainstream brands don't, so options usually still exist." },
  { question: "Is it worth dropping comprehensive cover for an older car?", answer: "It depends on the value of the car and how much you'd want to recover at claim time. If the market value is low and you could absorb replacing it yourself, third party may suit. If you'd struggle to replace the car, comprehensive often still makes sense." },
];

const CarInsuranceOver50s = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />
        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">Car insurance for over 50s in Australia</h1>
        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">A clear guide to car insurance for drivers in their 50s, 60s and beyond in Australia — how age changes the way insurers price you, which features are worth weighing, and how to compare policies that may suit.</p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Once you're past the age where insurers treat you as inexperienced, the conversation shifts. Premiums become more about driving record, vehicle, and lifestyle than age alone. That said, age does still play a role — particularly later in life — and a few features become more important than they were a couple of decades ago.</p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">If you'd like a refresher on the underlying basics, the <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance hub</Link> covers the fundamentals.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What is over 50s car insurance?</h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">It isn't a separate product category in Australia, but several insurers market policies aimed at the over-50s segment. They typically emphasise stable pricing, choice of repairer, and features that suit drivers with lower annual kilometres or who don't commute daily.</p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Standard insurers also generally rate drivers in this age band well — provided the driving record is clean — so it's worth comparing both specialist and mainstream options before deciding.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Lower kilometres can lower the premium.</strong> If you've stopped commuting, telling the insurer matters.</li>
          <li><strong>Choice of repairer often becomes more valuable.</strong> Continuity with a trusted local repairer can make claim time smoother.</li>
          <li><strong>Agreed value vs market value</strong> — for a long-held car, an agreed value can avoid arguments at claim time. See our <Link to="/guides/market-value-vs-agreed-value/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">market value vs agreed value</Link> guide.</li>
          <li><strong>Disclosure obligations.</strong> Health changes that affect driving fitness usually need to be declared.</li>
          <li><strong>Older car, lower comprehensive value.</strong> At some point a third party policy may match the car's value better.</li>
          <li><strong>Renewal price drift.</strong> Loyalty doesn't always equal the best price — comparing at renewal stays useful at every age.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">How to compare car insurance for over 50s</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Decide on cover type</strong> based on the value of the car. <Link to="/car-insurance/comprehensive/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">Comprehensive</Link> still suits most newer or higher-value vehicles; <Link to="/car-insurance/third-party/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">third party</Link> may suit older ones.</li>
          <li><strong>Get matched quotes</strong> — at least one specialist over-50s insurer and two mainstream insurers — using the same inputs. See <Link to="/car-insurance/quotes/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance quotes</Link> for what to keep constant.</li>
          <li><strong>Compare features that matter at this stage:</strong> choice of repairer, hire car, agreed value, no-claim bonus protection.</li>
          <li><strong>Adjust the excess</strong> and re-quote to see the price sensitivity.</li>
          <li><strong>Read the PDS and TMD.</strong> Pay attention to disclosure requirements and any age-based conditions.</li>
        </ol>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Auto-renewing without comparing.</strong> Even loyal customers see annual price drift.</li>
          <li><strong>Assuming specialist insurers are always cheapest.</strong> They may be — but not always.</li>
          <li><strong>Holding agreed value too high relative to the car's actual value.</strong> Premiums climb without a real benefit at claim time.</li>
          <li><strong>Not updating annual kilometres post-retirement.</strong> Often a missed saving.</li>
          <li><strong>Letting the policy lapse on a written-off-by-age car</strong> when third party would still make sense.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What affects what over 50s pay</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Driving record.</strong> Decades of clean driving are usually rated well.</li>
          <li><strong>Annual kilometres.</strong> Lower-mileage drivers often see a meaningful saving.</li>
          <li><strong>Vehicle.</strong> Repair cost, age and theft profile still apply.</li>
          <li><strong>Postcode.</strong> Local claim history continues to feed into pricing.</li>
          <li><strong>Excess and optional extras.</strong> Same levers as any other driver.</li>
          <li><strong>Health declarations.</strong> Material to disclosure obligations rather than direct pricing.</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">For the wider set of factors, the <Link to="/car-insurance/cost/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance cost</Link> page is the broader explainer.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">Compare your options</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">Comparing matched quotes from a specialist insurer alongside mainstream options is the simplest way to see whether the over-50s pitch actually translates into a better price for you.</p>
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

export default CarInsuranceOver50s;

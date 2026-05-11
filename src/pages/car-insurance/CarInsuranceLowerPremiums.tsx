import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/lower-premiums/";

const faqs = [
  { question: "What's the single biggest lever to lower car insurance in Australia?", answer: "There isn't one universal answer, but for most people the biggest single move is comparing at every renewal. Insurer-by-insurer pricing differences typically dwarf the impact of any single setting tweak on a single policy." },
  { question: "Will paying annually instead of monthly really lower my premium?", answer: "Many insurers add a small surcharge for paying monthly — usually a few percent of the annual premium. If you can pay annually without straining cash flow, the saving is real, even if modest." },
  { question: "Does combining home and car insurance with the same insurer always save money?", answer: "Multi-policy discounts can produce a saving, but only if both bundled policies remain competitive on their own. Sometimes the discount disguises a more expensive policy elsewhere in the bundle. Worth pricing each separately first." },
  { question: "Can I lower my premium mid-policy without switching insurers?", answer: "Often yes — by raising your excess, removing optional extras you don't use, or updating circumstances like lower annual kilometres. Some insurers will reprice mid-policy; others will adjust at next renewal. Asking is free." },
  { question: "How often should I shop around to keep premiums down?", answer: "Once a year, around renewal, is the common rhythm. Re-quoting more often can help if your circumstances change — moving house, switching jobs, adding or removing a regular driver." },
  { question: "Will adding a low-mileage declaration lower my car insurance?", answer: "Often yes, particularly if you genuinely drive well below the average annual kilometres for your area. Some insurers offer pay-per-kilometre or low-mileage products that price specifically for this profile." },
];

const CarInsuranceLowerPremiums = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />
        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">How to lower your car insurance in Australia (without losing cover)</h1>
        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">A practical guide to lowering car insurance premiums in Australia by adjusting the things that genuinely move the price — without quietly stripping out cover or relying on tricks that can backfire later.</p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Lowering a car insurance premium is mostly about finding the legitimate levers and pulling them in the right combination. Some adjustments save real money. Others save trivial amounts but add risk. This guide separates the two.</p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">The companion piece to this is our <Link to="/car-insurance/cheap/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">cheap car insurance</Link> page, which focuses on the cheapest-overall question. This page is more about optimisation — how to lower what you currently pay without changing the level of cover.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What does "lowering your premium" actually mean?</h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">There are two flavours people often mix up:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Reducing the price for the same level of cover</strong> — usually by switching insurers, lifting the excess, paying annually, or removing extras you don't use.</li>
          <li><strong>Reducing the level of cover</strong> — moving from comprehensive to third party, or stripping useful inclusions out. Cheaper, but a different product.</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">Both are legitimate. The point is to know which one you're doing.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Key things to understand before you adjust</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Insurer-to-insurer differences are usually larger than setting tweaks.</strong> Comparing properly often beats fine-tuning a single policy.</li>
          <li><strong>Excess is your biggest single setting lever</strong> — see our <Link to="/car-insurance/excess/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">excess explainer</Link>.</li>
          <li><strong>No-claim bonus stacks over time.</strong> Protecting it can be more valuable than chasing a small premium cut. See <Link to="/car-insurance/no-claim-bonus/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">no-claim bonus</Link>.</li>
          <li><strong>Loyalty pricing is a real thing.</strong> Long-tenured customers don't always get the best renewal price.</li>
          <li><strong>Honest disclosure matters.</strong> Saving $100 by under-stating something usually isn't worth the risk of a denied claim later.</li>
          <li><strong>The PDS will tell you what's covered after each adjustment.</strong> Worth a quick read after every change.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">How to lower your car insurance step by step</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Compare at renewal.</strong> The single highest-impact move for most people. Our <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">compare car insurance</Link> page covers the framework.</li>
          <li><strong>Re-quote with a higher excess.</strong> Try $1,000 and $1,500 against your current excess.</li>
          <li><strong>Strip optional extras you genuinely don't use.</strong> Hire car cover is great if you'd actually use it, less so if you wouldn't.</li>
          <li><strong>Pay annually if cash flow allows.</strong> Many insurers add a few percent for monthly payments — covered separately on our <Link to="/car-insurance/pay-monthly/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">pay monthly</Link> page.</li>
          <li><strong>Update circumstance changes.</strong> Lower annual kilometres, off-street parking, or removing a regular driver who no longer drives the car can all push the price down.</li>
          <li><strong>Bundle thoughtfully.</strong> Multi-policy discounts can be worth checking, but only when both policies remain competitive.</li>
          <li><strong>Read the PDS</strong> after each tweak to confirm you haven't unintentionally changed cover.</li>
        </ol>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Common mistakes to avoid when chasing a lower price</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Under-stating annual kilometres or business use</strong> to reduce the premium. Tempting and dangerous.</li>
          <li><strong>Removing useful extras to save trivial amounts.</strong> A $30 saving on hire car cover could become a $500 cost the next time you're off the road.</li>
          <li><strong>Switching insurers for a $40 saving</strong> when the hassle and any switching fees swallow the difference.</li>
          <li><strong>Stacking a high excess on top of multiple optional excesses</strong> without modelling what you'd actually pay at claim time.</li>
          <li><strong>Forgetting to compare again next year.</strong> One round of comparison shopping isn't a permanent saving — pricing models shift.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What affects how much you can realistically lower your premium</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Driver age and experience.</strong> Less room to move at very young or very old ends of the curve.</li>
          <li><strong>Recent claims.</strong> A recent at-fault claim limits how much premium relief is available short-term.</li>
          <li><strong>Vehicle.</strong> A change of car can sometimes do more than any single setting tweak.</li>
          <li><strong>Location.</strong> Postcode-level claim history is largely fixed unless you move.</li>
          <li><strong>Claims-free time.</strong> Building or protecting a no-claim bonus pays off year on year.</li>
          <li><strong>Insurer mix.</strong> Some insurers price aggressively for some profiles and not others. The <Link to="/car-insurance/best/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">best car insurance</Link> page covers how to think about which insurer may suit which driver.</li>
        </ul>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">Compare your options</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">Most premium savings start with a clean comparison and end with a couple of deliberate tweaks. The pages below cover both sides.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Get car insurance quotes</Link>
            <Link to="/car-insurance/cheap/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Cheap car insurance</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceLowerPremiums;

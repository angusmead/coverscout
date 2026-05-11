import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/no-claim-bonus/";

const faqs = [
  { question: "What is a no-claim bonus on car insurance in Australia?", answer: "A no-claim bonus (sometimes called a no-claim discount or rating) is a discount that builds up over consecutive years without an at-fault claim. Most insurers cap the maximum bonus at a particular rating level (often 'rating 1' or similar), reached after several claim-free years." },
  { question: "Will I lose my no-claim bonus if a not-at-fault driver hits me?", answer: "Generally not, provided the at-fault driver can be identified. If they can't, some insurers may treat the claim differently. The PDS sets out exactly how each insurer handles not-at-fault claims and identification." },
  { question: "How does no-claim bonus protection work?", answer: "No-claim bonus protection (sometimes called rating protection) is an optional extra that lets you make a small number of at-fault claims within a defined period without losing your accumulated bonus. The exact rules, number of claims, time window, premium impact, vary by insurer." },
  { question: "Can I transfer my no-claim bonus to a new car insurer?", answer: "Most Australian insurers will recognise a no-claim bonus you've built up elsewhere, though some may need to verify your claims history. Before switching, ask how the new insurer treats transferred bonuses." },
  { question: "Does my no-claim bonus follow me if I switch cars?", answer: "Yes, the bonus is generally tied to you as the policyholder, not the specific vehicle. Selling your car and insuring a new one with the same insurer typically preserves the rating." },
  { question: "How long does it take to build the maximum no-claim discount?", answer: "Most insurers reach their top rating after around 5 to 7 consecutive claim-free years, though the exact ladder varies. Some insurers offer accelerated options or recognise driving history with another insurer toward the rating." },
];

const CarInsuranceNoClaimBonus = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />
        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">Car insurance no-claim bonus in Australia: how it works</h1>
        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">A clear guide to the no-claim bonus on Australian car insurance, how the discount builds, what triggers a reset, how protection works, and what to weigh when switching insurers.</p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">The no-claim bonus is one of the more valuable parts of an Australian car insurance policy, and one of the most misunderstood. The basic idea is simple: stay claim-free, pay less. The fine print is where the differences live.</p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">If you're newer to car insurance generally, the <Link to="/car-insurance/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance hub</Link> covers the fundamentals first.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What is a no-claim bonus?</h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">A no-claim bonus is a discount applied to your premium based on how long you've gone without an at-fault claim. Most Australian insurers use a rating ladder: the more claim-free years you've accumulated, the lower your premium relative to a baseline.</p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">There's no single industry standard. Insurers use different rating scales, different maximum levels, and different rules around what counts as a "claim" for bonus purposes. The PDS sets the rules for any specific insurer.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>It's tied to you, not the car.</strong> Switching cars usually keeps your rating intact (with the same insurer).</li>
          <li><strong>At-fault claims usually trigger a reset</strong>, sometimes back several rating steps, sometimes back to baseline. Different insurers treat this differently.</li>
          <li><strong>Not-at-fault claims often don't affect the bonus</strong> if the at-fault driver can be identified.</li>
          <li><strong>Bonus protection is optional</strong>, usually a small premium add-on that lets you absorb one or two claims within a window without losing your rating.</li>
          <li><strong>Different insurers may not recognise each other's ratings the same way.</strong> Worth confirming when switching.</li>
          <li><strong>The actual saving varies.</strong> A "maximum" no-claim discount on a low base premium can be less impactful than a smaller discount on a high one.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">How to make the no-claim bonus work for you</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Confirm your current rating.</strong> Your renewal documents will state it. If you're unsure, the insurer can confirm in writing.</li>
          <li><strong>Decide whether bonus protection is worth it.</strong> For drivers near the top of the ladder, it often is. For newer drivers still building, less so.</li>
          <li><strong>Think twice about lodging small at-fault claims.</strong> Sometimes paying for a minor repair out of pocket preserves a more valuable discount.</li>
          <li><strong>When switching insurers, ask explicitly</strong> how the new insurer treats your transferred rating. Some accept it directly; some need a claims history letter.</li>
          <li><strong>Re-quote with and without bonus protection</strong> to see the price impact.</li>
          <li><strong>Read the PDS section on rating</strong> for any policy you're considering.</li>
        </ol>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">For broader comparison framing, see our <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">compare car insurance</Link> page.</p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Lodging a small claim that costs your no-claim bonus</strong> when you'd have paid less by absorbing the repair yourself.</li>
          <li><strong>Assuming the bonus transfers automatically.</strong> Sometimes it does, sometimes it requires evidence.</li>
          <li><strong>Treating bonus protection as an automatic must-buy.</strong> Worth modelling against the likely premium impact.</li>
          <li><strong>Letting a policy lapse</strong> for too long, some insurers have rules about maximum gaps between policies.</li>
          <li><strong>Not asking the insurer about a borderline claim</strong> before lodging it.</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">What affects the value of your no-claim bonus</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-[16px] leading-[1.65] text-foreground/85">
          <li><strong>Years of claim-free history.</strong> The main input.</li>
          <li><strong>The base premium it's applied to.</strong> A 50% discount on a $2,000 premium is worth more than the same discount on $1,000.</li>
          <li><strong>How the insurer counts not-at-fault and uninsured-other-driver claims.</strong> Different rules can produce different outcomes for the same accident.</li>
          <li><strong>Whether you have bonus protection.</strong> Protection is a hedge, not free money.</li>
          <li><strong>How the insurer treats transferred ratings.</strong> Especially relevant when shopping around.</li>
          <li><strong>Recent driving history beyond claims.</strong> Demerits and infringements can affect overall pricing even if the bonus itself is intact.</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">For a wider view of premium-shaping factors, see <Link to="/car-insurance/cost/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">car insurance cost</Link>.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mb-3">Compare your options</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">Comparing matched quotes, with and without bonus protection, is the simplest way to see how each insurer values your existing rating.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Get car insurance quotes</Link>
            <Link to="/car-insurance/lower-premiums/" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition">Lower your premium</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default CarInsuranceNoClaimBonus;

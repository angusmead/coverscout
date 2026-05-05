import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/excess/";

const faqs = [
  { question: "What is a car insurance excess and how does it work?", answer: "An excess is the amount you contribute toward a claim before the insurer pays the rest. If your excess is $700 and the repair bill is $4,000, you generally pay the first $700 and the insurer covers the remaining $3,300, subject to the policy terms." },
  { question: "Can I have a $0 excess on car insurance in Australia?", answer: "A handful of insurers offer no-excess options or let you buy down the excess to zero, but it usually costs more in premium. Whether it's worth it depends on your appetite for predictable costs vs lower ongoing pricing." },
  { question: "Are there extra excesses I might pay even with comprehensive cover?", answer: "Yes. Common additional excesses include an age-based excess (often for drivers under 25), an inexperienced driver excess (based on years on a full licence), and sometimes a specific claim-type excess for things like fire or theft. The PDS lists them." },
  { question: "Will my excess be refunded if the other driver was at fault?", answer: "Many insurers waive or refund the excess on a not-at-fault claim, provided the at-fault driver can be identified. Conditions vary — the policy might require their full name, address, and registration. The PDS will define what counts." },
  { question: "How does choosing a higher excess change my premium?", answer: "A higher excess generally lowers the premium, but the saving usually flattens at higher excess levels. Re-quoting at $500, $1,000, and $1,500 is the simplest way to see your insurer's curve." },
  { question: "Do I have to pay the excess upfront or after the claim?", answer: "It varies. Some insurers collect the excess before repairs begin or before paying out a settlement. Others deduct it from the final claim payment. The PDS or your insurer's claims guide will spell out the timing." },
];

const CarInsuranceExcess = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Car insurance excess explained: how it works in Australia</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">A plain-English guide to car insurance excess in Australia — what it is, the different types, how it interacts with your premium, and what to weigh when choosing yours.</p>

        <p className="text-base leading-relaxed mb-5">Excess is one of those words that gets glossed over until you're actually claiming. It's also one of the most useful levers you have on your premium — provided you understand all the moving pieces. This guide unpacks the lot.</p>
        <p className="text-base leading-relaxed mb-5">If you're newer to car insurance generally, the <Link to="/car-insurance/" className="text-primary hover:underline">car insurance hub</Link> covers the surrounding basics first.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What is car insurance excess?</h2>
        <p className="text-base leading-relaxed mb-5">An excess is the amount you contribute toward each claim before the insurer pays the rest. It's set at policy start and it usually applies to most claim types, with exceptions and additions spelled out in the PDS.</p>
        <p className="text-base leading-relaxed mb-5">Excess does two jobs at once. It reduces the cost of small claims for the insurer, which keeps the underlying premium lower than it would otherwise be. And it gives you, the policyholder, a financial nudge to think twice before lodging a tiny claim.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Key types of excess to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Standard (basic) excess</strong> — the headline excess on the policy. You usually choose this at quote time.</li>
          <li><strong>Age-based excess</strong> — applied when the driver at the time of the claim was under a certain age (commonly 25). Sits on top of the standard excess.</li>
          <li><strong>Inexperienced driver excess</strong> — applied when the driver hasn't held a full licence for long enough. Can apply to older first-time drivers too.</li>
          <li><strong>Unlisted driver excess</strong> — applied when someone not listed on the policy was driving.</li>
          <li><strong>Specific event excess</strong> — some policies apply an extra excess for events like theft, hail, or first claim within a year.</li>
          <li><strong>Voluntary excess</strong> — an extra amount you choose to take on in exchange for a lower premium.</li>
        </ul>
        <p className="text-base leading-relaxed mb-5">A single claim can attract more than one of these at once. The PDS sets the rules.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">How to choose your excess level</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Re-quote at multiple excess levels.</strong> A common pattern is $500, $1,000, $1,500. This shows the price sensitivity for your specific situation.</li>
          <li><strong>Check the saving curve.</strong> If lifting the excess from $500 to $1,500 only saves $80 a year, the maths may not stack up against the higher out-of-pocket at claim time.</li>
          <li><strong>Stress-test against your finances.</strong> Could you comfortably pay the higher excess if you needed to claim tomorrow? If not, that's a real constraint.</li>
          <li><strong>Account for additional excesses.</strong> A $500 standard excess can become $1,500 with an age-based excess on top.</li>
          <li><strong>Compare across insurers.</strong> Different insurers price excess steps differently. The <Link to="/car-insurance/compare/" className="text-primary hover:underline">compare car insurance</Link> page covers the matched-input approach.</li>
        </ol>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Picking the lowest excess by default.</strong> Often inflates the premium for years between claims you may never make.</li>
          <li><strong>Picking the highest excess to chase savings</strong> when you couldn't realistically pay it.</li>
          <li><strong>Forgetting the layered excesses.</strong> An $800 excess can quickly become $2,000+ for a young driver claim.</li>
          <li><strong>Assuming not-at-fault means no excess.</strong> Some policies still charge it upfront and refund later, only if the other driver can be identified.</li>
          <li><strong>Not reading the excess section of the PDS.</strong> The cleanest way to see exactly which excesses apply to which claim types.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What affects which excess may suit you</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Cash buffer.</strong> A higher excess only saves money if you can comfortably pay it.</li>
          <li><strong>Driving environment.</strong> Heavy commuting, lots of urban driving, or higher-risk parking may make smaller claims more likely.</li>
          <li><strong>Driver mix on the policy.</strong> Younger or less experienced drivers add layered excesses.</li>
          <li><strong>Claim history.</strong> Recent claims often nudge people toward keeping the standard excess accessible.</li>
          <li><strong>Premium sensitivity.</strong> If the saving curve is steep, lifting the excess pays off; if flat, it doesn't.</li>
        </ul>
        <p className="text-base leading-relaxed mb-5">For more on lowering the premium without taking on too much excess risk, see <Link to="/car-insurance/lower-premiums/" className="text-primary hover:underline">how to lower your car insurance</Link> and our broader <Link to="/guides/insurance-excess-explained/" className="text-primary hover:underline">excess explainer</Link>.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">Compare your options</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">Re-quoting at multiple excess levels is the easiest way to see how each insurer prices the trade-off. The pages below cover the comparison framework and what affects the underlying price.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/cost/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">What affects cost</Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Get car insurance quotes</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceExcess;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/young-drivers/";

const faqs = [
  { question: "Why do young drivers pay so much more for car insurance in Australia?", answer: "Insurers price largely on claims data. Drivers under 25 are statistically more likely to be involved in an accident, and the average claim value tends to be higher in this group too. Less experience also generally means a thinner driving record for the insurer to lean on, which adds to the perceived risk." },
  { question: "At what age does car insurance typically get cheaper in Australia?", answer: "Premiums often start to ease in the mid-twenties and tend to flatten out around the early thirties for most drivers, provided the driving record stays clean. The shift isn't sudden — it's gradual as both age and claims-free history accumulate." },
  { question: "Is it cheaper for a young driver to be a named driver on a parent's policy?", answer: "It can be, particularly if the young driver isn't the main user of the car. But naming someone as the regular driver when they're not, just to lower the premium, is a form of misrepresentation often called 'fronting' — it can void cover at claim time. The PDS will usually define how the insurer treats this." },
  { question: "Do telematics or 'black box' policies actually save young drivers money?", answer: "Telematics policies can lower premiums for drivers who score well on metrics like braking, cornering, and time of day. They don't suit everyone — late-night drivers or those who do a lot of highway driving may not benefit as much. Comparing the upfront discount with how the ongoing rating works is worth doing." },
  { question: "Will completing a defensive driving course lower my car insurance premium?", answer: "Some insurers offer modest discounts for accredited defensive driving courses for younger drivers, but it's not universal. Worth asking before paying for a course on the assumption it will reduce your premium." },
  { question: "What happens to my premium when I move from a P-plater to a full licence?", answer: "Most insurers reprice at renewal once you hold a full licence. The reduction can be significant if your record is clean, but it's not automatic mid-policy — let the insurer know and ask for a re-quote." },
];

const CarInsuranceYoungDrivers = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Car insurance for young drivers in Australia</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">A practical guide to car insurance for drivers under 25 in Australia — why premiums sit higher, the levers that may bring them down, and how to compare policies properly when you're new behind the wheel.</p>

        <p className="text-base leading-relaxed mb-5">Anyone who has shopped car insurance in their early twenties has probably had the same experience: the quote feels disproportionately high, and the difference between insurers seems even bigger than usual. There are real reasons for that, and there are real things you can do about it.</p>
        <p className="text-base leading-relaxed mb-5">This guide walks through both. If you're newer to the topic in general, the <Link to="/car-insurance/" className="text-primary hover:underline">car insurance hub</Link> covers the underlying basics first.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What is "young driver" car insurance?</h2>
        <p className="text-base leading-relaxed mb-5">There's no separate product called young driver insurance in Australia. Instead, most insurers price standard policies (third party, third party fire and theft, or comprehensive) higher when the regular driver is under 25, or charge an additional age-based excess at claim time when an under-25 was driving.</p>
        <p className="text-base leading-relaxed mb-5">A handful of insurers run dedicated brands aimed at younger drivers — usually with telematics-based pricing or particular policy features. Whether they end up cheaper than a mainstream insurer's quote depends on the individual.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Age-based excesses</strong> — many policies layer an extra excess on top when an under-25 (sometimes under-21 or under-30) was driving at the time of the claim. This sits alongside the standard excess.</li>
          <li><strong>Inexperienced driver excess</strong> — applied based on years held on a full licence, not age. A 30-year-old who just got their licence may also pay this.</li>
          <li><strong>Listed vs unlisted drivers</strong> — most policies require regular drivers to be listed. Letting an unlisted under-25 drive can invalidate cover.</li>
          <li><strong>Telematics options</strong> — some insurers reward demonstrated safe driving via an app or device. Trade-off is privacy and the discipline of being monitored.</li>
          <li><strong>The car matters more than at any other age.</strong> Repair cost, theft frequency, and engine size all weigh heavily.</li>
          <li><strong>The PDS and TMD</strong> — worth reading. See our <Link to="/guides/how-to-read-a-pds/" className="text-primary hover:underline">how to read a PDS</Link> guide for which sections to focus on.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">How to compare car insurance as a young driver</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Decide on cover type first.</strong> If your car is older and worth less than a few thousand dollars, a third party policy may be a fair fit. If it's newer or financed, comprehensive often makes more sense.</li>
          <li><strong>Get matched quotes</strong> from at least three insurers — including one that runs a telematics product. The <Link to="/car-insurance/quotes/" className="text-primary hover:underline">car insurance quotes</Link> page lists what to keep constant across each one.</li>
          <li><strong>Test different excess levels.</strong> Lifting the excess from $500 to $1,500 typically lowers the premium. Worth weighing against your ability to absorb the higher excess at claim time.</li>
          <li><strong>Check the age-based and inexperienced driver excesses</strong> for each policy. They can swing the real cost of a claim by thousands.</li>
          <li><strong>Read the PDS and TMD</strong> on your shortlist. Pay attention to driver restrictions and exclusions.</li>
        </ol>
        <p className="text-base leading-relaxed mb-5">Our <Link to="/car-insurance/compare/" className="text-primary hover:underline">compare car insurance</Link> page covers the broader framework if you want a refresher.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Listing a parent as the main driver to drop the price ('fronting').</strong> Often invalidates a claim if the insurer works out the car is mainly used by someone else.</li>
          <li><strong>Going with the cheapest policy without checking what's excluded</strong> — covered in detail on our <Link to="/car-insurance/cheap/" className="text-primary hover:underline">cheap car insurance</Link> page.</li>
          <li><strong>Picking a high-performance or modified car</strong> without checking the impact on premiums first.</li>
          <li><strong>Not declaring all regular drivers</strong> — partner, sibling, housemate.</li>
          <li><strong>Forgetting to update the insurer when you move from P-plates to a full licence.</strong> Some insurers will reprice immediately rather than at next renewal.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What affects how much a young driver pays</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Age and licence type.</strong> P-plate vs full licence is one of the biggest single factors.</li>
          <li><strong>The vehicle.</strong> A small, common, easy-to-repair car will almost always quote cheaper than a sportier or harder-to-source one.</li>
          <li><strong>Where you park.</strong> Off-street parking and a lower-claim postcode help.</li>
          <li><strong>Claims and infringement history.</strong> Even minor incidents stay on the insurer's view of you for several years.</li>
          <li><strong>Excess level chosen.</strong> Higher excess equals lower premium, within limits.</li>
          <li><strong>Whether telematics is in play.</strong> Real benefit depends on driving style.</li>
        </ul>
        <p className="text-base leading-relaxed mb-5">The <Link to="/car-insurance/cost/" className="text-primary hover:underline">car insurance cost</Link> page covers the wider set of factors that affect any driver's premium.</p>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">Compare your options</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">Young driver premiums move quickly with small changes — vehicle, excess, telematics. Comparing matched quotes is the fastest way to see what your real range looks like.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Get car insurance quotes</Link>
            <Link to="/car-insurance/cheap/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Lowering your premium</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceYoungDrivers;

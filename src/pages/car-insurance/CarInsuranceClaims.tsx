import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/claims/";

const faqs = [
  { question: "What should I do immediately after a car accident in Australia?", answer: "Make sure everyone is safe and call emergency services if anyone is injured. Move out of traffic if it's safe to do so. Exchange names, contact details, registration numbers and insurer details with other drivers. Take photos of the scene and damage. Then contact your insurer as soon as practical." },
  { question: "How long does a typical car insurance claim take in Australia?", answer: "It varies. Straightforward claims with no liability dispute can be resolved in a couple of weeks. Claims involving multiple parties, complex damage, or write-off assessments can take months. Most insurers publish indicative timeframes on their claims pages." },
  { question: "Will my premium go up after I make a claim?", answer: "An at-fault claim usually leads to a higher premium at next renewal and may affect your no-claim bonus. A not-at-fault claim with an identifiable other driver often doesn't have a meaningful premium impact. The PDS will spell out how each insurer treats this." },
  { question: "What is a 'not-at-fault' claim and how is it different?", answer: "A not-at-fault claim is one where someone else was responsible for the damage. Many insurers waive the excess and protect the no-claim bonus on not-at-fault claims, provided the other driver can be identified. If they can't, the claim may be treated differently." },
  { question: "Can I choose my own repairer when claiming?", answer: "Some policies include choice of repairer; others use the insurer's preferred repairer network. Choice of repairer is sometimes an optional extra. The PDS will state which applies on your policy." },
  { question: "What happens if I disagree with my insurer's claim decision?", answer: "Insurers in Australia have an internal complaints process you can use first. If you're still not satisfied, you can take the matter to the Australian Financial Complaints Authority (AFCA), which provides a free dispute resolution service. The insurer must tell you about your rights." },
];

const CarInsuranceClaims = () => {
  const meta = getRouteMeta(PATH)!;
  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalPath={PATH} jsonLd={breadcrumbSchema(meta.breadcrumbs)} />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Car insurance claims process in Australia: a step-by-step guide</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">A clear, practical walk-through of the car insurance claims process in Australia — what to do at the scene, how the process unfolds with your insurer, and what to expect along the way.</p>

        <p className="text-base leading-relaxed mb-5">The claims process is the part of car insurance most people only think about when they have to. Understanding the basic shape of it ahead of time tends to make the experience much less stressful when something does go wrong.</p>
        <p className="text-base leading-relaxed mb-5">If you're new to car insurance generally, the <Link to="/car-insurance/" className="text-primary hover:underline">car insurance hub</Link> covers the surrounding fundamentals.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What is a car insurance claim?</h2>
        <p className="text-base leading-relaxed mb-5">A claim is your formal request to the insurer to honour the cover under your policy after an event — typically an accident, theft, fire, or weather damage. The insurer assesses what's covered under the PDS, what excess applies, and what they'll pay out.</p>
        <p className="text-base leading-relaxed mb-5">There are two broad shapes a claim can take in practice. A <strong>repair claim</strong> covers fixing the damage, often via the insurer's repairer network or your own. A <strong>total loss / write-off claim</strong> applies when repair is uneconomic, and the insurer pays out the agreed or market value of the car.</p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Key things to understand</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Report quickly.</strong> Most insurers want to be told as soon as practical. Some require notification within a defined window.</li>
          <li><strong>Excess applies.</strong> You'll generally pay an excess on each claim — covered in detail on our <Link to="/car-insurance/excess/" className="text-primary hover:underline">excess explainer</Link>.</li>
          <li><strong>Photos and details matter.</strong> Insurers usually want photos of the damage, the scene, the other vehicle, and any visible context.</li>
          <li><strong>Other party identification matters.</strong> Whether a not-at-fault claim affects your excess or no-claim bonus often hinges on identifying the other driver.</li>
          <li><strong>Repairs follow assessment.</strong> The insurer typically assesses damage before authorising repairs.</li>
          <li><strong>The PDS sets the rules.</strong> Including timeframes, exclusions, and complaints processes.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">How a typical claim plays out, step by step</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>At the scene</strong> — check for injuries, call emergency services if needed, exchange details with other drivers, photograph everything, note witnesses if any.</li>
          <li><strong>Lodge the claim</strong> with your insurer as soon as practical — usually online, by phone, or in-app. You'll be asked for the basic facts and supporting photos.</li>
          <li><strong>Pay the excess</strong> — timing varies by insurer (some collect upfront, others deduct from the settlement).</li>
          <li><strong>Damage assessment</strong> — the insurer arranges for an assessor or authorised repairer to inspect the vehicle.</li>
          <li><strong>Repair or write-off decision</strong> — based on the assessment, the insurer either authorises repair or declares the car a total loss and offers a payout.</li>
          <li><strong>Repairs or settlement</strong> — repairs proceed at the chosen repairer, or the insurer pays the agreed/market value.</li>
          <li><strong>Claim closure</strong> — once works are complete or the settlement is paid, the insurer closes the claim and updates your record.</li>
        </ol>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">Common mistakes to avoid during a claim</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>Admitting fault at the scene.</strong> Stick to facts — fault is for the insurers to determine.</li>
          <li><strong>Skipping photos.</strong> Damage and context photos resolve a lot of disputes quickly.</li>
          <li><strong>Forgetting the other driver's details.</strong> Even a partial set (registration, vehicle make and model) helps.</li>
          <li><strong>Authorising repairs before the insurer assesses.</strong> May affect what the insurer covers.</li>
          <li><strong>Not asking about cover for towing or storage.</strong> Some policies include limited cover for these.</li>
          <li><strong>Lodging a small claim that costs your no-claim bonus.</strong> Worth modelling first — see our <Link to="/car-insurance/no-claim-bonus/" className="text-primary hover:underline">no-claim bonus</Link> page.</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">What affects how a claim plays out</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3 leading-relaxed">
          <li><strong>The policy you have.</strong> Comprehensive, third party, and CTP cover different events. The <Link to="/car-insurance/comprehensive/" className="text-primary hover:underline">comprehensive</Link> and <Link to="/car-insurance/third-party/" className="text-primary hover:underline">third party</Link> pages cover what's typically included.</li>
          <li><strong>Whether you were at fault.</strong> Affects excess, no-claim bonus, and recovery options.</li>
          <li><strong>Whether the other driver is identifiable.</strong> Determines how some excess and bonus rules apply.</li>
          <li><strong>The repairer.</strong> Choice of repairer vs network repairer changes the experience.</li>
          <li><strong>Sum insured method.</strong> Agreed value provides certainty at write-off; market value uses an at-the-time valuation.</li>
          <li><strong>Workload at the insurer.</strong> Major weather events can produce backlogs.</li>
        </ul>

        <FAQAccordion items={faqs} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">Compare your options</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">Insurers differ meaningfully in how they handle claims. Comparing matched quotes — and reading consumer reviews of the claims experience — gives a fuller picture than comparing on price alone.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/car-insurance/compare/" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">Compare car insurance<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link to="/car-insurance/best/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Best car insurance</Link>
            <Link to="/car-insurance/quotes/" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition">Get car insurance quotes</Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceClaims;

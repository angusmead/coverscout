import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/car-insurance/compare/qld/";

const faqs = [
  {
    question: "Is car insurance more expensive in Queensland than other states?",
    answer:
      "Queensland sits broadly in the middle of the national pack, but premiums vary widely within the state — South East Queensland (Brisbane, Gold Coast, Sunshine Coast) typically prices higher than regional and far-north postcodes because of vehicle density, claim frequency and severe weather exposure. Cyclone-prone northern postcodes can also see higher premiums for storm-related cover.",
  },
  {
    question: "How does CTP work in Queensland?",
    answer:
      "Compulsory Third Party (CTP) in Queensland is bundled into your vehicle registration — you don't buy a separate green slip like in NSW. You can choose your CTP insurer at registration time from a small panel licensed by the Motor Accident Insurance Commission (MAIC). Comprehensive, third party fire and theft, and third party property are all separate optional policies you arrange independently.",
  },
  {
    question: "Which insurers operate in Queensland?",
    answer:
      "Most major Australian car insurers cover Queensland, including RACQ (the state's motoring club, with strong QLD presence), Suncorp (Brisbane-headquartered), AAMI, Allianz, Budget Direct, Bingle, GIO, NRMA Insurance, QBE, Youi, Coles and Woolworths. RACQ in particular is often missing from third-party comparison panels but worth including in any QLD shortlist.",
  },
  {
    question: "Why are northern Queensland premiums often higher for cyclone cover?",
    answer:
      "Postcodes north of roughly the Tropic of Capricorn carry meaningful cyclone and severe-weather exposure, and insurers price accordingly. Some insurers cap or restrict new comprehensive policies in cyclone-exposed regions, which is why the comparison field looks narrower the further north you go. Worth checking storm and flood inclusions specifically in the PDS.",
  },
  {
    question: "How do I compare car insurance in Queensland properly?",
    answer:
      "Set your cover type, excess and optional extras consistently before quoting, then quote three to five insurers using identical inputs. Include RACQ on the list — it's often missing from comparison panels. Check storm, hail and flood inclusions explicitly, especially for South East Queensland and northern postcodes. CTP is bundled into rego, so don't double-count it.",
  },
  {
    question: "Does RACQ offer car insurance to non-members in Queensland?",
    answer:
      "RACQ Insurance is available to most Queensland residents, though some discounts and benefits are tied to RACQ membership. The membership cost is worth weighing against the discount and any other benefits (roadside assistance, member pricing) when comparing the all-in cost against non-member insurers.",
  },
];

const CarInsuranceCompareQLD = () => {
  const meta = getRouteMeta(PATH)!;
  const faqItems = faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={PATH}
        jsonLd={[breadcrumbSchema(meta.breadcrumbs), faqSchema(faqItems)]}
      />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          Compare car insurance in Queensland
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          A Queensland-specific guide to comparing car insurance — the role of RACQ, how CTP fits
          into vehicle registration, why far-north postcodes price differently, and a routine for
          building a shortlist that holds up.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What makes Queensland different
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Queensland has a few features worth understanding before you start comparing:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>CTP is bundled into vehicle registration.</strong> Unlike NSW, you don't buy a
            separate green slip — the CTP component is part of your rego, with the choice of CTP
            insurer made at registration time from a panel licensed by MAIC.
          </li>
          <li>
            <strong>RACQ has strong state presence.</strong> The Royal Automobile Club of Queensland
            is the state's motoring club and a significant insurer; it's worth including in any QLD
            shortlist even though it's typically off-panel for third-party comparison sites.
          </li>
          <li>
            <strong>Cyclone exposure shapes the northern market.</strong> Postcodes north of roughly
            the Tropic of Capricorn carry meaningful cyclone and storm risk, and insurer appetite
            varies. Some insurers limit new comprehensive policies in cyclone-prone areas.
          </li>
          <li>
            <strong>South East Queensland is dense and growing fast.</strong> Brisbane, the Gold
            Coast and Sunshine Coast see higher claim frequency than regional QLD, which feeds
            through into postcode-level pricing.
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Insurers commonly compared in QLD
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Queensland's car insurance market is well-served. A reasonable shortlist usually mixes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>QLD-rooted brands</strong> — RACQ, Suncorp (headquartered in Brisbane)
          </li>
          <li>
            <strong>Mainstream insurers</strong> — AAMI, Allianz, GIO, NRMA Insurance, QBE
          </li>
          <li>
            <strong>Budget-direct brands</strong> — Bingle, Budget Direct, Youi (also
            QLD-headquartered)
          </li>
          <li>
            <strong>Retail-branded</strong> — Coles Car Insurance, Woolworths Car Insurance
            (underwritten by partner insurers, disclosed in the PDS)
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-5">
          Plain-English overviews of each are in our{" "}
          <Link to="/reviews/" className="text-primary hover:underline">
            provider directory
          </Link>
          .
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          CTP in Queensland: bundled, but you choose the insurer
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Queensland CTP only covers personal injury claims to other people in an accident — it
          doesn't cover any damage to vehicles or property. The cost is folded into your annual
          registration, but the choice of CTP insurer is yours from a small panel licensed by the
          Motor Accident Insurance Commission. The price difference between licensed CTP insurers
          in QLD is usually small.
        </p>
        <p className="text-base leading-relaxed mb-5">
          Comprehensive, third party fire and theft, and third party property are all separate
          policies on top of CTP, and the comparison work below relates to those.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What shapes your QLD premium
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Beyond standard rating factors, three things tend to swing Queensland quotes the most:
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Postcode</strong> — South East Queensland tends to price higher than regional
            QLD, but cyclone-exposed northern postcodes can also see meaningfully different premiums
            for the same vehicle.
          </li>
          <li>
            <strong>Storm, hail and flood exposure</strong> — Brisbane and the Gold Coast see
            regular severe storms and hail; far-north Queensland sees cyclones. Insurers price both
            into the premium.
          </li>
          <li>
            <strong>Vehicle theft profile</strong> — claim history for specific makes/models in QLD
            postcodes feeds into the rating, and certain models see materially higher premiums.
          </li>
        </ol>
        <p className="text-base leading-relaxed mb-5">
          For the broader picture of what shapes any quote, see{" "}
          <Link
            to="/car-insurance/how-much-is-car-insurance/"
            className="text-primary hover:underline"
          >
            how much car insurance costs in Australia
          </Link>
          .
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          A QLD comparison routine
        </h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3 leading-relaxed">
          <li>
            Decide your cover type and excess up front. Use the{" "}
            <Link to="/car-insurance/excess/" className="text-primary hover:underline">
              excess explainer
            </Link>{" "}
            if you're undecided.
          </li>
          <li>
            Quote three to five insurers using identical inputs. Include RACQ — it's often missing
            from comparison panels but is a major QLD player.
          </li>
          <li>
            Check storm, hail, flood and (for northern QLD) cyclone inclusions explicitly in each
            PDS — coverage varies more than headline price would suggest.
          </li>
          <li>
            For RACQ, factor membership cost into the comparison if you're not already a member.
          </li>
          <li>
            Read the PDS for the two or three you're most likely to choose, focusing on excess
            structure, choice of repairer and any age/at-fault excesses.
          </li>
        </ol>
        <p className="text-base leading-relaxed mb-5">
          The general framework lives on our{" "}
          <Link to="/car-insurance/compare/" className="text-primary hover:underline">
            comparing car insurance
          </Link>{" "}
          page.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Common QLD pitfalls
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          <li>
            Assuming flood and storm cover is automatic — it isn't always, especially for older
            policies or restricted regions
          </li>
          <li>
            Comparing only on-panel insurers and missing RACQ
          </li>
          <li>
            Forgetting that cyclone-exposed northern postcodes may have a narrower insurer field
            and different exclusions
          </li>
          <li>
            Counting the CTP component twice — it's already bundled into your QLD registration
          </li>
        </ul>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Build your QLD shortlist
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Browse plain-English overviews of fifteen Australian car insurers — including RACQ,
            Suncorp, Youi and other QLD players — then quote a handful direct using identical
            inputs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Browse provider reviews
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/compare/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Comparison framework
            </Link>
            <Link
              to="/car-insurance/quotes/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              How quotes work
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default CarInsuranceCompareQLD;

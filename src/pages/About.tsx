import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/about/";

const About = () => {
  const meta = getRouteMeta(PATH)!;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={PATH}
        jsonLd={breadcrumbSchema(meta.breadcrumbs)}
      />
      <article className="container py-14 md:py-20 max-w-[760px]">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-8" />

        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">
          About CoverScout
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          CoverScout is a plain-English Australian insurance comparison and education site. We help
          people understand their cover options without the jargon, the pressure, or the
          made-up "best of" lists.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What we do
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          We write plain-English guides, neutral provider overviews, and head-to-head comparisons
          covering Australian insurance. The current focus is car insurance, including 15
          provider reviews and 10 head-to-head comparisons across mainstream, budget and
          specialist insurers. Other categories (home, life, health, travel, business) are next on
          the roadmap.
        </p>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Every page is written to help you understand the question, not to push you toward a
          specific product. We use language like "may suit" and "worth comparing" rather than
          "best" or "winner" because the right insurance for you depends on factors only you can
          weigh.
        </p>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What we're not
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>We're not a broker.</strong> We don't sell policies or arrange cover for you.
          </li>
          <li>
            <strong>We're not a quote engine.</strong> We don't take your details and return
            personalised quotes. (You go to each insurer for that.)
          </li>
          <li>
            <strong>We're not a financial adviser.</strong> Nothing on the site takes your personal
            circumstances into account. Always read the Product Disclosure Statement (PDS) and
            Target Market Determination (TMD) before deciding on any policy.
          </li>
          <li>
            <strong>We don't run "best of" rankings.</strong> Every insurer has trade-offs. We
            describe them honestly and let you decide.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Our editorial principles
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          <li>
            <strong>Neutral and evergreen.</strong> We avoid specific premiums, awards or
            year-bound claim statistics that go stale. The PDS for each policy is the source of
            truth for what's covered and at what price.
          </li>
          <li>
            <strong>No fake stats or invented ratings.</strong> If we don't have verified data, we
            don't make it up.
          </li>
          <li>
            <strong>Compliance words matter.</strong> We use "may suit", "worth comparing" and
            "depending on your needs", never "best", "cheapest" or "guaranteed".
          </li>
          <li>
            <strong>Affiliate links are disclosed.</strong> See{" "}
            <Link to="/how-we-make-money/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              how we make money
            </Link>{" "}
            for the full picture.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Get in touch
        </h2>
        <p className="text-base leading-relaxed mb-10">
          The fastest way to reach us is{" "}
          <a href="mailto:hello@coverscout.com.au" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            hello@coverscout.com.au
          </a>
          . More on the{" "}
          <Link to="/contact/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            contact page
          </Link>
          .
        </p>

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-extrabold text-2xl tracking-tight mb-3">
            Start exploring
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            Most of the current content lives in the car insurance section. The reviews hub
            covers every provider and comparison we've written.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/car-insurance/"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Car insurance hub
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/reviews/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Provider reviews
            </Link>
            <Link
              to="/car-insurance/compare/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Compare car insurance
            </Link>
          </div>
        </section>
      </article>
    </>
  );
};

export default About;

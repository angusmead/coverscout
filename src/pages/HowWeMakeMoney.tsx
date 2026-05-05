import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/how-we-make-money/";

const HowWeMakeMoney = () => {
  const meta = getRouteMeta(PATH)!;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={PATH}
        jsonLd={breadcrumbSchema(meta.breadcrumbs)}
      />
      <article className="container py-12 md:py-16 max-w-3xl">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          How we make money
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          The honest version, updated as the business changes.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Right now
        </h2>
        <p className="text-base leading-relaxed mb-5">
          CoverScout is currently free to use and doesn't earn revenue from any source. There are
          no active affiliate partnerships, no paid placements, and no advertising on the site.
          You'll see references to "we may receive a commission" in disclosure blocks because
          that's the planned model — but as of today, no commissions are being earned.
        </p>
        <p className="text-base leading-relaxed mb-10">
          Building the content and the audience comes first. Monetisation comes once we have
          something genuinely useful for Australians comparing insurance.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          The planned model
        </h2>
        <p className="text-base leading-relaxed mb-5">
          The intention is to earn commissions from affiliate partnerships with Australian
          insurance providers. When that's live:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-3 leading-relaxed">
          <li>
            <strong>Affiliate links</strong> on the site will pass anonymous tracking parameters
            so partners can attribute traffic to us. If you click through and take out a policy,
            we may receive a referral commission from the insurer.
          </li>
          <li>
            <strong>You don't pay more</strong> when you click an affiliate link. The price you're
            quoted by the insurer is the same price you'd get going to them directly.
          </li>
          <li>
            <strong>Affiliate partners will be disclosed.</strong> When we sign up with one, we'll
            list them here and add a clear disclosure on any page that links to them.
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What this doesn't change
        </h2>
        <p className="text-base leading-relaxed mb-5">
          Affiliate income creates an obvious incentive to push readers toward partners. We're
          aware of that, and we've set the editorial side up to keep it in check:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-3 leading-relaxed">
          <li>
            <strong>Coverage isn't gated by partnerships.</strong> Every meaningful Australian car
            insurance brand is reviewed on this site whether or not they pay us. Brands aren't
            added or excluded based on commercial relationships.
          </li>
          <li>
            <strong>Comparisons don't pick winners.</strong> Our head-to-head pages describe each
            insurer's trade-offs neutrally. We never declare a "winner" or recommend one provider
            over another in a comparison.
          </li>
          <li>
            <strong>No paid placements.</strong> Insurers can't pay to appear higher in lists, get
            a more favourable review, or have negatives removed. Editorial decisions sit with us.
          </li>
          <li>
            <strong>No invented "best of" claims.</strong> We don't run "Best car insurance 2026"
            ranked lists with kickbacks attached. The compliance language we use ("may suit",
            "worth comparing") reflects the genuine answer: it depends.
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          What we don't do
        </h2>
        <ul className="list-disc pl-6 mb-10 space-y-2 leading-relaxed">
          <li>We don't sell or share your personal information. (We don't collect any — see the{" "}
            <Link to="/privacy/" className="text-primary hover:underline">
              privacy policy
            </Link>
            .)
          </li>
          <li>We don't run pop-ups, lead forms, or "we'll call you" buttons</li>
          <li>We don't take sponsored content or branded "guides"</li>
          <li>We don't accept payment to remove negative information about a provider</li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Why disclose all this?
        </h2>
        <p className="text-base leading-relaxed mb-10">
          The Australian comparison space has a poor reputation for hidden incentives. We'd
          rather be upfront about how the model works — and isn't working yet — than have you
          wonder. If we ever change any of the above, this page will be updated.
        </p>

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl tracking-tight mb-3">
            Got a question about this?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            If anything's unclear or you'd like more detail on the commercial side, get in touch.
            We're happy to explain.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Contact us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/about/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              About CoverScout
            </Link>
          </div>
        </section>
      </article>
    </>
  );
};

export default HowWeMakeMoney;

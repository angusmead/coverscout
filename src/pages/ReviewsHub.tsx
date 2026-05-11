import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { ProviderDirectory } from "@/components/insurance/ProviderDirectory";
import { breadcrumbSchema } from "@/lib/schema";
import { PROVIDERS, getProvider } from "@/lib/providers-data";
import { COMPARISONS } from "@/lib/comparisons-data";

const HOME = { name: "Home", url: "/" };
const REVIEWS = { name: "Reviews", url: "/reviews/" };
const breadcrumbs = [HOME, REVIEWS];

const ReviewsHub = () => {
  return (
    <>
      <SEO
        title="Australian Car Insurance Provider Reviews and Comparisons"
        description="Plain-English overviews of 16 Australian car insurance providers and 10 head-to-head comparisons — neutral, evergreen, no fake ratings."
        canonicalPath="/reviews/"
        jsonLd={breadcrumbSchema(breadcrumbs)}
      />
      <article className="container py-14 md:py-20 max-w-5xl">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />

        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">
          Australian car insurance provider reviews
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          Neutral, plain-English overviews of {PROVIDERS.length} Australian car insurance brands —
          what each offers, who it may suit, and how it compares. Use these alongside each insurer's
          PDS as a starting point for your own comparison.
        </p>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Browse by priority</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              to="/reviews/budget-friendly/"
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-sans font-semibold text-[16px] tracking-tight mb-1 group-hover:text-primary transition-colors">
                Budget-friendly
              </div>
              <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
                Insurers that publicly position around price.
              </p>
            </Link>
            <Link
              to="/reviews/balanced/"
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-sans font-semibold text-[16px] tracking-tight mb-1 group-hover:text-primary transition-colors">
                Balanced
              </div>
              <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
                Mid-market mainstream and member-club brands.
              </p>
            </Link>
            <Link
              to="/reviews/broader-cover/"
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-sans font-semibold text-[16px] tracking-tight mb-1 group-hover:text-primary transition-colors">
                Broader cover
              </div>
              <p className="text-[14.5px] text-muted-foreground leading-[1.6]">
                Broader feature sets, branch networks, partner channels.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-10 mb-16">
          <ProviderDirectory />
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-10 mb-3">
          Head-to-head comparisons
        </h2>
        <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
          Side-by-side comparisons covering the most-asked-about pairings. None of these declare a
          winner — the right fit depends on your vehicle, location and what you value in an insurer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {COMPARISONS.map((c) => {
            const a = getProvider(c.slugA);
            const b = getProvider(c.slugB);
            if (!a || !b) return null;
            return (
              <Link
                key={c.path}
                to={c.path}
                className="group flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="font-sans font-semibold text-[16px] tracking-tight group-hover:text-primary transition-colors">
                  {a.name} vs {b.name}
                </span>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
              </Link>
            );
          })}
        </div>

        <section className="mt-12 bg-card border border-border rounded-2xl p-7 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl tracking-tight mb-3">
            Not sure where to start?
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            If you're new to comparing car insurance, the comparison guide walks through what to put
            side by side. The quotes guide covers what insurers ask and how to set up an
            apples-to-apples comparison.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/car-insurance/compare/"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Compare car insurance
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/quotes/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Get car insurance quotes
            </Link>
            <Link
              to="/car-insurance/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Car insurance hub
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

export default ReviewsHub;

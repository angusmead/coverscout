import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { PROVIDERS } from "@/lib/providers-data";
import { COMPARISONS } from "@/lib/comparisons-data";
import { getProvider } from "@/lib/providers-data";

const HOME = { name: "Home", url: "/" };
const REVIEWS = { name: "Reviews", url: "/reviews/" };
const breadcrumbs = [HOME, REVIEWS];

const ReviewsHub = () => {
  const sortedProviders = [...PROVIDERS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <SEO
        title="Australian Car Insurance Provider Reviews and Comparisons"
        description="Plain-English overviews of 15 Australian car insurance providers and 10 head-to-head comparisons — neutral, evergreen, no fake ratings."
        canonicalPath="/reviews/"
        jsonLd={breadcrumbSchema(breadcrumbs)}
      />
      <article className="container py-12 md:py-16 max-w-5xl">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          Australian car insurance provider reviews
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          Neutral, plain-English overviews of {PROVIDERS.length} Australian car insurance brands —
          what each offers, who it may suit, and how it compares. Use these alongside each insurer's
          PDS as a starting point for your own comparison.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-10 mb-6">
          Provider reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {sortedProviders.map((p) => (
            <Link
              key={p.slug}
              to={p.path}
              className="group bg-card border border-border rounded-lg p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-sans font-extrabold text-xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                {p.name}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.lead}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-foreground/70 group-hover:text-primary group-hover:gap-2 transition-all">
                Read review <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-10 mb-3">
          Head-to-head comparisons
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
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
                <span className="font-sans font-extrabold text-base tracking-tight group-hover:text-primary transition-colors">
                  {a.name} vs {b.name}
                </span>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
              </Link>
            );
          })}
        </div>

        <section className="mt-12 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl tracking-tight mb-3">
            Not sure where to start?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            If you're new to comparing car insurance, the comparison guide walks through what to put
            side by side. The quotes guide covers what insurers ask and how to set up an
            apples-to-apples comparison.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/car-insurance/compare/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Compare car insurance
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/car-insurance/quotes/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Get car insurance quotes
            </Link>
            <Link
              to="/car-insurance/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Car insurance hub
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default ReviewsHub;

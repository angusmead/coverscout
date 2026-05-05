import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { ProviderDirectory } from "@/components/insurance/ProviderDirectory";
import { breadcrumbSchema } from "@/lib/schema";
import {
  CATEGORY_LABELS,
  CATEGORY_PATHS,
  getProvidersInCategory,
  type CategoryBucket,
} from "@/lib/provider-directory-data";

type CategoryCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** What this group has in common — sets visitor expectation honestly. */
  whatTheyShare: string;
  /** Link to the matching long-form education article. */
  relatedArticle: { label: string; to: string };
};

const COPY: Record<CategoryBucket, CategoryCopy> = {
  "budget-friendly": {
    metaTitle: "Budget-Friendly Australian Car Insurance Providers",
    metaDescription: "Five Australian car insurers that publicly position around price. Plain-English overviews, key facts and links to each review — neutral, no fake ratings.",
    h1: "Budget-friendly car insurance providers",
    lead: "Five Australian car insurers grouped here because they publicly position themselves around price — through low-cost direct distribution, no-frills product design, or retail-distribution.",
    whatTheyShare:
      "These insurers tend to compete on headline premium and lean toward streamlined product menus. None of this means they're the cheapest for your specific profile — every insurer rates risk against its own model. Worth getting matched quotes from a couple of these alongside at least one mainstream brand to see the spread.",
    relatedArticle: {
      label: "Read: how to think about cheap car insurance",
      to: "/car-insurance/cheap/",
    },
  },
  balanced: {
    metaTitle: "Balanced Australian Car Insurance Providers",
    metaDescription: "Five mid-market Australian car insurers without specific budget or specialist tilt — plain-English overviews and key facts for shoppers wanting a balance of price and features.",
    h1: "Balanced car insurance providers",
    lead: "Five Australian car insurers grouped here because they sit in the mid-market — broad mainstream brands and motoring-club insurers offering balanced cover without specific budget or specialist focus.",
    whatTheyShare:
      "These insurers tend to compete on a mix of price, features and service rather than positioning at either end. Most offer the standard cover ladder (comprehensive, third party fire and theft, third party property) with a moderate optional-extras menu. Worth comparing a couple of these against at least one budget-positioned and one broader-cover brand.",
    relatedArticle: {
      label: "Read: how to compare car insurance properly",
      to: "/car-insurance/compare/",
    },
  },
  "broader-cover": {
    metaTitle: "Broader Cover Australian Car Insurance Providers",
    metaDescription: "Five Australian car insurers offering broader feature sets, branch networks, partner channels or specialist features — plain-English overviews and key facts.",
    h1: "Broader cover car insurance providers",
    lead: "Five Australian car insurers grouped here because they tend to offer broader feature sets — through global insurer breadth, branch networks, broker access, tailored quoting, or specialist features-as-default.",
    whatTheyShare:
      "These insurers position themselves on breadth of cover, channel options or features rather than headline price. Premiums for the equivalent comprehensive policy can sit higher than budget-positioned brands, but the optional-extras menu and service breadth often run wider. Worth comparing a couple of these alongside the comparison page on car insurance.",
    relatedArticle: {
      label: "Read: comprehensive car insurance — what's included",
      to: "/car-insurance/comprehensive/",
    },
  },
};

const HOME = { name: "Home", url: "/" };
const REVIEWS = { name: "Reviews", url: "/reviews/" };

type Props = { category: CategoryBucket };

const ProviderCategoryPage = ({ category }: Props) => {
  const copy = COPY[category];
  const slugs = getProvidersInCategory(category);
  const path = CATEGORY_PATHS[category];
  const breadcrumbs = [
    HOME,
    REVIEWS,
    { name: CATEGORY_LABELS[category], url: path },
  ];

  const otherCategories: CategoryBucket[] = (
    ["budget-friendly", "balanced", "broader-cover"] as CategoryBucket[]
  ).filter((c) => c !== category);

  return (
    <>
      <SEO
        title={copy.metaTitle}
        description={copy.metaDescription}
        canonicalPath={path}
        jsonLd={breadcrumbSchema(breadcrumbs)}
      />
      <article className="container py-12 md:py-16 max-w-5xl">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          {copy.h1}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          {copy.lead}
        </p>

        <div className="bg-card border border-border rounded-lg p-5 mb-10 max-w-3xl">
          <div className="flex items-start gap-3">
            <Info size={18} className="text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-sans font-extrabold text-sm tracking-tight mb-2">
                What this group has in common
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {copy.whatTheyShare}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <ProviderDirectory
            compact
            slugs={slugs}
            heading={`${CATEGORY_LABELS[category]} providers`}
            subheading={`${slugs.length} providers grouped by public positioning. Sorted alphabetically.`}
          />
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-3">
          How we group providers
        </h2>
        <p className="text-base leading-relaxed mb-3 max-w-3xl">
          We've organised the 15 Australian car insurance brands we cover into three editorial
          groups — budget-friendly, balanced and broader cover — based on each insurer's public
          brand positioning. The categorisation reflects how each brand markets itself, not a
          quality judgement.
        </p>
        <p className="text-base leading-relaxed mb-10 max-w-3xl">
          Most large insurers actually offer products across the spectrum. AAMI, NRMA, Allianz and
          others all sell both budget tiers and feature-rich tiers under the same brand. Treat
          these groups as a starting point for which brands to compare alongside each other — not
          as a recommendation.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-3">
          Different priority?
        </h2>
        <p className="text-base leading-relaxed mb-6 max-w-3xl">
          Browse the other groups, or take the comparison tool again to see which direction may
          suit you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {otherCategories.map((c) => (
            <Link
              key={c}
              to={CATEGORY_PATHS[c]}
              className="group flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-sans font-extrabold text-base tracking-tight group-hover:text-primary transition-colors">
                {CATEGORY_LABELS[c]} providers
              </span>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
            </Link>
          ))}
          <Link
            to="/car-insurance/compare/"
            className="group flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="font-sans font-extrabold text-base tracking-tight group-hover:text-primary transition-colors">
              Re-take the comparison tool
            </span>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
          </Link>
        </div>

        <section className="mt-12 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl tracking-tight mb-3">
            Read more
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Background reading on what shapes the trade-offs in this category, plus the full
            provider directory if you'd rather browse all 15 with filters.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={copy.relatedArticle.to}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              {copy.relatedArticle.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/reviews/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              Browse all 15 providers
            </Link>
          </div>
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

export default ProviderCategoryPage;

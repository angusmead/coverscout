import { Link } from "react-router-dom";
import { ArrowRight, Check, X as XIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { breadcrumbSchema } from "@/lib/schema";
import { getProvider, type ProviderProfile } from "@/lib/providers-data";

type Props = { slug: string };

const HOME = { name: "Home", url: "/" };
const REVIEWS = { name: "Reviews", url: "/reviews/" };

const buildBreadcrumbs = (p: ProviderProfile) => [
  HOME,
  REVIEWS,
  { name: `${p.name} car insurance`, url: p.path },
];

export const ProviderReviewPage = ({ slug }: Props) => {
  const provider = getProvider(slug);
  if (!provider) {
    return (
      <div className="container py-24 text-muted-foreground">
        Unknown provider slug: <code>{slug}</code>
      </div>
    );
  }

  const breadcrumbs = buildBreadcrumbs(provider);
  const relatedProviders = provider.relatedSlugs
    .map(getProvider)
    .filter((p): p is ProviderProfile => Boolean(p));

  const faqItems = provider.faqs.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <>
      <SEO
        title={provider.metaTitle}
        description={provider.metaDescription}
        canonicalPath={provider.path}
        jsonLd={breadcrumbSchema(breadcrumbs)}
      />
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          {provider.name} car insurance review: cover, features and how it compares
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          {provider.lead}
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Overview
        </h2>
        {provider.overview.map((para, i) => (
          <p key={i} className="text-base leading-relaxed mb-5">{para}</p>
        ))}

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Who {provider.name} car insurance may suit
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          {provider.maySuit.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Who it may not suit
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          {provider.mayNotSuit.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Cover types offered
        </h2>
        <p className="text-base leading-relaxed mb-3">
          {provider.name} typically offers the following cover types. Specific inclusions, exclusions and limits sit in the {provider.name} PDS for each product.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
          {provider.coverTypes.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <p className="text-base leading-relaxed mb-5">
          For background on what each cover type means, see our explainers on{" "}
          <Link to="/car-insurance/comprehensive/" className="text-primary hover:underline">
            comprehensive car insurance
          </Link>{" "}
          and{" "}
          <Link to="/car-insurance/third-party/" className="text-primary hover:underline">
            third party car insurance
          </Link>
          .
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Key features
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {provider.features.map((f) => (
            <div key={f.heading} className="bg-card border border-border rounded-lg p-5">
              <div className="font-sans font-extrabold text-base tracking-tight mb-2">{f.heading}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Pricing positioning
        </h2>
        <p className="text-base leading-relaxed mb-5">{provider.pricingPositioning}</p>
        <p className="text-base leading-relaxed mb-5">
          For more on what shapes premiums in general, see our pages on{" "}
          <Link to="/car-insurance/cost/" className="text-primary hover:underline">
            car insurance cost
          </Link>{" "}
          and{" "}
          <Link to="/car-insurance/lower-premiums/" className="text-primary hover:underline">
            lowering your premium
          </Link>
          .
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Pros and cons
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="font-sans font-extrabold text-base tracking-tight mb-3">Pros</div>
            <ul className="space-y-2">
              {provider.pros.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-relaxed">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="font-sans font-extrabold text-base tracking-tight mb-3">Cons</div>
            <ul className="space-y-2">
              {provider.cons.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-relaxed">
                  <XIcon size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          How {provider.name} compares with other Australian insurers
        </h2>
        <p className="text-base leading-relaxed mb-5">{provider.comparison}</p>

        {relatedProviders.length > 0 && (
          <div className="mb-6">
            <p className="text-base leading-relaxed mb-3">Related provider reviews worth comparing:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              {relatedProviders.map((rp) => (
                <li key={rp.slug}>
                  <Link to={rp.path} className="text-primary hover:underline">
                    {rp.name} car insurance review
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {provider.longTailLinks.length > 0 && (
          <div className="mb-6">
            <p className="text-base leading-relaxed mb-3">Useful background reading:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              {provider.longTailLinks.map((link) => (
                <li key={link.url}>
                  <Link to={link.url} className="text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/car-insurance/" className="text-primary hover:underline">
                  Car insurance hub — fundamentals
                </Link>
              </li>
              <li>
                <Link to="/car-insurance/compare/" className="text-primary hover:underline">
                  Compare car insurance — what to look for
                </Link>
              </li>
            </ul>
          </div>
        )}

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Compare your options
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            The cleanest way to test whether {provider.name} is competitive for you is to quote it
            alongside a couple of other insurers using identical inputs. The pages below cover both
            the comparison framework and the quote process.
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
              to="/reviews/"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-muted transition"
            >
              All provider reviews
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-10" />
      </article>
    </>
  );
};

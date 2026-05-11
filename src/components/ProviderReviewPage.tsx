import { Link } from "react-router-dom";
import { ArrowRight, Check, X as XIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { ProviderLogo } from "@/components/insurance/ProviderLogo";
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

const h2 = "font-sans font-semibold text-[26px] md:text-[32px] tracking-[-0.025em] leading-[1.15] mt-16 mb-5";
const body = "text-[16px] leading-[1.65] text-foreground/85 mb-5";
const inlineLink = "text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue";
const italicAccent: React.CSSProperties = {
  fontFamily: '"EB Garamond", "Fraunces", serif',
  fontStyle: "italic",
  fontWeight: 700,
  letterSpacing: "-0.01em",
};

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
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />

        <div className="mb-7">
          <ProviderLogo slug={provider.slug} name={provider.name} size="lg" />
        </div>

        <h1 className="font-sans font-semibold text-[40px] md:text-[56px] tracking-[-0.035em] leading-[1.02] mb-7">
          {provider.name} car insurance{" "}
          <span className="text-brand-blue" style={italicAccent}>
            review
          </span>
          : cover, features and how it compares
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          {provider.lead}
        </p>

        <h2 className={h2}>Overview</h2>
        {provider.overview.map((para, i) => (
          <p key={i} className={body}>{para}</p>
        ))}

        <h2 className={h2}>Who {provider.name} car insurance may suit</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          {provider.maySuit.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <h2 className={h2}>Who it may not suit</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          {provider.mayNotSuit.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <h2 className={h2}>Cover types offered</h2>
        <p className={body}>
          {provider.name} typically offers the following cover types. Specific inclusions, exclusions and limits sit in the {provider.name} PDS for each product.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2.5 text-[16px] leading-[1.65] text-foreground/85">
          {provider.coverTypes.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <p className={body}>
          For background on what each cover type means, see our explainers on{" "}
          <Link to="/car-insurance/comprehensive/" className={inlineLink}>
            comprehensive car insurance
          </Link>{" "}
          and{" "}
          <Link to="/car-insurance/third-party/" className={inlineLink}>
            third party car insurance
          </Link>
          .
        </p>

        <h2 className={h2}>Key features</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {provider.features.map((f) => (
            <div key={f.heading} className="bg-card border border-border rounded-2xl p-6">
              <div className="font-sans font-semibold text-[16px] tracking-tight mb-2.5">{f.heading}</div>
              <p className="text-[14px] text-muted-foreground leading-[1.6]">{f.body}</p>
            </div>
          ))}
        </div>

        <h2 className={h2}>Pricing positioning</h2>
        <p className={body}>{provider.pricingPositioning}</p>
        <p className={body}>
          For more on what shapes premiums in general, see our pages on{" "}
          <Link to="/car-insurance/cost/" className={inlineLink}>
            car insurance cost
          </Link>{" "}
          and{" "}
          <Link to="/car-insurance/lower-premiums/" className={inlineLink}>
            lowering your premium
          </Link>
          .
        </p>

        <h2 className={h2}>Pros and cons</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-sans font-semibold text-[16px] tracking-tight">Pros</div>
              <div className="text-[11.5px] uppercase tracking-[0.08em] font-semibold text-brand-blue">+</div>
            </div>
            <ul className="space-y-2.5">
              {provider.pros.map((p) => (
                <li key={p} className="flex gap-2.5 text-[14px] leading-[1.55]">
                  <Check size={16} className="text-brand-blue shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-sans font-semibold text-[16px] tracking-tight">Cons</div>
              <div className="text-[11.5px] uppercase tracking-[0.08em] font-semibold text-muted-foreground/60">−</div>
            </div>
            <ul className="space-y-2.5">
              {provider.cons.map((c) => (
                <li key={c} className="flex gap-2.5 text-[14px] leading-[1.55]">
                  <XIcon size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className={h2}>How {provider.name} compares with other Australian insurers</h2>
        <p className={body}>{provider.comparison}</p>

        {relatedProviders.length > 0 && (
          <div className="mb-8">
            <p className={body}>Related provider reviews worth comparing:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedProviders.map((rp) => (
                <Link
                  key={rp.slug}
                  to={rp.path}
                  className="group flex items-center gap-3 bg-card border border-border rounded-2xl p-3.5 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_hsl(0_0%_0%/0.04),0_12px_30px_hsl(0_0%_0%/0.06)] transition"
                >
                  <ProviderLogo slug={rp.slug} name={rp.name} size="sm" />
                  <span className="text-[14px] font-medium text-foreground group-hover:text-brand-blue transition-colors">
                    {rp.name} car insurance review
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {provider.longTailLinks.length > 0 && (
          <div className="mb-8">
            <p className={body}>Useful background reading:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.65] text-foreground/85">
              {provider.longTailLinks.map((link) => (
                <li key={link.url}>
                  <Link to={link.url} className={inlineLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/car-insurance/" className={inlineLink}>
                  Car insurance hub, fundamentals
                </Link>
              </li>
              <li>
                <Link to="/car-insurance/compare/" className={inlineLink}>
                  Compare car insurance, what to look for
                </Link>
              </li>
            </ul>
          </div>
        )}

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[26px] md:text-[32px] tracking-[-0.025em] leading-[1.15] mb-3">
            Compare your options
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            The cleanest way to test whether {provider.name} is competitive for you is to quote it
            alongside a couple of other insurers using identical inputs. The pages below cover both
            the comparison framework and the quote process.
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
              to="/reviews/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              All provider reviews
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

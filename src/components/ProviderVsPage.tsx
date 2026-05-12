import { Link } from "react-router-dom";
import { ArrowRight, Check, X as XIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
import { ProviderLogo } from "@/components/insurance/ProviderLogo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  getComparisonByPath,
  getComparisonBySlugPair,
  type Comparison,
} from "@/lib/comparisons-data";
import { getProvider } from "@/lib/providers-data";

type Props = { path: string };

const HOME = { name: "Home", url: "/" };
const REVIEWS = { name: "Reviews", url: "/reviews/" };

const buildBreadcrumbs = (c: Comparison, aName: string, bName: string) => [
  HOME,
  REVIEWS,
  { name: `${aName} vs ${bName}`, url: c.path },
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

export const ProviderVsPage = ({ path }: Props) => {
  const comparison = getComparisonByPath(path);
  if (!comparison) {
    return (
      <div className="container py-24 text-muted-foreground">
        Unknown comparison path: <code>{path}</code>
      </div>
    );
  }

  const a = getProvider(comparison.slugA);
  const b = getProvider(comparison.slugB);
  if (!a || !b) {
    return (
      <div className="container py-24 text-muted-foreground">
        Comparison references unknown provider slug.
      </div>
    );
  }

  const breadcrumbs = buildBreadcrumbs(comparison, a.name, b.name);
  const related = comparison.relatedSlugs
    .map(getComparisonBySlugPair)
    .filter((c): c is Comparison => Boolean(c));

  const faqItems = comparison.faqs.map((f) => ({ question: f.q, answer: f.a }));
  const jsonLd = [
    breadcrumbSchema(breadcrumbs),
    faqSchema(faqItems),
  ];

  return (
    <>
      <SEO
        title={comparison.metaTitle}
        description={comparison.metaDescription}
        canonicalPath={comparison.path}
        jsonLd={jsonLd}
      />
      <article className="container py-14 md:py-20 max-w-[820px]">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />

        <div className="flex items-center gap-4 mb-7 flex-wrap">
          <ProviderLogo slug={a.slug} name={a.name} size="lg" />
          <span className="text-[28px] font-sans font-semibold text-muted-foreground" style={italicAccent}>
            vs
          </span>
          <ProviderLogo slug={b.slug} name={b.name} size="lg" />
        </div>
        <h1 className="font-sans font-semibold text-[40px] md:text-[56px] tracking-[-0.035em] leading-[1.02] mb-7">
          {a.name} <span className="text-brand-blue" style={italicAccent}>vs</span> {b.name} car insurance: how they compare
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          {comparison.lead}
        </p>

        <h2 className={h2}>Overview</h2>
        {comparison.context.map((para, i) => (
          <p key={i} className={body}>{para}</p>
        ))}

        <h2 className={h2}>Key differences</h2>
        <div className="space-y-3 mb-8">
          {comparison.differences.map((d) => (
            <div key={d.heading} className="bg-card border border-border rounded-2xl p-6">
              <div className="font-sans font-semibold text-[16px] tracking-tight mb-2">
                {d.heading}
              </div>
              <p className="text-[14.5px] text-muted-foreground leading-[1.6]">{d.body}</p>
            </div>
          ))}
        </div>

        <h2 className={h2}>Who each may suit</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <ProviderLogo slug={a.slug} name={a.name} size="sm" />
              <div className="font-sans font-semibold text-[15px] tracking-tight">
                {a.name} may suit
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2.5 text-[14px] leading-[1.55] text-foreground/85">
              {comparison.whoSuitsA.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <ProviderLogo slug={b.slug} name={b.name} size="sm" />
              <div className="font-sans font-semibold text-[15px] tracking-tight">
                {b.name} may suit
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2.5 text-[14px] leading-[1.55] text-foreground/85">
              {comparison.whoSuitsB.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <h2 className={h2}>Pros and cons</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <ProviderLogo slug={a.slug} name={a.name} size="sm" />
              <div className="font-sans font-semibold text-[15px] tracking-tight">{a.name}</div>
            </div>
            <ul className="space-y-2.5 mb-4">
              {comparison.prosA.map((p) => (
                <li key={p} className="flex gap-2.5 text-[14px] leading-[1.55]">
                  <Check size={16} className="text-brand-blue shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {comparison.consA.map((c) => (
                <li key={c} className="flex gap-2.5 text-[14px] leading-[1.55]">
                  <XIcon size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <ProviderLogo slug={b.slug} name={b.name} size="sm" />
              <div className="font-sans font-semibold text-[15px] tracking-tight">{b.name}</div>
            </div>
            <ul className="space-y-2.5 mb-4">
              {comparison.prosB.map((p) => (
                <li key={p} className="flex gap-2.5 text-[14px] leading-[1.55]">
                  <Check size={16} className="text-brand-blue shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {comparison.consB.map((c) => (
                <li key={c} className="flex gap-2.5 text-[14px] leading-[1.55]">
                  <XIcon size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className={h2}>Side-by-side summary</h2>
        <div className="overflow-x-auto mb-4 rounded-2xl border border-border">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="bg-secondary/60 text-left">
                <th className="p-4 font-sans font-semibold tracking-tight border-b border-border w-1/3">
                  &nbsp;
                </th>
                <th className="p-4 font-sans font-semibold tracking-tight border-b border-border">
                  {a.name}
                </th>
                <th className="p-4 font-sans font-semibold tracking-tight border-b border-border">
                  {b.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.table.map((row, i, arr) => (
                <tr key={row.dimension} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                  <td className={`p-4 align-top font-medium ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    {row.dimension}
                  </td>
                  <td className={`p-4 align-top text-muted-foreground ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    {row.a}
                  </td>
                  <td className={`p-4 align-top text-muted-foreground ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    {row.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13.5px] text-muted-foreground italic mb-10">
          This summary is for shopping orientation only, it doesn't declare a winner. The right
          fit depends on your vehicle, location, driving profile and what you value in an insurer.
        </p>

        <h2 className={h2}>The bottom line</h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-10">{comparison.closing}</p>

        <div className="mb-8">
          <p className={body}>Read each provider in more depth:</p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.65] text-foreground/85">
            <li>
              <Link to={a.path} className={inlineLink}>
                {a.name} car insurance review
              </Link>
            </li>
            <li>
              <Link to={b.path} className={inlineLink}>
                {b.name} car insurance review
              </Link>
            </li>
          </ul>
        </div>

        {related.length > 0 && (
          <div className="mb-8">
            <p className={body}>Related comparisons worth a look:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.65] text-foreground/85">
              {related.map((rc) => {
                const ra = getProvider(rc.slugA);
                const rb = getProvider(rc.slugB);
                if (!ra || !rb) return null;
                return (
                  <li key={rc.path}>
                    <Link to={rc.path} className={inlineLink}>
                      {ra.name} vs {rb.name} car insurance
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="mb-8">
          <p className={body}>Useful background reading:</p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.65] text-foreground/85">
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
            <li>
              <Link to="/reviews/" className={inlineLink}>
                All provider reviews
              </Link>
            </li>
          </ul>
        </div>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-20 bg-secondary/60 border border-border rounded-3xl p-8 md:p-12">
          <h2 className="font-sans font-semibold text-[26px] md:text-[32px] tracking-[-0.025em] leading-[1.15] mb-3">
            Compare your options
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-2xl">
            The cleanest way to test {a.name} against {b.name} for your situation is to quote them
            both, plus at least one other insurer, using identical inputs. The pages below cover
            the comparison framework and the quote process.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${a.website}?utm_source=coverscout&utm_medium=vs_cta&utm_campaign=${comparison.slugA}-vs-${comparison.slugB}`}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Quote from {a.name}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`${b.website}?utm_source=coverscout&utm_medium=vs_cta&utm_campaign=${comparison.slugA}-vs-${comparison.slugB}`}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
            >
              Quote from {b.name}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/car-insurance/compare/"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-secondary transition"
            >
              Compare more insurers
            </Link>
          </div>
          <AffiliateDisclosure className="mt-6" />
        </section>

        <DisclaimerBlock className="mt-12" />
      </article>
    </>
  );
};

import { Link } from "react-router-dom";
import { ArrowRight, Check, X as XIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/insurance/FAQAccordion";
import { DisclaimerBlock } from "@/components/insurance/DisclaimerBlock";
import { AffiliateDisclosure } from "@/components/insurance/AffiliateDisclosure";
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
      <article className="container py-12 md:py-16 max-w-4xl">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
          {a.name} vs {b.name} car insurance: how they compare
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          {comparison.lead}
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Overview
        </h2>
        {comparison.context.map((para, i) => (
          <p key={i} className="text-base leading-relaxed mb-5">{para}</p>
        ))}

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Key differences
        </h2>
        <div className="space-y-5 mb-8">
          {comparison.differences.map((d) => (
            <div key={d.heading} className="bg-card border border-border rounded-lg p-5">
              <div className="font-sans font-extrabold text-base tracking-tight mb-2">
                {d.heading}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Who each may suit
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="font-sans font-extrabold text-base tracking-tight mb-3">
              {a.name} may suit
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              {comparison.whoSuitsA.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="font-sans font-extrabold text-base tracking-tight mb-3">
              {b.name} may suit
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              {comparison.whoSuitsB.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Pros and cons
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="font-sans font-extrabold text-base tracking-tight mb-3">
              {a.name}
            </div>
            <ul className="space-y-2 mb-4">
              {comparison.prosA.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-relaxed">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {comparison.consA.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-relaxed">
                  <XIcon size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="font-sans font-extrabold text-base tracking-tight mb-3">
              {b.name}
            </div>
            <ul className="space-y-2 mb-4">
              {comparison.prosB.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-relaxed">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {comparison.consB.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-relaxed">
                  <XIcon size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          Side-by-side summary
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-border rounded-lg text-sm">
            <thead>
              <tr className="bg-muted/50 text-left">
                <th className="p-3 font-sans font-extrabold tracking-tight border-b border-border w-1/3">
                  &nbsp;
                </th>
                <th className="p-3 font-sans font-extrabold tracking-tight border-b border-border">
                  {a.name}
                </th>
                <th className="p-3 font-sans font-extrabold tracking-tight border-b border-border">
                  {b.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.table.map((row, i) => (
                <tr key={row.dimension} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="p-3 align-top font-medium border-b border-border">
                    {row.dimension}
                  </td>
                  <td className="p-3 align-top text-muted-foreground border-b border-border">
                    {row.a}
                  </td>
                  <td className="p-3 align-top text-muted-foreground border-b border-border">
                    {row.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground italic mb-8">
          This summary is for shopping orientation only — it doesn't declare a winner. The right
          fit depends on your vehicle, location, driving profile and what you value in an insurer.
        </p>

        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mt-12 mb-4">
          The bottom line
        </h2>
        <p className="text-base leading-relaxed mb-8">{comparison.closing}</p>

        <div className="mb-6">
          <p className="text-base leading-relaxed mb-3">Read each provider in more depth:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              <Link to={a.path} className="text-primary hover:underline">
                {a.name} car insurance review
              </Link>
            </li>
            <li>
              <Link to={b.path} className="text-primary hover:underline">
                {b.name} car insurance review
              </Link>
            </li>
          </ul>
        </div>

        {related.length > 0 && (
          <div className="mb-6">
            <p className="text-base leading-relaxed mb-3">Related comparisons worth a look:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              {related.map((rc) => {
                const ra = getProvider(rc.slugA);
                const rb = getProvider(rc.slugB);
                if (!ra || !rb) return null;
                return (
                  <li key={rc.path}>
                    <Link to={rc.path} className="text-primary hover:underline">
                      {ra.name} vs {rb.name} car insurance
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <p className="text-base leading-relaxed mb-3">Useful background reading:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
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
            <li>
              <Link to="/reviews/" className="text-primary hover:underline">
                All provider reviews
              </Link>
            </li>
          </ul>
        </div>

        <FAQAccordion items={faqItems} heading="Frequently asked questions" className="mt-16" />

        <section className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Compare your options
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            The cleanest way to test {a.name} against {b.name} for your situation is to quote them
            both — plus at least one other insurer — using identical inputs. The pages below cover
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

import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/privacy/";
const EFFECTIVE_DATE = "5 May 2026";

const Privacy = () => {
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
          Privacy policy
        </h1>

        <p className="text-sm text-muted-foreground mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          CoverScout (ABN 61 941 800 664) operates the website at{" "}
          <Link to="/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">coverscout.com.au</Link>. This
          policy explains what information we collect, how we use it, and your rights under the
          Australian Privacy Principles (APPs) set out in the Privacy Act 1988 (Cth).
        </p>

        <p className="text-base leading-relaxed mb-10">
          We've tried to write this in plain English. If something isn't clear, email{" "}
          <a href="mailto:hello@coverscout.com.au" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            hello@coverscout.com.au
          </a>{" "}
          and we'll explain.
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          What we collect
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          We use <strong>Cloudflare Web Analytics</strong> to understand how the site is used.
          Cloudflare aggregates the following information at the network edge:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-2 leading-relaxed">
          <li>Pages visited and time spent on each page</li>
          <li>Approximate location based on IP address (country/region level)</li>
          <li>Device type, browser, and operating system</li>
          <li>Referring website (where you came from)</li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Cloudflare Web Analytics does not use cookies, does not fingerprint individual visitors,
          and does not track you across other websites. The data is aggregated and anonymous —
          we cannot identify you personally from it.
        </p>
        <p className="text-base leading-relaxed mb-10">
          Cloudflare also processes basic technical information (IP addresses, request headers) to
          deliver the site and protect it from abuse. This is standard for any website served via
          a content delivery network.
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Information you give us directly
        </h2>
        <p className="text-base leading-relaxed mb-10">
          We don't currently run forms, accounts, or newsletters. The only way you'd give us
          personal information is by emailing us directly. If you do, we'll only use that
          information to reply to you. We won't add you to a mailing list or share it with anyone
          else.
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Cookies
        </h2>
        <p className="text-base leading-relaxed mb-10">
          The site uses only essential cookies set by Cloudflare for security and performance
          (for example, to detect bots and serve cached content). We don't set any tracking,
          advertising, or analytics cookies. You can block all cookies in your browser settings —
          the site will still work normally.
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Affiliate links
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          CoverScout plans to earn commissions through affiliate links to insurance providers in
          the future. We don't currently have any active affiliate partnerships, but when we do:
        </p>
        <ul className="list-disc pl-6 mb-10 space-y-2 leading-relaxed">
          <li>
            Clicking an affiliate link may pass anonymous tracking parameters to the destination
            site so the partner can attribute the visit to us. Those partners run their own
            tracking under their own privacy policies.
          </li>
          <li>
            Affiliate relationships never influence what we write or which insurers we cover.
            See{" "}
            <Link to="/how-we-make-money/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              how we make money
            </Link>{" "}
            for more.
          </li>
        </ul>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Where your information is held
        </h2>
        <p className="text-base leading-relaxed mb-10">
          Cloudflare is headquartered in the United States and operates a global network. Aggregated
          analytics data and infrastructure logs may be processed in the US, EU, or Asia-Pacific
          regions. Cloudflare publishes its own data processing terms and is certified under the
          EU-US Data Privacy Framework.
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Your rights
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          Under the Australian Privacy Principles, you have the right to:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-2 leading-relaxed">
          <li>Ask what personal information we hold about you (APP 12)</li>
          <li>Ask us to correct any personal information that's wrong (APP 13)</li>
          <li>Make a complaint if you think we've mishandled your information</li>
        </ul>
        <p className="text-base leading-relaxed mb-10">
          Email{" "}
          <a href="mailto:hello@coverscout.com.au" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            hello@coverscout.com.au
          </a>{" "}
          and we'll respond within 30 days. If you're not satisfied with our response, you can
          escalate to the Office of the Australian Information Commissioner at{" "}
          <a
            href="https://www.oaic.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue"
          >
            oaic.gov.au
          </a>
          .
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Children
        </h2>
        <p className="text-base leading-relaxed mb-10">
          The site isn't directed at children under 16. We don't knowingly collect information
          from children.
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Changes to this policy
        </h2>
        <p className="text-base leading-relaxed mb-10">
          If we change how we handle information — for example when we launch affiliate
          partnerships, add a contact form, or introduce a different analytics tool — we'll
          update this page and the effective date at the top.
        </p>

        <h2 className="font-sans font-extrabold text-2xl tracking-tight mt-12 mb-4">
          Contact
        </h2>
        <p className="text-base leading-relaxed mb-10">
          CoverScout (ABN 61 941 800 664)<br />
          Email:{" "}
          <a href="mailto:hello@coverscout.com.au" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            hello@coverscout.com.au
          </a>
        </p>
      </article>
    </>
  );
};

export default Privacy;

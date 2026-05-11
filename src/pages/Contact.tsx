import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

const PATH = "/contact/";

const Contact = () => {
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
          Contact
        </h1>

        <p className="text-[19px] md:text-[20px] text-muted-foreground leading-[1.55] mb-12 max-w-[680px]">
          One email address, no forms, no chatbots. Real responses, usually within a couple of
          business days.
        </p>

        <section className="bg-card border border-border rounded-2xl p-7 md:p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="text-primary" size={22} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</div>
              <a
                href="mailto:hello@coverscout.com.au"
                className="font-sans font-extrabold text-2xl tracking-tight text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue"
              >
                hello@coverscout.com.au
              </a>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                We aim to respond within 2 business days. Australian Eastern Standard Time.
              </p>
            </div>
          </div>
        </section>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Before you email
        </h2>
        <p className="text-[16px] leading-[1.65] text-foreground/85 mb-5">
          A few common questions are answered better elsewhere — try these first:
        </p>
        <ul className="list-disc pl-6 mb-10 space-y-3 leading-relaxed">
          <li>
            <strong>Looking for a quote?</strong> CoverScout doesn't run a quote engine. The{" "}
            <Link to="/car-insurance/quotes/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              quotes guide
            </Link>{" "}
            walks through what insurers ask and how to set up an apples-to-apples comparison.
          </li>
          <li>
            <strong>Trying to compare a specific pair of providers?</strong> Check the{" "}
            <Link to="/reviews/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              reviews hub
            </Link>{" "}
            — we have head-to-head comparisons for the most-asked-about pairings.
          </li>
          <li>
            <strong>Question about an existing policy?</strong> Your insurer's customer service
            team is the right place — they have your policy details and can answer specifics. We
            can't access individual policies.
          </li>
          <li>
            <strong>Privacy or data question?</strong> See the{" "}
            <Link to="/privacy/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
              privacy policy
            </Link>{" "}
            or email us directly with the subject "Privacy".
          </li>
          <li>
            <strong>Want to suggest a topic, comparison, or correction?</strong> Email us — we
            read everything.
          </li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          What we can't help with
        </h2>
        <ul className="list-disc pl-6 mb-10 space-y-2 leading-relaxed">
          <li>Personalised financial or insurance advice — we're an education site, not a broker</li>
          <li>Help with claims (contact your insurer)</li>
          <li>Help with complaints against an insurer (the{" "}
            <a
              href="https://www.afca.org.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue"
            >
              Australian Financial Complaints Authority
            </a>{" "}
            handles these)
          </li>
          <li>Guarantees of cheapest premiums or best policies — those don't exist universally</li>
        </ul>

        <h2 className="font-sans font-semibold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.1] mt-16 mb-5">
          Business details
        </h2>
        <p className="text-base leading-relaxed mb-10">
          CoverScout<br />
          ABN 61 941 800 664<br />
          Email:{" "}
          <a href="mailto:hello@coverscout.com.au" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[4px] hover:decoration-brand-blue">
            hello@coverscout.com.au
          </a>
        </p>
      </article>
    </>
  );
};

export default Contact;

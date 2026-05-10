import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart, Car, Home, Shield, Plane, Briefcase,
  ChevronDown, ArrowRight, ArrowUpRight, Clock, Sparkles,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { ProviderDirectory } from "@/components/insurance/ProviderDirectory";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/site";

const popularTopics = [
  { title: "Cheap car insurance — how to save without losing cover", to: "/car-insurance/cheap/", tag: "Pricing" },
  { title: "How to compare car insurance properly", to: "/car-insurance/compare/", tag: "Compare" },
  { title: "Car insurance quotes — getting useful comparisons", to: "/car-insurance/quotes/", tag: "Quotes" },
  { title: "Car insurance for young drivers", to: "/car-insurance/young-drivers/", tag: "Young drivers" },
  { title: "Comprehensive vs third party — what's the difference?", to: "/car-insurance/comprehensive/", tag: "Cover types" },
  { title: "How to lower your car insurance premium", to: "/car-insurance/lower-premiums/", tag: "Premiums" },
];

const FEATURED_PROVIDER_SLUGS = [
  "aami",
  "nrma",
  "budget-direct",
  "youi",
  "allianz",
  "bingle",
];

const featuredComparisons = [
  { label: "AAMI vs NRMA", to: "/reviews/aami-vs-nrma/" },
  { label: "Budget Direct vs Youi", to: "/reviews/budget-direct-vs-youi/" },
  { label: "Bingle vs Budget Direct", to: "/reviews/bingle-vs-budget-direct/" },
  { label: "Coles vs Woolworths", to: "/reviews/coles-vs-woolworths/" },
  { label: "RACQ vs Suncorp", to: "/reviews/racq-vs-suncorp/" },
  { label: "APIA vs NRMA", to: "/reviews/apia-vs-nrma/" },
];

const categories: { name: string; icon: typeof Heart; to: string; blurb: string }[] = [
  { name: "Car insurance", icon: Car, to: "/car-insurance/", blurb: "Compare cover, providers, and reviews" },
  { name: "Home insurance", icon: Home, to: "/home-insurance/", blurb: "Coming soon — building, contents, renters" },
  { name: "Life insurance", icon: Shield, to: "/life-insurance/", blurb: "Coming soon — life, income protection" },
  { name: "Health insurance", icon: Heart, to: "/health-insurance/", blurb: "Coming soon — hospital and extras" },
  { name: "Travel insurance", icon: Plane, to: "/travel-insurance/", blurb: "Coming soon — domestic and international" },
  { name: "Business insurance", icon: Briefcase, to: "/business-insurance/", blurb: "Coming soon — public liability and more" },
];

const insuranceOptions = ["Car insurance"];

const guides = [
  { tag: "Cover types",   title: "Comprehensive vs third party — what's the difference?",        to: "/car-insurance/comprehensive/",   read: "8 min read" },
  { tag: "Pricing",       title: "How to lower your car insurance premium without losing cover", to: "/car-insurance/lower-premiums/",  read: "9 min read" },
  { tag: "Young drivers", title: "Why young drivers pay more — and what may help",               to: "/car-insurance/young-drivers/",   read: "7 min read" },
];

const eyebrow = "text-[11.5px] uppercase tracking-[0.08em] font-semibold text-muted-foreground/70";
const sectionH2 = "font-sans font-semibold text-[42px] md:text-[60px] tracking-[-0.035em] leading-[1.02]";

const Index = () => {
  const [selected, setSelected] = useState("Car insurance");

  return (
    <>
      <SEO
        title={SITE_TAGLINE}
        description={SITE_DESCRIPTION}
        canonicalPath="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />

      {/* HERO — centered, oversized type */}
      <section className="px-6 pt-24 md:pt-32 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-[12.5px] font-medium text-muted-foreground mb-8">
          <Sparkles size={12} className="text-brand-blue" />
          Australian insurance comparison
        </div>
        <h1 className="font-sans font-semibold text-[52px] sm:text-[72px] md:text-[96px] leading-[0.98] tracking-[-0.04em] max-w-[1040px] mx-auto">
          Find cover that<br />
          <span
            className="text-brand-blue"
            style={{
              fontFamily: '"Instrument Serif", "Geist", serif',
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            actually fits.
          </span>
        </h1>
        <p className="mt-7 text-[18px] md:text-[20px] text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
          Compare policies from Australia's leading insurers. No jargon, no pressure — just clear information to help you decide.
        </p>

        <div id="compare" className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <div className="relative flex-1">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full appearance-none bg-card border border-border rounded-full px-6 py-4 pr-12 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-foreground/20 text-left"
            >
              {insuranceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
          </div>
          <Link
            to="/reviews/"
            className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-[15px] font-medium hover:bg-foreground/90 transition whitespace-nowrap"
          >
            Compare providers <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-4 text-[13.5px] text-muted-foreground">
          Or try the{" "}
          <Link to="/car-insurance/compare/" className="text-brand-blue font-medium underline decoration-brand-blue/40 underline-offset-[5px] hover:decoration-brand-blue">
            3-step comparison tool
          </Link>{" "}
          to narrow your options first.
        </div>

        <div className="mt-12 inline-flex items-center gap-2.5 text-[12.5px] text-muted-foreground bg-secondary/60 border border-border rounded-full px-4 py-2">
          <Sparkles size={14} className="text-brand-blue" />
          Plain-English guides covering 16 Australian car insurers and 10 head-to-head comparisons
        </div>
      </section>

      {/* 3-UP EDITORIAL CARDS (content from original hero card stack — restructured into a clean row) */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/car-insurance/compare/"
            className="group bg-card border border-border rounded-3xl p-7 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_hsl(0_0%_0%/0.04),0_18px_50px_hsl(0_0%_0%/0.10)] transition flex flex-col gap-3 min-h-[260px]"
          >
            <div className={eyebrow}>Compare car insurance</div>
            <div className="font-sans font-semibold text-[26px] tracking-[-0.025em] leading-[1.1] mt-1">
              What to put side by side
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">
              Cover types, excess, agreed value vs market value — the things that actually move the price.
            </p>
            <div className="inline-flex items-center gap-1 text-[13.5px] font-medium text-foreground group-hover:gap-2 transition-all">
              Read the comparison guide <ArrowRight size={14} />
            </div>
          </Link>

          <Link
            to="/reviews/aami-vs-nrma/"
            className="group bg-foreground text-background rounded-3xl p-7 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_hsl(0_0%_0%/0.04),0_18px_50px_hsl(0_0%_0%/0.20)] transition flex flex-col gap-3 min-h-[260px]"
          >
            <div className="text-[11.5px] uppercase tracking-[0.08em] font-semibold text-background/55">Head-to-head</div>
            <div className="font-sans font-semibold text-[26px] tracking-[-0.025em] leading-[1.1] mt-1">
              AAMI vs NRMA
            </div>
            <p className="text-[14px] text-background/70 leading-relaxed flex-1">
              Two of Australia's most recognisable car insurance brands compared side by side.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-medium">Read the comparison</span>
              <ArrowUpRight size={16} />
            </div>
          </Link>

          <div className="bg-secondary border border-border rounded-3xl p-7 flex flex-col gap-3 min-h-[260px]">
            <div className={eyebrow}>Why CoverScout</div>
            <div className="font-sans font-semibold text-[26px] tracking-[-0.025em] leading-[1.1] mt-1">
              100% free to use
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">
              No sign-up required.
            </p>
            <div className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[hsl(var(--brand-blue)/0.10)] border border-[hsl(var(--brand-blue)/0.20)] flex items-center justify-center">
                <Shield size={18} strokeWidth={1.75} className="text-brand-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-secondary/60 border-y border-border">
        <div className="container py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-muted-foreground text-center">
          <span>General advice only — we don't recommend specific policies</span>
          <span className="text-border">·</span>
          <span>We may earn a commission from providers</span>
          <span className="text-border">·</span>
          <span>Updated May 2026</span>
        </div>
      </section>

      {/* PROVIDER DIRECTORY (compact) */}
      <section className="container py-24">
        <div className="mb-10">
          <p className={eyebrow + " mb-3"}>Provider directory</p>
        </div>
        <ProviderDirectory
          compact
          slugs={FEATURED_PROVIDER_SLUGS}
          heading="Compare 16 Australian car insurance providers"
          subheading="A snapshot of six of the most-asked-about brands. The full directory has filters and the rest."
        />
      </section>

      {/* POPULAR TOPICS — feature-row treatment */}
      <section className="bg-foreground text-background">
        <div className="container py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11.5px] uppercase tracking-[0.08em] font-semibold text-background/55 mb-3">Start here</p>
              <h2 className={sectionH2}>Popular car insurance topics</h2>
            </div>
            <Link
              to="/car-insurance/"
              className="inline-flex items-center gap-1 text-[13.5px] text-background/70 hover:text-background hover:gap-2 transition-all whitespace-nowrap"
            >
              All car insurance pages <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTopics.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group bg-[hsl(0_0%_12%)] border border-white/[0.08] rounded-3xl p-7 hover:-translate-y-0.5 hover:bg-[hsl(0_0%_14%)] transition flex flex-col"
              >
                <div className="text-[11.5px] uppercase tracking-[0.08em] font-semibold text-background/55 mb-5">{t.tag}</div>
                <div className="font-sans font-semibold text-[20px] leading-snug tracking-[-0.02em] mb-10">
                  {t.title}
                </div>
                <div className="inline-flex items-center gap-1 text-[13px] text-background/55 group-hover:text-background group-hover:gap-2 transition-all mt-auto">
                  Read guide <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARING TWO PROVIDERS — provider-name-led cards */}
      <section className="container py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className={eyebrow + " mb-3"}>Side-by-side</p>
            <h2 className={sectionH2}>Comparing two providers?</h2>
          </div>
          <Link
            to="/reviews/"
            className="inline-flex items-center gap-1 text-[13.5px] text-muted-foreground hover:text-foreground hover:gap-2 transition-all whitespace-nowrap"
          >
            All comparisons <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredComparisons.map((c) => {
            const [a, b] = c.label.split(" vs ");
            return (
              <Link
                key={c.to}
                to={c.to}
                className="group bg-card border border-border rounded-3xl p-7 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_hsl(0_0%_0%/0.04),0_16px_40px_hsl(0_0%_0%/0.08)] transition flex flex-col gap-4 min-h-[180px]"
              >
                <div className={eyebrow}>Side-by-side</div>
                <div className="font-sans font-semibold text-[28px] tracking-[-0.03em] leading-[1.05] flex items-baseline gap-2 flex-wrap">
                  <span>{a}</span>
                  <span className="text-muted-foreground text-[18px] font-medium">vs</span>
                  <span>{b}</span>
                </div>
                <div className="mt-auto inline-flex items-center gap-1 text-[13px] text-muted-foreground group-hover:text-foreground group-hover:gap-2 transition-all">
                  Read comparison <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CATEGORY GRID — big tiles with numbered eyebrow */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container py-24">
          <div className="mb-14">
            <p className={eyebrow + " mb-3"}>Categories</p>
            <h2 className={sectionH2}>Browse by category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.name}
                  to={c.to}
                  className="group bg-card border border-border rounded-3xl p-8 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_hsl(0_0%_0%/0.04),0_16px_40px_hsl(0_0%_0%/0.08)] transition flex flex-col gap-3 min-h-[200px]"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="text-foreground" size={28} strokeWidth={1.75} />
                    <div className="font-mono text-[12px] text-brand-blue tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="font-sans font-semibold text-[24px] leading-[1.1] tracking-[-0.025em] mt-5">
                    {c.name}
                  </div>
                  <div className="text-[14px] text-muted-foreground leading-relaxed">{c.blurb}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUIDES — large feature cards */}
      <section className="container py-28">
        <div className="mb-16 max-w-[820px]">
          <h2 className="font-sans font-semibold text-[44px] md:text-[68px] tracking-[-0.04em] leading-[1.0]">
            Guides &amp; explainers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {guides.map((g, i) => (
            <Link
              key={g.title}
              to={g.to}
              className="group bg-card border border-border rounded-3xl p-8 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_hsl(0_0%_0%/0.04),0_16px_40px_hsl(0_0%_0%/0.08)] transition flex flex-col min-h-[340px]"
            >
              <div className="flex items-center justify-between mb-8">
                <div className={eyebrow}>{g.tag}</div>
                <div className="font-mono text-[13px] text-brand-blue tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="font-sans font-semibold text-[26px] leading-[1.15] tracking-[-0.025em]">
                {g.title}
              </h3>
              <div className="flex items-center justify-between text-[13px] text-muted-foreground mt-auto pt-10">
                <span className="flex items-center gap-2"><Clock size={14} /> {g.read}</span>
                <ArrowUpRight size={16} className="group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/car-insurance/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:gap-3 transition-all"
          >
            All car insurance guides <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;

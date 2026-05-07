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

const insuranceOptions = [
  "Car insurance",
];

const guides = [
  {
    tag: "Cover types",
    title: "Comprehensive vs third party — what's the difference?",
    to: "/car-insurance/comprehensive/",
    read: "8 min read",
  },
  {
    tag: "Pricing",
    title: "How to lower your car insurance premium without losing cover",
    to: "/car-insurance/lower-premiums/",
    read: "9 min read",
  },
  {
    tag: "Young drivers",
    title: "Why young drivers pay more — and what may help",
    to: "/car-insurance/young-drivers/",
    read: "7 min read",
  },
];

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
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* compass rose watermark */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <svg
            viewBox="0 0 500 500"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] text-primary opacity-[0.06]"
            fill="none"
            stroke="currentColor"
          >
            {/* Outer rings */}
            <circle cx="250" cy="250" r="240" strokeWidth="1" />
            <circle cx="250" cy="250" r="220" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="250" cy="250" r="180" strokeWidth="1" />
            <circle cx="250" cy="250" r="140" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="80" strokeWidth="1" />
            <circle cx="250" cy="250" r="30" strokeWidth="0.75" />
            {/* Cardinal lines */}
            <line x1="250" y1="10" x2="250" y2="490" strokeWidth="0.75" />
            <line x1="10" y1="250" x2="490" y2="250" strokeWidth="0.75" />
            {/* Diagonal lines */}
            <line x1="80" y1="80" x2="420" y2="420" strokeWidth="0.5" opacity="0.6" />
            <line x1="420" y1="80" x2="80" y2="420" strokeWidth="0.5" opacity="0.6" />
            {/* Cardinal tick marks */}
            <line x1="250" y1="10" x2="250" y2="30" strokeWidth="2" />
            <line x1="250" y1="470" x2="250" y2="490" strokeWidth="2" />
            <line x1="10" y1="250" x2="30" y2="250" strokeWidth="2" />
            <line x1="470" y1="250" x2="490" y2="250" strokeWidth="2" />
            {/* Intercardinal ticks */}
            <line x1="80" y1="80" x2="92" y2="92" strokeWidth="1.5" />
            <line x1="420" y1="80" x2="408" y2="92" strokeWidth="1.5" />
            <line x1="80" y1="420" x2="92" y2="408" strokeWidth="1.5" />
            <line x1="420" y1="420" x2="408" y2="408" strokeWidth="1.5" />
            {/* N marker */}
            <circle cx="250" cy="18" r="5" fill="currentColor" stroke="none" />
            {/* Needle north — filled */}
            <path d="M250 40 L265 250 L250 230 L235 250 Z" fill="currentColor" stroke="none" />
            {/* Needle south — outline */}
            <path d="M250 460 L265 250 L250 270 L235 250 Z" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
            {/* Hub */}
            <circle cx="250" cy="250" r="10" fill="currentColor" stroke="none" />
            <circle cx="250" cy="250" r="4" fill="white" stroke="none" />
            {/* Degree marks — every 30deg */}
            {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => {
              const r1 = 220, r2 = 232;
              const angle = ((deg - 90) * Math.PI) / 180;
              return (
                <line
                  key={deg}
                  x1={250 + r1 * Math.cos(angle)}
                  y1={250 + r1 * Math.sin(angle)}
                  x2={250 + r2 * Math.cos(angle)}
                  y2={250 + r2 * Math.sin(angle)}
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        </div>

        {/* organic background shapes */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-primary/[0.06] blur-3xl animate-blob" />
          <div className="absolute top-40 -left-40 w-[440px] h-[440px] rounded-full bg-primary/[0.06] blur-3xl animate-blob [animation-delay:-7s]" />
        </div>

        <div className="container relative py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <Sparkles size={12} className="text-primary" />
              Australian insurance comparison
            </div>
            <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Find cover that<br/>actually <span className="italic font-extrabold text-primary">fits</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Compare policies from Australia's leading insurers. No jargon, no pressure — just clear information to help you decide.
            </p>

            <div id="compare" className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="relative flex-1">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="w-full appearance-none bg-card border border-border rounded-md px-4 py-4 pr-10 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {insuranceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
              </div>
              <Link
                to="/reviews/"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-md font-medium hover:opacity-90 transition whitespace-nowrap"
              >
                Compare providers <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-3 text-sm text-muted-foreground">
              Or try the{" "}
              <Link to="/car-insurance/compare/" className="text-primary hover:underline">
                3-step comparison tool
              </Link>{" "}
              to narrow your options first.
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
              <Sparkles size={14} className="text-primary" />
              <span>Plain-English guides covering 16 Australian car insurers and 10 head-to-head comparisons</span>
            </div>
          </div>

          {/* Editorial card stack */}
          <div className="md:col-span-5 relative h-[420px] hidden md:block animate-fade-in [animation-delay:120ms]">
            <Link
              to="/car-insurance/compare/"
              className="absolute top-8 right-12 w-72 rounded-xl bg-card border border-border p-5 shadow-[0_20px_60px_-20px_hsl(160_30%_10%/0.15)] rotate-[-4deg] hover:rotate-0 transition-transform duration-500 block"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Compare car insurance</div>
              <div className="font-sans font-extrabold text-2xl tracking-tight">What to put side by side</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Cover types, excess, agreed value vs market value — the things that actually move the price.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Read the comparison guide <ArrowRight size={14} />
              </div>
            </Link>
            <Link
              to="/reviews/aami-vs-nrma/"
              className="absolute top-44 right-0 w-72 rounded-xl bg-ink text-ink-foreground p-5 shadow-[0_20px_60px_-20px_hsl(160_30%_10%/0.4)] rotate-[3deg] hover:rotate-0 transition-transform duration-500 block"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-ink-foreground/60 mb-3">Head-to-head</div>
              <div className="font-sans font-extrabold text-2xl tracking-tight">AAMI vs NRMA</div>
              <p className="text-sm text-ink-foreground/70 mt-2 leading-relaxed">
                Two of Australia's most recognisable car insurance brands compared side by side.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-primary">Read the comparison</span>
                <ArrowUpRight className="text-primary" />
              </div>
            </Link>
            <div className="absolute bottom-0 right-32 w-60 rounded-xl bg-card border border-border p-4 shadow-[0_20px_60px_-20px_hsl(160_30%_10%/0.15)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium">100% free to use</div>
                  <div className="text-xs text-muted-foreground">No sign-up required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-secondary border-y border-border">
        <div className="container py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground text-center">
          <span>General advice only — we don't recommend specific policies</span>
          <span className="text-border">·</span>
          <span>We may earn a commission from providers</span>
          <span className="text-border">·</span>
          <span>Updated May 2026</span>
        </div>
      </section>

      {/* PROVIDER DIRECTORY (compact) — moved up to sit right under the hero */}
      <section className="container py-16 md:py-20">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Provider directory</p>
        </div>
        <ProviderDirectory
          compact
          slugs={FEATURED_PROVIDER_SLUGS}
          heading="Compare 16 Australian car insurance providers"
          subheading="A snapshot of six of the most-asked-about brands. The full directory has filters and the rest."
        />
      </section>

      {/* POPULAR TOPICS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container py-20">
          <div className="flex items-end justify-between mb-10 border-b border-border pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Start here</p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
                Popular car insurance topics
              </h2>
            </div>
            <Link
              to="/car-insurance/"
              className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
            >
              All car insurance pages <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTopics.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{t.tag}</div>
                <div className="font-sans font-extrabold text-lg leading-snug tracking-tight group-hover:text-primary transition-colors">
                  {t.title}
                </div>
                <div className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary group-hover:gap-2 transition-all">
                  Read guide <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARING TWO PROVIDERS */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10 border-b border-border pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Side-by-side</p>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
              Comparing two providers?
            </h2>
          </div>
          <Link
            to="/reviews/"
            className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
          >
            All comparisons <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredComparisons.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-sans font-extrabold text-base tracking-tight group-hover:text-primary transition-colors">
                {c.label}
              </span>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight">Browse by category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.name}
                  to={c.to}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-primary mb-6" size={24} strokeWidth={1.75} />
                  <div className="font-sans font-extrabold text-lg leading-tight mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {c.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{c.blurb}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="container py-24">
        <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight">
            Guides & <span className="italic">explainers</span>
          </h2>
          <Link
            to="/car-insurance/"
            className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
          >
            All car insurance guides <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <Link
              key={g.title}
              to={g.to}
              className="group bg-card border border-border rounded-lg p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-xs uppercase tracking-[0.2em] text-primary">{g.tag}</div>
                <div className="font-sans font-extrabold text-sm text-muted-foreground tabular-nums tracking-tight">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <h3 className="font-sans font-extrabold text-2xl leading-snug mb-10 group-hover:text-primary transition-colors tracking-tight">
                {g.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Clock size={14} /> {g.read}</span>
                <ArrowUpRight size={16} className="group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
};

export default Index;

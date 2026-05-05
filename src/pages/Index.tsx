import { useState } from "react";
import {
  Heart, Car, Home, Shield, Plane, Briefcase, PawPrint, Activity,
  Star, ChevronDown, ArrowRight, ArrowUpRight, Clock, Sparkles,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/site";

const categories = [
  { name: "Health insurance", icon: Heart, providers: 18 },
  { name: "Car insurance", icon: Car, providers: 22 },
  { name: "Home & contents", icon: Home, providers: 15 },
  { name: "Life insurance", icon: Shield, providers: 12 },
  { name: "Travel insurance", icon: Plane, providers: 14 },
  { name: "Business insurance", icon: Briefcase, providers: 9 },
  { name: "Pet insurance", icon: PawPrint, providers: 11 },
  { name: "Income protection", icon: Activity, providers: 8 },
];

const insuranceOptions = [
  "Health insurance", "Car insurance", "Home & contents", "Life insurance",
  "Travel insurance", "Business insurance", "Pet insurance",
];

const tableRows = [
  { provider: "Bupa", product: "Top Hospital Gold", price: 198, excess: "$500", tier: "Gold", rating: 4.6 },
  { provider: "Medibank", product: "Premier Hospital", price: 187, excess: "$500", tier: "Gold", rating: 4.5 },
  { provider: "NIB", product: "Top Hospital Plus", price: 174, excess: "$750", tier: "Gold", rating: 4.3 },
  { provider: "HCF", product: "Silver Plus Hospital", price: 143, excess: "$500", tier: "Silver", rating: 4.4 },
  { provider: "Budget Direct", product: "Essential Hospital", price: 128, excess: "$750", tier: "Silver", rating: 4.1 },
];

const guides = [
  { tag: "Health", title: "What does hospital cover actually include?", read: "8 min read" },
  { tag: "Car", title: "Comprehensive vs. third party: what's the difference?", read: "5 min read" },
  { tag: "Life", title: "How much life cover do Australians actually need?", read: "10 min read" },
];

const tickerProviders = [
  "Bupa", "Medibank", "NIB", "HCF", "AHM", "Budget Direct", "Allianz", "AAMI",
  "Youi", "RACV", "NRMA", "QBE", "Suncorp", "TAL", "AIA", "Zurich",
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} className={i <= Math.round(rating) ? "fill-primary text-primary" : "text-border"} />
      ))}
    </div>
    <span className="text-sm text-muted-foreground">{rating.toFixed(1)}</span>
  </div>
);

const Index = () => {
  const [selected, setSelected] = useState("Health insurance");
  const [tab, setTab] = useState<"Singles" | "Couples" | "Family">("Singles");

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
              <button className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-md font-medium hover:opacity-90 transition whitespace-nowrap">
                Compare <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {["B","M","N","H"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-[10px] font-semibold text-foreground/70">{c}</div>
                ))}
              </div>
              <span>Comparing 100+ policies from 47 Australian insurers</span>
            </div>
          </div>

          {/* Editorial card stack */}
          <div className="md:col-span-5 relative h-[420px] hidden md:block animate-fade-in [animation-delay:120ms]">
            <div className="absolute top-8 right-12 w-72 rounded-xl bg-card border border-border p-5 shadow-[0_20px_60px_-20px_hsl(160_30%_10%/0.15)] rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Hospital · Gold</div>
              <div className="font-sans font-extrabold text-2xl tracking-tight">Bupa</div>
              <div className="text-sm text-muted-foreground">Top Hospital Gold</div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="font-sans font-extrabold text-3xl tracking-tight">$198<span className="text-base text-muted-foreground">/mo</span></div>
                  <div className="text-[11px] text-muted-foreground">after rebate</div>
                </div>
                <Stars rating={4.6} />
              </div>
            </div>
            <div className="absolute top-44 right-0 w-72 rounded-xl bg-ink text-ink-foreground p-5 shadow-[0_20px_60px_-20px_hsl(160_30%_10%/0.4)] rotate-[3deg] hover:rotate-0 transition-transform duration-500">
              <div className="text-xs uppercase tracking-[0.18em] text-ink-foreground/60 mb-3">Recommended match</div>
              <div className="font-sans font-extrabold text-2xl tracking-tight">HCF</div>
              <div className="text-sm text-ink-foreground/60">Silver Plus Hospital</div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="font-sans font-extrabold text-3xl text-primary tracking-tight">$143<span className="text-base text-ink-foreground/60">/mo</span></div>
                  <div className="text-[11px] text-ink-foreground/50">save $55 vs avg</div>
                </div>
                <ArrowUpRight className="text-primary" />
              </div>
            </div>
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
          <span>Updated May 2025</span>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight">Browse by category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.name}
                href="#"
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="text-primary mb-6" size={24} strokeWidth={1.75} />
                <div className="font-sans font-extrabold text-lg leading-tight mb-1 tracking-tight">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.providers} providers</div>
              </a>
            );
          })}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Sample comparison</p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
                Health insurance — <span className="italic">Hospital cover</span>
              </h2>
            </div>
            <div className="flex gap-2 bg-card border border-border rounded-full p-1 w-fit">
              {(["Singles", "Couples", "Family"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                    tab === t ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-x-auto">
            <table className="w-full min-w-[820px] text-left">
              <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 font-medium">Provider</th>
                  <th className="px-6 py-4 font-medium">Monthly est.</th>
                  <th className="px-6 py-4 font-medium">Excess</th>
                  <th className="px-6 py-4 font-medium">Cover type</th>
                  <th className="px-6 py-4 font-medium">Rating</th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((r) => (
                  <tr key={r.provider} className="border-b border-border last:border-0 hover:bg-secondary/40 transition">
                    <td className="px-6 py-5">
                      <div className="font-sans font-extrabold text-lg tracking-tight">{r.provider}</div>
                      <div className="text-sm text-muted-foreground">{r.product}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="font-medium">${r.price}</div>
                      <div className="text-xs text-muted-foreground">after rebate</div>
                    </td>
                    <td className="px-6 py-5 text-sm">{r.excess}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${
                        r.tier === "Gold"
                          ? "bg-[hsl(45_80%_95%)] text-[hsl(35_70%_30%)] border-[hsl(45_70%_80%)]"
                          : "bg-muted text-foreground/70 border-border"
                      }`}>{r.tier}</span>
                    </td>
                    <td className="px-6 py-5"><Stars rating={r.rating} /></td>
                    <td className="px-6 py-5 text-right">
                      <button className="group inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition whitespace-nowrap">
                        Get quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-card border border-border rounded-lg p-5 text-sm text-muted-foreground leading-relaxed">
            The information above is general in nature and does not take into account your personal circumstances. Prices are estimates only. We may receive a commission if you click through to a provider. Always read the PDS before purchasing.
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="container py-24">
        <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight">
            Guides & <span className="italic">explainers</span>
          </h2>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
            All guides <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <a
              key={g.title}
              href="#"
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
            </a>
          ))}
        </div>
      </section>

    </>
  );
};

export default Index;

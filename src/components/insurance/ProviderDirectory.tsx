import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Search, X } from "lucide-react";
import { PROVIDERS } from "@/lib/providers-data";
import {
  DIRECTORY_FACTS,
  BRAND_TYPE_LABELS,
  type BrandType,
  type DirectoryFacts,
} from "@/lib/provider-directory-data";
import { ProviderLogo } from "@/components/insurance/ProviderLogo";
import { trackEvent, trackOutboundClick } from "@/lib/analytics";

type DirectoryEvent =
  | { type: "filter_changed"; brandType: BrandType | "all"; query: string }
  | { type: "review_clicked"; slug: string }
  | { type: "quote_clicked"; slug: string; destination: string };

const track = (event: DirectoryEvent) => {
  if (typeof window === "undefined") return;
  if (import.meta.env.DEV) console.debug("[ProviderDirectory]", event);
  if (event.type === "review_clicked") {
    trackEvent("review_clicked", { provider: event.slug, surface: "directory" });
  } else if (event.type === "quote_clicked") {
    trackOutboundClick({
      provider: event.slug,
      surface: "directory",
      destination: event.destination,
    });
  } else if (event.type === "filter_changed") {
    trackEvent("directory_filter", { brand_type: event.brandType, query: event.query });
  }
};

/**
 * Deterministic neutral palette for the initials avatar, six muted swatches
 * cycled by alphabetical position. Intentionally NOT brand-derived.
 */
const AVATAR_PALETTE = [
  "bg-emerald-50 text-emerald-700",
  "bg-sky-50 text-sky-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-violet-50 text-violet-700",
  "bg-teal-50 text-teal-700",
];

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const ALL_BRAND_TYPES: { value: BrandType | "all"; label: string }[] = [
  { value: "all", label: "All providers" },
  { value: "mainstream", label: BRAND_TYPE_LABELS.mainstream },
  { value: "budget", label: BRAND_TYPE_LABELS.budget },
  { value: "specialist", label: BRAND_TYPE_LABELS.specialist },
  { value: "member-club", label: BRAND_TYPE_LABELS["member-club"] },
  { value: "retail-branded", label: BRAND_TYPE_LABELS["retail-branded"] },
];

type ProviderRow = {
  slug: string;
  name: string;
  path: string;
  website: string;
  facts: DirectoryFacts;
  paletteIndex: number;
};

const ROWS: ProviderRow[] = [...PROVIDERS]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((p, i) => {
    const facts = DIRECTORY_FACTS[p.slug];
    if (!facts) {
      throw new Error(`Missing directory facts for provider slug "${p.slug}"`);
    }
    return {
      slug: p.slug,
      name: p.name,
      path: p.path,
      website: p.website,
      facts,
      paletteIndex: i % AVATAR_PALETTE.length,
    };
  });

const ROW_BY_SLUG = new Map(ROWS.map((r) => [r.slug, r]));

type Props = {
  /** Compact mode: hides search, filters and methodology; adds "view all" footer CTA. */
  compact?: boolean;
  /** Optional explicit slug list, shows only these, in given order. Implies compact view. */
  slugs?: string[];
  /** Optional max rows when not using `slugs`. */
  limit?: number;
  /** Heading override. Default depends on mode. */
  heading?: string;
  /** Subheading override. */
  subheading?: string;
};

export const ProviderDirectory = ({
  compact = false,
  slugs,
  limit,
  heading,
  subheading,
}: Props = {}) => {
  const isCompact = compact || Boolean(slugs) || Boolean(limit);

  const baseRows = useMemo<ProviderRow[]>(() => {
    if (slugs) {
      return slugs
        .map((s) => ROW_BY_SLUG.get(s))
        .filter((r): r is ProviderRow => Boolean(r));
    }
    if (limit) return ROWS.slice(0, limit);
    return ROWS;
  }, [slugs, limit]);

  const [brandType, setBrandType] = useState<BrandType | "all">("all");
  const [query, setQuery] = useState("");
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  const filtered = useMemo(() => {
    if (isCompact) return baseRows;
    const q = query.trim().toLowerCase();
    return baseRows.filter((r) => {
      if (brandType !== "all" && r.facts.brandType !== brandType) return false;
      if (q && !r.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [baseRows, brandType, query, isCompact]);

  const onBrandTypeChange = (next: BrandType | "all") => {
    setBrandType(next);
    track({ type: "filter_changed", brandType: next, query });
  };

  const onQueryChange = (next: string) => {
    setQuery(next);
    track({ type: "filter_changed", brandType, query: next });
  };

  const reset = () => {
    setBrandType("all");
    setQuery("");
  };

  const hasFilters = brandType !== "all" || query.length > 0;

  return (
    <section
      aria-label="Provider directory"
      className="bg-card border border-border rounded-2xl p-5 md:p-7 shadow-[0_20px_60px_-30px_hsl(160_30%_10%/0.18)]"
    >
      {/* Header + (full mode only) search */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
        <div>
          <h2
            className="text-[20px] md:text-[24px] tracking-[-0.02em] leading-[1.15]"
            style={{
              fontFamily: '"EB Garamond", "Fraunces", serif',
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            {heading ?? "Australian car insurance provider directory"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {subheading ??
              (isCompact
                ? `Showing ${filtered.length} of ${ROWS.length} providers`
                : `${filtered.length} of ${ROWS.length} providers · sorted alphabetically`)}
          </p>
        </div>
        {!isCompact && (
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search providers"
              aria-label="Search providers by name"
              className="w-full bg-background border border-border rounded-md pl-9 pr-9 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
              >
                <X size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Brand-type chips, hidden in compact mode */}
      {!isCompact && (
        <div className="flex flex-wrap gap-2 mb-6">
          {ALL_BRAND_TYPES.map((b) => {
            const isActive = brandType === b.value;
            return (
              <button
                key={b.value}
                type="button"
                onClick={() => onBrandTypeChange(b.value)}
                aria-pressed={isActive}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/70 border-border hover:border-primary hover:text-foreground"
                }`}
              >
                {b.label}
              </button>
            );
          })}
          {hasFilters && (
            <button
              type="button"
              onClick={reset}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-transparent text-muted-foreground hover:text-foreground hover:underline transition"
            >
              Clear filters
            </button>
          )}
        </div>
      )}

      {/* Provider rows */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="mb-4">No providers match those filters.</p>
          <button
            type="button"
            onClick={reset}
            className="text-primary hover:underline text-sm font-medium"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="divide-y divide-border border border-border rounded-lg overflow-hidden bg-background">
          {filtered.map((row) => (
            <li
              key={row.slug}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)_auto] gap-5 lg:gap-6 p-5 md:p-6 hover:bg-secondary/30 transition-colors"
            >
              {/* Left: logo + name + tagline + badges */}
              <div className="flex items-start gap-4 min-w-0">
                <ProviderLogo slug={row.slug} name={row.name} size="md" />
                <div className="min-w-0">
                  <div className="font-sans font-extrabold text-lg tracking-tight">
                    {row.name}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {row.facts.taglineShort}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {row.facts.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-medium uppercase tracking-[0.1em] bg-secondary text-foreground/70 border border-border rounded-full px-2.5 py-1"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle: key facts */}
              <dl className="grid grid-cols-2 gap-x-5 gap-y-2 text-xs">
                <div>
                  <dt className="text-muted-foreground uppercase tracking-[0.1em] mb-0.5">
                    Distribution
                  </dt>
                  <dd className="text-foreground leading-tight">
                    {row.facts.keyFacts.distribution}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase tracking-[0.1em] mb-0.5">
                    Cover types
                  </dt>
                  <dd className="text-foreground leading-tight">
                    {row.facts.keyFacts.coverTypes}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase tracking-[0.1em] mb-0.5">
                    Geography
                  </dt>
                  <dd className="text-foreground leading-tight">
                    {row.facts.keyFacts.geography}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase tracking-[0.1em] mb-0.5">
                    Bundling
                  </dt>
                  <dd className="text-foreground leading-tight">
                    {row.facts.keyFacts.bundling}
                  </dd>
                </div>
              </dl>

              {/* Right: actions */}
              <div className="flex flex-row lg:flex-col gap-2 lg:items-stretch shrink-0">
                <Link
                  to={row.path}
                  onClick={() => track({ type: "review_clicked", slug: row.slug })}
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition whitespace-nowrap"
                >
                  Read review
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <a
                  href={`${row.website}?utm_source=coverscout&utm_medium=directory&utm_campaign=${row.slug}`}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  onClick={() => track({ type: "quote_clicked", slug: row.slug, destination: row.website })}
                  className="group inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-4 py-2.5 rounded-md text-sm font-medium hover:bg-secondary transition whitespace-nowrap"
                >
                  Get quote
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Compact mode: link to full directory */}
      {isCompact && filtered.length < ROWS.length && (
        <div className="mt-5 flex justify-center">
          <Link
            to="/reviews/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            See all {ROWS.length} providers and filters
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}

      {/* Full mode: methodology / why no scores */}
      {!isCompact && (
        <div className="mt-6 border-t border-border pt-5">
          <button
            type="button"
            onClick={() => setMethodologyOpen((v) => !v)}
            aria-expanded={methodologyOpen}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <Info size={14} className="text-primary" />
            Why we don't score insurers numerically
          </button>
          {methodologyOpen && (
            <div className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl space-y-3">
              <p>
                We deliberately don't run a numerical scoring system on Australian car insurers.
                Building a defensible score would require a published methodology, calibrated inputs
                (claims data, customer satisfaction surveys, feature analysis) and ongoing research,
                and even then, scores compress nuance into a single number that often hides the
                trade-offs that matter.
              </p>
              <p>
                Instead, every provider here gets a plain-English review and a categorical summary
                based on facts you can verify. The trade-off you're weighing depends on your vehicle,
                location and what you value in an insurer, that's the question the directory exists
                to support.
              </p>
              <p>
                For background on how to compare car insurance properly, see our{" "}
                <Link to="/car-insurance/compare/" className="text-primary hover:underline">
                  comparison guide
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProviderDirectory;

import { ArrowRight } from "lucide-react";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

export type ComparisonRow = {
  id: string;
  provider: string;
  coverType: string;
  keyFeatures: string[];
  optionalExtras?: string[];
  excessOptions?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Per-row disclaimer / sponsored marker */
  disclaimer?: string;
};

type Props = {
  rows: ComparisonRow[];
  /** Block-level disclaimer shown beneath the table. */
  footnote?: string;
  className?: string;
};

/**
 * Reusable comparison table.
 * Columns: Provider · Cover type · Key features · Optional extras · Excess options · Quote CTA · Disclaimer
 */
export const InsuranceComparisonTable = ({ rows, footnote, className = "" }: Props) => {
  // TODO: wire affiliate links once partner data exists
  return (
    <div className={className}>
      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full min-w-[920px] text-left">
          <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-medium">Provider</th>
              <th className="px-6 py-4 font-medium">Cover type</th>
              <th className="px-6 py-4 font-medium">Key features</th>
              <th className="px-6 py-4 font-medium">Optional extras</th>
              <th className="px-6 py-4 font-medium">Excess options</th>
              <th className="px-6 py-4 font-medium" aria-label="Quote" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-border last:border-0 align-top">
                <td className="px-6 py-5">
                  <div className="font-sans font-extrabold text-lg tracking-tight">{row.provider}</div>
                  {row.disclaimer && (
                    <div className="text-[11px] text-muted-foreground mt-1">{row.disclaimer}</div>
                  )}
                </td>
                <td className="px-6 py-5 text-sm">{row.coverType}</td>
                <td className="px-6 py-5 text-sm">
                  <ul className="list-disc pl-4 space-y-1">
                    {row.keyFeatures.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </td>
                <td className="px-6 py-5 text-sm">
                  {row.optionalExtras?.length ? (
                    <ul className="list-disc pl-4 space-y-1">
                      {row.optionalExtras.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-6 py-5 text-sm">{row.excessOptions ?? "—"}</td>
                <td className="px-6 py-5 text-right">
                  <a
                    href={row.ctaHref ?? "#"}
                    rel="sponsored nofollow"
                    className="group inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition whitespace-nowrap"
                  >
                    {row.ctaLabel ?? "Get quote"}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnote && (
        <div className="mt-4 text-sm text-muted-foreground leading-relaxed">{footnote}</div>
      )}

      <AffiliateDisclosure className="mt-4" />
    </div>
  );
};

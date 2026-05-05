import { ArrowRight } from "lucide-react";

export type ProviderCardProps = {
  name: string;
  /** Short plain-English description. */
  description: string;
  keyFeatures: string[];
  /** URL the CTA points to (typically the affiliate or quote link). */
  ctaHref?: string;
  ctaLabel?: string;
  /** Optional placeholder logo URL. Falls back to a wordmark tile. */
  logoUrl?: string;
  /** Per-card affiliate / sponsored disclosure line. */
  disclosure?: string;
  className?: string;
};

export const ProviderCard = ({
  name,
  description,
  keyFeatures,
  ctaHref = "#",
  ctaLabel = "Visit provider",
  logoUrl,
  disclosure,
  className = "",
}: ProviderCardProps) => {
  // TODO: wire real provider logos and affiliate links once partner data exists
  return (
    <div className={`bg-card border border-border rounded-lg p-6 flex flex-col h-full ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {logoUrl ? (
          <img src={logoUrl} alt={`${name} logo`} className="w-10 h-10 rounded-md object-contain" />
        ) : (
          <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary font-sans font-extrabold text-sm">
            {name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="font-sans font-extrabold text-lg tracking-tight">{name}</div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

      <ul className="text-sm space-y-1.5 mb-6">
        {keyFeatures.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-primary">·</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a
          href={ctaHref}
          rel="sponsored nofollow"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          {ctaLabel}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </a>
        {disclosure && (
          <div className="mt-3 text-[11px] text-muted-foreground leading-relaxed">{disclosure}</div>
        )}
      </div>
    </div>
  );
};

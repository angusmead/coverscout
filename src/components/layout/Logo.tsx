import { Link } from "react-router-dom";

const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.45" />
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.25" />
    <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      <line x1="16" y1="0.5" x2="16" y2="3" />
      <line x1="16" y1="29" x2="16" y2="31.5" />
      <line x1="0.5" y1="16" x2="3" y2="16" />
      <line x1="29" y1="16" x2="31.5" y2="16" />
    </g>
    <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55">
      <line x1="5.2" y1="5.2" x2="6.6" y2="6.6" />
      <line x1="26.8" y1="5.2" x2="25.4" y2="6.6" />
      <line x1="5.2" y1="26.8" x2="6.6" y2="25.4" />
      <line x1="26.8" y1="26.8" x2="25.4" y2="25.4" />
    </g>
    <circle cx="16" cy="5.2" r="0.9" fill="currentColor" />
    <path d="M16 6.5 L18.4 16 L16 14.6 L13.6 16 Z" fill="currentColor" />
    <path d="M16 25.5 L18.4 16 L16 17.4 L13.6 16 Z" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" opacity="0.55" />
    <circle cx="16" cy="16" r="1.6" fill="currentColor" />
    <circle cx="16" cy="16" r="0.6" fill="hsl(var(--background))" />
  </svg>
);

const LOGO_FONTS: { label: string; family: string; weight: number; tracking: string; case: "lower" | "normal" }[] = [
  { label: "Satoshi",       family: '"Satoshi", system-ui, sans-serif',      weight: 900, tracking: "-0.045em", case: "normal" },
  { label: "Inter (tight)", family: '"Inter", system-ui, sans-serif',        weight: 800, tracking: "-0.045em", case: "normal" },
  { label: "Aeonik",        family: '"Aeonik", system-ui, sans-serif',       weight: 700, tracking: "-0.03em",  case: "normal" },
  { label: "Geist",         family: '"Geist", system-ui, sans-serif',        weight: 700, tracking: "-0.035em", case: "normal" },
  { label: "Manrope",       family: '"Manrope", system-ui, sans-serif',      weight: 800, tracking: "-0.04em",  case: "normal" },
];

export const Logo = ({ className = "", invert = false, fontIndex = 0 }: { className?: string; invert?: boolean; fontIndex?: number }) => {
  const f = LOGO_FONTS[fontIndex];
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 text-[1.6rem] leading-none ${className}`}
      style={{ fontFamily: f.family, fontWeight: f.weight, letterSpacing: f.tracking, textTransform: f.case === "lower" ? "lowercase" : "none" }}
    >
      <LogoMark className="w-[22px] h-[22px] text-primary transition-transform duration-700 group-hover:rotate-[40deg]" />
      <span>
        <span className={invert ? "text-ink-foreground" : "text-foreground"}>Cover</span>
        <span className="text-primary">Scout</span>
      </span>
    </Link>
  );
};

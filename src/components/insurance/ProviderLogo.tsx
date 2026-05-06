import { useState } from "react";

type Size = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<Size, string> = {
  sm: "w-10 h-10 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-16 h-16 text-base",
};

const PADDING_CLASSES: Record<Size, string> = {
  sm: "p-1",
  md: "p-1.5",
  lg: "p-2",
};

const FALLBACK_PALETTE = [
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

const paletteFor = (slug: string) => {
  let sum = 0;
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i);
  return FALLBACK_PALETTE[sum % FALLBACK_PALETTE.length];
};

type Props = {
  slug: string;
  name: string;
  size?: Size;
  className?: string;
};

export const ProviderLogo = ({ slug, name, size = "md", className = "" }: Props) => {
  const [errored, setErrored] = useState(false);

  const sizeClass = SIZE_CLASSES[size];

  if (errored) {
    return (
      <div
        className={`${sizeClass} rounded-lg flex items-center justify-center font-sans font-extrabold shrink-0 ${paletteFor(
          slug,
        )} ${className}`}
        aria-hidden
      >
        {initialsOf(name)}
      </div>
    );
  }

  return (
    <div
      className={`${sizeClass} ${PADDING_CLASSES[size]} rounded-lg bg-white border border-border flex items-center justify-center shrink-0 ${className}`}
    >
      <img
        src={`/${slug}.png`}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => setErrored(true)}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default ProviderLogo;

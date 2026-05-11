import { Link } from "react-router-dom";

const LOGO_ASPECT = 1648 / 314;

export const Logo = ({
  className = "",
  invert = false,
  height = 28,
}: {
  className?: string;
  invert?: boolean;
  height?: number;
}) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
      aria-label="CoverScout"
    >
      <div
        style={{
          width: `${Math.round(height * LOGO_ASPECT)}px`,
          height: `${height}px`,
          backgroundColor: invert ? "white" : "hsl(var(--brand-blue))",
          WebkitMaskImage: "url(/coverscout-logo.png)",
          maskImage: "url(/coverscout-logo.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
        aria-hidden="true"
      />
    </Link>
  );
};

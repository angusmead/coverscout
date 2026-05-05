import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { PRIMARY_NAV, COMPANY_LINKS } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo />
            {/* TODO: replace tagline */}
            <p className="mt-4 text-muted-foreground max-w-xs leading-relaxed">
              Plain-English guides and comparisons to help Australians understand their insurance options.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Compare</div>
            <ul className="space-y-3 text-sm">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-primary transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Company</div>
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-primary transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 text-xs text-muted-foreground leading-relaxed">
          {/* TODO: confirm legal copy with compliance review */}
          CoverScout provides general information only and does not provide personal financial advice. We may receive
          commissions from insurers. Always read the Product Disclosure Statement (PDS) and Target Market Determination
          (TMD) before deciding. © {new Date().getFullYear()} CoverScout Pty Ltd
        </div>
      </div>
    </footer>
  );
};

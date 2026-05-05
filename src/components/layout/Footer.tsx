import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { PRIMARY_NAV } from "@/lib/site";

const CAR_INSURANCE_LINKS = [
  { label: "Car insurance hub", to: "/car-insurance/" },
  { label: "Compare car insurance", to: "/car-insurance/compare/" },
  { label: "Get quotes", to: "/car-insurance/quotes/" },
  { label: "Lower your premium", to: "/car-insurance/lower-premiums/" },
  { label: "Comprehensive cover", to: "/car-insurance/comprehensive/" },
  { label: "Third party cover", to: "/car-insurance/third-party/" },
  { label: "Young drivers", to: "/car-insurance/young-drivers/" },
  { label: "Over 50s", to: "/car-insurance/over-50s/" },
];

const REVIEW_LINKS = [
  { label: "All provider reviews", to: "/reviews/" },
  { label: "AAMI", to: "/reviews/aami/" },
  { label: "NRMA", to: "/reviews/nrma/" },
  { label: "Budget Direct", to: "/reviews/budget-direct/" },
  { label: "Youi", to: "/reviews/youi/" },
  { label: "Allianz", to: "/reviews/allianz/" },
  { label: "AAMI vs NRMA", to: "/reviews/aami-vs-nrma/" },
  { label: "Budget Direct vs Youi", to: "/reviews/budget-direct-vs-youi/" },
];

const COMPANY_LINKS = [
  { label: "About CoverScout", to: "/about/" },
  { label: "How we make money", to: "/how-we-make-money/" },
  { label: "Privacy policy", to: "/privacy/" },
  { label: "Contact", to: "/contact/" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-xs leading-relaxed">
              Plain-English guides and comparisons to help Australians understand their insurance options.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Insurance</div>
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
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Car insurance</div>
            <ul className="space-y-3 text-sm">
              {CAR_INSURANCE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-primary transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Reviews</div>
            <ul className="space-y-3 text-sm">
              {REVIEW_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-primary transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">About</div>
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
          CoverScout provides general information only and does not provide personal financial advice.
          We may receive commissions from insurers — see{" "}
          <Link to="/how-we-make-money/" className="text-primary hover:underline">
            how we make money
          </Link>
          . Always read the Product Disclosure Statement (PDS) and Target Market Determination (TMD)
          before deciding. © {new Date().getFullYear()} CoverScout · ABN 61 941 800 664
        </div>
      </div>
    </footer>
  );
};

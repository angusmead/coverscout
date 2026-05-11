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

const linkStyle = "text-[13.5px] text-muted-foreground hover:text-foreground transition-colors";
const headingStyle = "text-[11px] uppercase tracking-[0.08em] font-semibold text-muted-foreground/70 mb-4";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 text-[14px] text-muted-foreground leading-relaxed max-w-xs">
              Plain-English guides and comparisons to help Australians understand their insurance options.
            </p>
          </div>
          <div>
            <div className={headingStyle}>Insurance</div>
            <ul className="space-y-3">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={headingStyle}>Car insurance</div>
            <ul className="space-y-3">
              {CAR_INSURANCE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={headingStyle}>Reviews</div>
            <ul className="space-y-3">
              {REVIEW_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={headingStyle}>About</div>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 text-[12.5px] text-muted-foreground leading-relaxed">
          CoverScout provides general information only and does not provide personal financial advice.
          We may receive commissions from insurers, see{" "}
          <Link to="/how-we-make-money/" className="text-foreground hover:underline">
            how we make money
          </Link>
          . Always read the Product Disclosure Statement (PDS) and Target Market Determination (TMD)
          before deciding. © {new Date().getFullYear()} CoverScout · ABN 61 941 800 664
        </div>
      </div>
    </footer>
  );
};

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page not found"
        description="The page you were looking for doesn't exist."
        canonicalPath={location.pathname}
        noindex
      />
      <div className="container py-24 md:py-32 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">404</div>
        <h1 className="font-sans font-semibold text-[44px] md:text-[64px] tracking-[-0.035em] leading-[1.02] mb-8">Page not found</h1>
        <p className="text-muted-foreground mb-8">The page you were looking for doesn't exist or has moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition">
          Return home
        </Link>
      </div>
    </>
  );
};

export default NotFound;

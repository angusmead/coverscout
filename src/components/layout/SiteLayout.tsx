import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Providers } from "@/lib/providers";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { COMPLIANCE_STRIP } from "@/lib/site";
import { trackPageView } from "@/lib/analytics";

export const SiteLayout = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  // GA fires page_view for the initial load via gtag('config'). Subsequent
  // client-side route changes don't, so we fire them manually here. Skip
  // the first render to avoid double-counting the initial page.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <div className="border-t border-border bg-secondary/60">
          <div className="container py-3 text-center text-[12px] text-muted-foreground">
            {COMPLIANCE_STRIP}
          </div>
        </div>
        <Footer />
      </div>
    </Providers>
  );
};

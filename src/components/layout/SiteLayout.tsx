import { Outlet } from "react-router-dom";
import { Providers } from "@/lib/providers";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { COMPLIANCE_STRIP } from "@/lib/site";

export const SiteLayout = () => {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <div className="border-t border-border bg-secondary">
          <div className="container py-3 text-center text-xs text-muted-foreground">
            {COMPLIANCE_STRIP}
          </div>
        </div>
        <Footer />
      </div>
    </Providers>
  );
};

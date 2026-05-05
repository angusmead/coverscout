import { useLocation } from "react-router-dom";
import { SEO } from "./SEO";
import { Breadcrumbs } from "./Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import { getRouteMeta } from "@/lib/routes-meta";

/**
 * Renders for any registered route that hasn't been written yet.
 * SEO is real (so canonical/sitemap behave correctly) but the page is noindexed
 * until copy is added. Replace per-route in Step B/C with bespoke page components.
 */
export const PlaceholderPage = () => {
  const { pathname } = useLocation();
  const meta = getRouteMeta(pathname);

  if (!meta) {
    // Should never happen if routes.tsx and routes-meta.ts stay in sync.
    return (
      <div className="container py-24 text-muted-foreground">
        Route metadata missing for <code>{pathname}</code>.
      </div>
    );
  }

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.path}
        jsonLd={breadcrumbSchema(meta.breadcrumbs)}
        noindex
      />
      <div className="container py-12 md:py-16">
        <Breadcrumbs items={meta.breadcrumbs} className="mb-6" />
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
          {meta.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">{meta.description}</p>

        <div className="mt-10 rounded-lg border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          {/* TODO: replace this placeholder with real page content */}
          Page content coming soon. This route is registered for SEO/sitemap purposes and is
          currently <code className="text-foreground">noindex</code>.
        </div>
      </div>
    </>
  );
};

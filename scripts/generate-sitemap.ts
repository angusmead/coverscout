/**
 * Generates dist/sitemap.xml from the route registry.
 * Run after `vite-react-ssg build`. Skips routes flagged as placeholders or
 * explicitly excluded via `inSitemap: false`.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { ROUTES_META } from "../src/lib/routes-meta";
import { SITE_URL } from "../src/lib/site";

const today = new Date().toISOString().split("T")[0];

const urls = ROUTES_META
  .filter((r) => r.inSitemap !== false && !r.placeholder)
  .map((r) => `${SITE_URL}${r.path}`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outPath = resolve(process.cwd(), "dist/sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`✓ sitemap.xml written with ${urls.length} URL(s) → ${outPath}`);

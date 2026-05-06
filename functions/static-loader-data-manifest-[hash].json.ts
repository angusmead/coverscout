/**
 * Fallback for stale static-loader-data-manifest fetches.
 *
 * vite-react-ssg bakes a build-specific hash into every HTML page and fetches
 * /static-loader-data-manifest-<hash>.json on boot. When a deploy lands while
 * a user's browser is holding HTML from the previous build, that fetch hits
 * the new origin and Cloudflare's SPA fallback returns index.html — the JSON
 * parser then crashes the app with "Unexpected token '<'".
 *
 * Cloudflare Pages serves static files in priority over functions, so this
 * function only fires when no real manifest with that hash exists. We return
 * an empty object so the app boots cleanly with no loader data (this codebase
 * doesn't use any loaders, so the empty object is functionally identical).
 */
export const onRequest: PagesFunction = () =>
  new Response("{}", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

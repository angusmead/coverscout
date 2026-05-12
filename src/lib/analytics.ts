/**
 * Thin wrapper around gtag.js (GA4). The site-wide tag is loaded in index.html
 * with `send_page_view: false` so this module owns every page_view event,
 * which lets SPA route changes get counted correctly.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const gtag = (...args: unknown[]) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag(...(args as Parameters<NonNullable<Window["gtag"]>>));
};

export const trackEvent = (name: string, params?: EventParams) => {
  gtag("event", name, params ?? {});
};

export const trackPageView = (path: string, title?: string) => {
  if (typeof window === "undefined") return;
  gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.origin + path,
  });
};

export type OutboundSurface = "review_lead" | "review_cta" | "vs_cta" | "directory";

export const trackOutboundClick = (params: {
  provider: string;
  surface: OutboundSurface;
  destination: string;
  context?: string;
}) => {
  trackEvent("outbound_click", {
    provider: params.provider,
    surface: params.surface,
    destination: params.destination,
    context: params.context,
  });
};

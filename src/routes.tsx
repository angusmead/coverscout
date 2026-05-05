import type { ReactNode } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import CarInsuranceHub from "@/pages/car-insurance/CarInsuranceHub";
import CarInsuranceCompare from "@/pages/car-insurance/CarInsuranceCompare";
import CarInsuranceQuotes from "@/pages/car-insurance/CarInsuranceQuotes";
import CarInsuranceCheap from "@/pages/car-insurance/CarInsuranceCheap";
import CarInsuranceBest from "@/pages/car-insurance/CarInsuranceBest";
import CarInsuranceYoungDrivers from "@/pages/car-insurance/CarInsuranceYoungDrivers";
import CarInsuranceOver50s from "@/pages/car-insurance/CarInsuranceOver50s";
import CarInsuranceThirdParty from "@/pages/car-insurance/CarInsuranceThirdParty";
import CarInsuranceComprehensive from "@/pages/car-insurance/CarInsuranceComprehensive";
import CarInsuranceExcess from "@/pages/car-insurance/CarInsuranceExcess";
import CarInsuranceLowerPremiums from "@/pages/car-insurance/CarInsuranceLowerPremiums";
import CarInsuranceNoClaimBonus from "@/pages/car-insurance/CarInsuranceNoClaimBonus";
import CarInsuranceClaims from "@/pages/car-insurance/CarInsuranceClaims";
import CarInsurancePayMonthly from "@/pages/car-insurance/CarInsurancePayMonthly";
import CarInsuranceHighRiskDrivers from "@/pages/car-insurance/CarInsuranceHighRiskDrivers";
import CarInsuranceHowMuch from "@/pages/car-insurance/CarInsuranceHowMuch";
import ReviewsHub from "@/pages/ReviewsHub";
import ProviderCategoryPage from "@/pages/ProviderCategoryPage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import HowWeMakeMoney from "@/pages/HowWeMakeMoney";
import { ProviderReviewPage } from "@/components/ProviderReviewPage";
import { ProviderVsPage } from "@/components/ProviderVsPage";
import { PROVIDERS } from "@/lib/providers-data";
import { COMPARISONS } from "@/lib/comparisons-data";
import { ROUTES_META } from "@/lib/routes-meta";

/**
 * Central route registry. Built routes are listed in PAGE_REGISTRY below;
 * everything else in ROUTES_META falls back to PlaceholderPage so SSG and
 * the sitemap generator stay in sync with future pages.
 */

const PAGE_REGISTRY: Record<string, ReactNode> = {
  "/car-insurance/": <CarInsuranceHub />,
  "/car-insurance/compare/": <CarInsuranceCompare />,
  "/car-insurance/quotes/": <CarInsuranceQuotes />,
  "/car-insurance/cheap/": <CarInsuranceCheap />,
  "/car-insurance/best/": <CarInsuranceBest />,
  "/car-insurance/young-drivers/": <CarInsuranceYoungDrivers />,
  "/car-insurance/over-50s/": <CarInsuranceOver50s />,
  "/car-insurance/third-party/": <CarInsuranceThirdParty />,
  "/car-insurance/comprehensive/": <CarInsuranceComprehensive />,
  "/car-insurance/excess/": <CarInsuranceExcess />,
  "/car-insurance/lower-premiums/": <CarInsuranceLowerPremiums />,
  "/car-insurance/no-claim-bonus/": <CarInsuranceNoClaimBonus />,
  "/car-insurance/claims/": <CarInsuranceClaims />,
  "/car-insurance/pay-monthly/": <CarInsurancePayMonthly />,
  "/car-insurance/high-risk-drivers/": <CarInsuranceHighRiskDrivers />,
  "/car-insurance/how-much-is-car-insurance/": <CarInsuranceHowMuch />,
  "/reviews/": <ReviewsHub />,
  "/reviews/budget-friendly/": <ProviderCategoryPage category="budget-friendly" />,
  "/reviews/balanced/": <ProviderCategoryPage category="balanced" />,
  "/reviews/broader-cover/": <ProviderCategoryPage category="broader-cover" />,
  "/about/": <About />,
  "/contact/": <Contact />,
  "/privacy/": <Privacy />,
  "/how-we-make-money/": <HowWeMakeMoney />,
  ...Object.fromEntries(
    PROVIDERS.map((p) => [p.path, <ProviderReviewPage slug={p.slug} />] as const),
  ),
  ...Object.fromEntries(
    COMPARISONS.map((c) => [c.path, <ProviderVsPage path={c.path} />] as const),
  ),
};

const childRoutes = ROUTES_META
  .filter((meta) => meta.path !== "/")
  .map((meta) => ({
    // child routes drop the leading slash
    path: meta.path.replace(/^\//, ""),
    element: PAGE_REGISTRY[meta.path] ?? <PlaceholderPage />,
  }));

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Index /> },
      ...childRoutes,
      { path: "*", element: <NotFound /> },
    ],
  },
];

import { Head as Helmet } from "vite-react-ssg";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type SEOProps = {
  title: string;
  description: string;
  /** Path-only canonical (e.g. "/car-insurance/"). Will be joined to SITE_URL. */
  canonicalPath: string;
  /** Optional JSON-LD payloads. Pass already-built schema objects from lib/schema.ts. */
  jsonLd?: object | object[];
  /** Set to true for noindex pages (placeholders, search results, etc.). */
  noindex?: boolean;
};

export const SEO = ({ title, description, canonicalPath, jsonLd, noindex }: SEOProps) => {
  const canonical = `${SITE_URL}${canonicalPath}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

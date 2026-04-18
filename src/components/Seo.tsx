import { Helmet } from "react-helmet-async";

const SITE_NAME = "Barr Interventions & Consulting";
const BASE_URL = "https://barrinterventions.com";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: BASE_URL,
  image: DEFAULT_IMAGE,
  telephone: "+1-817-739-1349",
  email: "katie@barrinterventions.com",
  areaServed: "US",
  priceRange: "$$$",
  description:
    "Confidential addiction intervention, family consulting, sober coaching, transport, and K9 detection services based in Texas and serving families nationwide.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [BASE_URL],
};

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const Seo = ({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website", schema }: SeoProps) => {
  const canonical = new URL(path, BASE_URL).toString();
  const imageUrl = image.startsWith("http") ? image : new URL(image, BASE_URL).toString();

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schema ? <script type="application/ld+json">{JSON.stringify(schema)}</script> : null}
    </Helmet>
  );
};

export default Seo;

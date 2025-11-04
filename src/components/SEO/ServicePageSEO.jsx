import { NextSeo, LocalBusinessJsonLd } from 'next-seo';

export default function ServicePageSEO({
  title,
  description,
  canonical,
  serviceSchema,
  children,
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Service',
            name: serviceSchema.name,
            description: serviceSchema.description,
            provider: {
              '@type': 'LocalBusiness',
              name: 'BeFirst Productions',
            },
            areaServed: {
              '@type': 'City',
              name: 'Dubai',
            },
          }),
        }}
      />

      {children}
    </>
  );
}
import Head from 'next/head';
import { NextSeo, BreadcrumbJsonLd, OrganizationJsonLd } from 'next-seo';

export default function PageSEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  breadcrumbs = [],
  children,
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          type: ogType,
          url: canonical,
          title: title,
          description: description,
          images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
        }}
      />

      {breadcrumbs.length > 0 && (
        <BreadcrumbJsonLd
          itemListElements={breadcrumbs.map((crumb, index) => ({
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          }))}
        />
      )}

      <OrganizationJsonLd
        type="LocalBusiness"
        id="https://yourwebsite.com"
        name="BeFirst Productions"
        logo="https://yourwebsite.com/TMG-Global-Services-LLC.png"
        legalName="BeFirst Productions"
        description="Business setup and company formation services in UAE"
        foundingDate="2024"
        contactPoint={{
          telephone: "+971-XXX-XXXX",
          contactType: "Customer Service",
        }}
        address={{
          streetAddress: "Your Address",
          addressLocality: "Dubai",
          addressRegion: "DU",
          postalCode: "00000",
          addressCountry: "AE",
        }}
        sameAs={[
          "https://www.facebook.com/yourpage",
          "https://www.instagram.com/yourpage",
          "https://www.linkedin.com/company/yourpage",
        ]}
      />

      {children}
    </>
  );
}
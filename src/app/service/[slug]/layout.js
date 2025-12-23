// src/app/service/[slug]/layout.js
import { ServiceDetails } from "@/data/ServiceDetails";
import { buildMetadata } from "@/lib/seo";

// FIXED: Make generateMetadata async and await params
export async function generateMetadata({ params }) {
  try {
    // Await params before accessing properties
    const { slug } = await params;

    // Find the service
    const service = ServiceDetails?.find((s) => s.slug === slug);

    if (!service) {
      return buildMetadata({
        title: "Service Not Found",
        description: "The requested service could not be found.",
        path: `/service/${slug}`,
      });
    }

    // Access SEO data from the nested 'seo' object
    const seo = service.seo || {};

    return buildMetadata({
      title: seo.metaTitle || service.title,
      description: seo.metaDescription,
      path: `/service/${slug}`,
      keywords: seo.keywords || [],
      image: seo.ogImage || service.image,
      ogTitle: seo.ogTitle,
      ogDescription: seo.ogDescription,
      ogImageAlt: seo.ogImageAlt,
      canonicalUrl: seo.canonicalUrl,
      robots: seo.robots,
    });
  } catch (error) {
    console.error("Error generating metadata:", error);
    return buildMetadata({
      title: "Service Details",
      description: "TMG Global service information",
    });
  }
}

// FIXED: Make layout component async and await params
export default async function ServiceSlugLayout({ children, params }) {
  // Await params before accessing properties
  const { slug } = await params;
  const service = (ServiceDetails || []).find((s) => s.slug === slug);

  if (!service) return <>{children}</>;

  // Build structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo?.metaDescription || service.data?.[0]?.description,
    provider: {
      "@type": "Organization",
      name: "TMG Global Services LLC",
      url: "https://tmgdubai.ae",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };

  // Add offers if available
  if (service.offers) {
    structuredData.offers = service.offers;
  }

  // Add service output if available
  if (service.serviceOutput) {
    structuredData.serviceOutput = service.serviceOutput;
  }

  // Add terms of service if available
  if (service.termsOfService) {
    structuredData.termsOfService = service.termsOfService;
  }

  // Add aggregate rating if available
  if (service.aggregateRating) {
    structuredData.aggregateRating = service.aggregateRating;
  }

  // Build breadcrumb structured data
  const breadcrumbData = service.breadcrumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: service.breadcrumb.map((crumb) => ({
          "@type": "ListItem",
          position: crumb.position,
          name: crumb.name,
          item: crumb.url,
        })),
      }
    : null;

  return (
    <>
      {/* Service structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Breadcrumb structured data */}
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      )}

      {children}
    </>
  );
}
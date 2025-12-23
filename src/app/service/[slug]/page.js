// src/app/service/[slug]/page.js
import React from "react";
import BannerSection from "@/components/banner/Banner";
import BusinessBanner from "@/components/banner/BusinessBanner";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import AdvantageSection from "@/components/serviceDetails/AdvantageSection";
import AnimatedTabs from "@/components/serviceDetails/AnimatedTabs";
import BusinessSection from "@/components/serviceDetails/BusinessSection ";
import BusinessSetupComponent from "@/components/serviceDetails/BusinessSetupComponent";
import FAQSection from "@/components/serviceDetails/FaqSection";
import ServiceClientModalManager from "@/components/common/ServiceClientModalManager";

import { buildMetadata } from "@/lib/seo";
import { ServiceDetails } from "@/data/ServiceDetails";

export const dynamic = "force-static";

// FIXED: Make generateStaticParams async (best practice)
export async function generateStaticParams() {
  const uniqueSlugs = [...new Set((ServiceDetails || []).map((s) => s.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
}

// FIXED: Make generateMetadata async and await params
export async function generateMetadata({ params }) {
  // Await params before accessing properties
  const { slug } = await params;
  const service = (ServiceDetails || []).find((s) => s.slug === slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      path: `/service/${slug}`,
    });
  }

  // Access SEO data from the nested 'seo' object
  const seo = service.seo || {};

  // Use SEO-specific fields for metadata (not page content)
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
    robots: seo.robots || { index: true, follow: true },
    type: "article",
  });
}

// FIXED: Make page component async and await params
export default async function ServicePage({ params }) {
  // Await params before accessing properties
  const { slug } = await params;
  const service = (ServiceDetails || []).find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Service Not Found"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]}
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Service Not Found
            </h2>
            <p className="text-gray-600">
              The service you are looking for does not exist.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <BannerSection
        title={service.title}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/service/${service.slug}` },
        ]}
      />
      <AnimatedTabs
        data={service.data}
        heading={service.heading}
        image={service.image}
      />
      <BusinessBanner bannerData={service.banner} />

      {service.sections.map((section) => {
        if (section.id === "section1")
          return <BusinessSection key={section.id} section={section} />;
        if (section.id === "section2")
          return <BusinessSetupComponent key={section.id} section={section} />;
        if (section.id === "section3")
          return <AdvantageSection key={section.id} section={section} />;
        if (section.id === "section4")
          return <FAQSection key={section.id} section={section} />;
        return null;
      })}

      <ServiceClientModalManager />
      <Footer />
    </div>
  );
}
import { siteUrl } from "@/lib/seo";
import { ServiceDetails } from "@/data/ServiceDetails";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    "",
    "/services",
    "/about-us",
    "/contact",
    "/faqs",
    "/gallery",
    "/privacy-policy",
    "/terms-of-service",
    "/mainland-business-setup",
    "/freezone-business",
    "/offshore-company-formation",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = (ServiceDetails || []).map((s) => ({
    url: `${siteUrl}/service/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}



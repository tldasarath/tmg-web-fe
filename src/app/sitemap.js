import { siteUrl } from "@/lib/seo";
import { ServiceDetails } from "@/data/ServiceDetails";

import { blogs } from "@/data/BlogData";
import { LicenseDetails } from "@/data/LicenseData";


export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date().toISOString();

  // 🔹 STATIC ROUTES (Keep as-is)
  const staticRoutes = [
    "",
    "/services",
    "/about-us",
    "/contact",
    "/faqs",
    "/gallery",
    "/privacy-policy",
    "/terms-of-service",
    "/mainland-company-formation-dubai",
    "/freezone-company-formation-dubai",
    "/offshore-company-formation-dubai",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  // 🔹 DYNAMIC: SERVICES
  const serviceRoutes = (ServiceDetails || []).map((s) => ({
    url: `${siteUrl}/service/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // 🔹 DYNAMIC: BLOGS
  const blogRoutes = (blogs || []).map((b) => ({
    url: `${siteUrl}/blogs/${b.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // 🔹 DYNAMIC: LICENSE PAGES
  const licenseRoutes = (LicenseDetails || []).map((l) => ({
    url: `${siteUrl}/license/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // 🔹 FINAL MERGE
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...licenseRoutes,
  ];
}

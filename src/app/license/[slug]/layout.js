import { LicenseDetails } from "@/data/LicenseData";

// This function runs at build time to generate static pages
export function generateStaticParams() {
  return LicenseDetails.map((license) => ({
    slug: license.slug,
  }));
}

export default function LicenseSlugLayout({ children }) {
  return children;
}


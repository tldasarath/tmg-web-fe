import { LicenseDetails } from "@/data/LicenseData";
import { buildMetadata } from "@/lib/seo";

// Generate static params for all license slugs (required for output: export)
export function generateStaticParams() {
  const uniqueSlugs = [
    ...new Set((LicenseDetails || []).map((license) => license.slug)),
  ];
  return uniqueSlugs.map((slug) => ({ slug }));
}

// Generate page-specific metadata per license
export function generateMetadata({ params }) {
  const slug = params?.slug;
  const license = (LicenseDetails || []).find((l) => l.slug === slug);

  const title = license?.title
    ? `${license.title} | TMG Global`
    : "License Details | TMG Global";
  const description =
    license?.description?.replace(/\s+/g, " ")?.slice(0, 155) ||
    "Explore this license offering from TMG Global in the UAE.";
  const image = license?.imageUrl || undefined;

  return buildMetadata({
    title,
    description,
    path: `/license/${slug}`,
    image,
    type: "article",
  });
}

export default function LicenseSlugLayout({ children }) {
  return children;
}


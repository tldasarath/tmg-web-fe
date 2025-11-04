import { buildMetadata } from "@/lib/seo";
import { ServiceDetails } from "@/data/ServiceDetails";

export function generateMetadata({ params }) {
  const slug = params?.slug;
  const service = ServiceDetails.find((s) => s.slug === slug);

  const title = service?.title || "Service Details | TMG Global";
  const shortDesc =
    service?.heading?.replace(/\s+/g, " ")?.slice(0, 155) ||
    "Explore this service from TMG Global in the UAE.";
  const image = service?.image || undefined;

  return buildMetadata({
    title,
    description: shortDesc,
    path: `/service/${slug}`,
    image,
    type: "article",
  });
}

export default function ServiceSlugLayout({ children }) {
  return children;
}



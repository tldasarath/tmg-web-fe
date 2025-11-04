import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services | TMG Global",
  description:
    "Explore TMG Global services: company formation, PRO, visas, licenses, and ongoing corporate support across UAE.",
  path: "/services",
});

export default function ServicesLayout({ children }) {
  return children;
}



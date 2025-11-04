import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service | TMG Global",
  description:
    "Review TMG Global’s terms and conditions for using our services and website.",
  path: "/terms-of-service",
  robots: { index: false, follow: true },
});

export default function TermsLayout({ children }) {
  return children;
}



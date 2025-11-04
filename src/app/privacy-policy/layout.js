import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | TMG Global",
  description:
    "Read TMG Global’s privacy policy to understand how we collect, use, and protect your data.",
  path: "/privacy-policy",
  robots: { index: false, follow: true },
});

export default function PrivacyLayout({ children }) {
  return children;
}



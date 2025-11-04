import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dubai Business Setup FAQs | TMG Global",
  description:
    "Answers to common questions about company formation, visas, and licensing in the UAE.",
  path: "/faqs",
});

export default function FaqsLayout({ children }) {
  return children;
}



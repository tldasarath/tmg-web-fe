import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact TMG Global | Start Your UAE Company",
  description:
    "Contact TMG Global for free consultation on business setup, licensing, and visas in the UAE.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}



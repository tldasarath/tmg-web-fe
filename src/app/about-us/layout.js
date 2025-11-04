import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About TMG Global | UAE Business Setup Experts",
  description:
    "Learn about TMG Global’s mission and team helping entrepreneurs set up and scale businesses in the UAE.",
  path: "/about-us",
});

export default function AboutLayout({ children }) {
  return children;
}



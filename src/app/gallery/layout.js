import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "TMG Global Gallery | Our Work & Events",
  description:
    "Browse TMG Global’s gallery featuring client success stories, events, and milestones in the UAE.",
  path: "/gallery",
});

export default function GalleryLayout({ children }) {
  return children;
}



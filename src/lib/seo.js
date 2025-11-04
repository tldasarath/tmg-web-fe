export const siteUrl = "https://tmgdubai.ae";

export const defaultSeo = {
  siteName: "TMG Global",
  titleTemplate: "%s | TMG Dubai",
  defaultTitle:
    "TMG Dubai – Business Setup & Company Formation in UAE",
  defaultDescription:
    "Start your business setup in Dubai with TMG Global. Expert company formation in UAE Mainland, Freezone & Offshore.",
  defaultImage: `${siteUrl}/og-image.jpg`,
  locale: "en_AE",
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  robots = { index: true, follow: true },
}) {
  const url = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const metaTitle = title || defaultSeo.defaultTitle;
  const metaDescription = description || defaultSeo.defaultDescription;
  const imageUrl = image || defaultSeo.defaultImage;

  return {
    title: {
      default: metaTitle,
      template: defaultSeo.titleTemplate,
    },
    description: metaDescription,
    alternates: { canonical: url },
    robots,
    openGraph: {
      type,
      locale: defaultSeo.locale,
      url,
      siteName: defaultSeo.siteName,
      title: metaTitle,
      description: metaDescription,
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: defaultSeo.siteName },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}



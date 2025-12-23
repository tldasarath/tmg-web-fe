// lib/seo.js
export const siteUrl = "https://tmgdubai.ae";

export const defaultSeo = {
  siteName: "TMG Global",
  titleTemplate: "%s | TMG Dubai",
  defaultTitle: "TMG Dubai – Business Setup & Company Formation in UAE",
  defaultDescription:
    "Start your business setup in Dubai with TMG Global. Expert company formation in UAE Mainland, Freezone & Offshore.",
  defaultImage: `${siteUrl}/assets/logo/TMG-Global-Services-LLC.png`,
  defaultImageAlt: "TMG Global Services LLC Logo",
  locale: "en_AE",
};

/** Clean text by removing newlines and extra spaces */
function cleanText(text) {
  if (!text) return text;
  return text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  robots = { index: true, follow: true },
  keywords,
  ogTitle,
  ogDescription,
  ogImageAlt,
  canonicalUrl,
}) {
  const url = canonicalUrl
    ? canonicalUrl
    : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

  const metaTitle = cleanText(title) || defaultSeo.defaultTitle;
  const metaDescription = cleanText(description) || defaultSeo.defaultDescription;
  const imageUrl = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : defaultSeo.defaultImage;
  const twitterImage = imageUrl || defaultSeo.defaultImage;

  // FIXED: Keep keywords as array for Next.js 15
  const keywordsArray = Array.isArray(keywords) ? keywords : (keywords ? [keywords] : []);

  return {
    metadataBase: new URL(siteUrl),
    title: metaTitle,
    description: metaDescription,
    // FIXED: Pass keywords as array, not comma-separated string
    keywords: keywordsArray,
    alternates: { canonical: url },
    robots: robots,
    openGraph: {
      type,
      locale: defaultSeo.locale,
      url,
      siteName: defaultSeo.siteName,
      title: cleanText(ogTitle) || metaTitle,
      description: cleanText(ogDescription) || metaDescription,
      images: [
        { 
          url: imageUrl, 
          width: 1200, 
          height: 630, 
          alt: ogImageAlt || defaultSeo.defaultImageAlt || "TMG Global Service" 
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanText(ogTitle) || metaTitle,
      description: cleanText(ogDescription) || metaDescription,
      images: [twitterImage],
      creator: "@tmgdubai",
      site: "@tmgdubai",
    },
  };
}
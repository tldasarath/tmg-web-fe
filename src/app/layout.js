import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InnovativeChatbot from "@/components/chatbot/InnovativeChatbot";
import PageWrapper from "@/components/layout/PageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://tmgdubai.ae/"), // ← Change to your domain

  title: {
    default:
      "Business Setup in Dubai, UAE | Company Formation with TMG GlobalBusiness Setup in Dubai, UAE | Company Formation with TMG Global",
    template: "%s | BeFirst Productions",
  },

  description:
    "Start your business setup in Dubai with TMG Global. Expert company formation in UAE Mainland, Freezone & Offshore. Get your Dubai business license today.",

  keywords: [
    "business setup in Dubai",
    "company setup UAE",
    "Dubai business license",
    "UAE business formation",
    "TMG Global",
    "start a business in Dubai",
    "Freezone setup",
    "Mainland company setup",
  ],

  authors: [{ name: "TMG Global" }],
  creator: "TMG Global",
  publisher: "TMG Global",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://tmgdubai.ae/",
    siteName: "TMG Global",
    title: "TMG Global - Business Setup in UAE",
    description: "Expert company formation, freezone & offshore solutions",
    images: [
      {
        url: "https://tmgdubai.ae/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TMG Global",
      },
    ],
  },

  twitter: {
    handle: "@TMGDubai",
    cardType: "summary_large_image",
  },

  verification: {
    google: "your-google-verification-code", // ← Get from Google Search Console
  },

  alternates: {
    canonical: "https://tmgdubai.ae/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>
          {children}
          <InnovativeChatbot heroSectionId="hero-section" />
        </PageWrapper>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InnovativeChatbot from "@/components/chatbot/InnovativeChatbot";
import PageWrapper from "@/components/layout/PageWrapper";
import { BottomCTA } from "@/components/hero/BottomCta";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://tmgdubai.ae/"), 

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
    url: "https://tmgdubai.ae",
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
    google: "_W2qQZsYga7KnXrA12vbw48HhEJiYAEB1ouDNDSQPAA", 
  },

  alternates: {
    canonical: "https://tmgdubai.ae/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
  }}
/>


{/* Google Analytics */}
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />

    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `}
    </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  ></iframe>
</noscript>

        <PageWrapper>
          {children}
          <InnovativeChatbot heroSectionId="hero-section" />
          <BottomCTA />
        </PageWrapper>
      </body>
    </html>
  );
}

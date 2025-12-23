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
      "Business Setup Company in Dubai, UAE | Company Formation UAE",
    // template: "%s | BeFirst Productions",
  },

  description:
    "Start your business setup company  in Dubai with TMG Global. We offer expert company formation in UAE Mainland, Freezone and Offshore.",

  keywords: [
    "business setup company in dubai",
    "company setup uae",
    "dubai business license",
    "uae business formation",
    "tmg global",
    "start a business in dubai",
    "freezone setup",
    "mainland company setup"
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
    title: "Business Setup Company in Dubai, UAE | Company Formation UAE",
    description: "Start your business setup company  in Dubai with TMG Global. We offer expert company formation in UAE Mainland, Freezone and Offshore.",
    images: [
      {
        url: "https://tmgdubai.ae/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TMG Global",
      },
    ],
  },

    icons: {
    icon: '/favicon.ico',                
    shortcut: '/favicon-96x96.png',      
    apple: '/apple-touch-icon.png',        
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
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

const GTM = process.env.NEXT_PUBLIC_GTM_ID;
const GA = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GTM && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM}');`}
          </Script>
        )}

        {/* Google Analytics */}
        {GA && <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} />}
        {GA && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA}');
            `}
          </Script>
        )}
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

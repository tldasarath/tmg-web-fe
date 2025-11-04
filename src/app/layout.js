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
  metadataBase: new URL('https://befirst-productions.com'),  // ← Change to your domain
  
  title: {
    default: 'BeFirst Productions - Business Setup & Company Formation in UAE',
    template: '%s | BeFirst Productions',
  },
  
  description: 'Expert business setup, company formation, and licensing services in UAE. Freezone, Mainland, and Offshore solutions with proven track record.',
  
  keywords: [
    'business setup UAE',
    'company formation Dubai',
    'freezone business',
    'mainland setup',
    'offshore company formation',
  ],
  
  authors: [{ name: 'BeFirst Productions' }],
  creator: 'BeFirst Productions',
  publisher: 'BeFirst Productions',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://befirst-productions.com',
    siteName: 'BeFirst Productions',
    title: 'BeFirst Productions - Business Setup in UAE',
    description: 'Expert company formation, freezone & offshore solutions',
    images: [
      {
        url: 'https://befirst-productions.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BeFirst Productions',
      },
    ],
  },
  
  twitter: {
    handle: '@befirst',  // ← Add your Twitter handle
    cardType: 'summary_large_image',
  },
  
  verification: {
    google: 'your-google-verification-code',  // ← Get from Google Search Console
  },
  
  alternates: {
    canonical: 'https://befirst-productions.com',
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
        <InnovativeChatbot heroSectionId="hero-section"/>
          </PageWrapper>
      </body>
    </html>
  );
}

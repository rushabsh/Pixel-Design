import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/seo/JsonLd";

export const metadata = {
  metadataBase: new URL("https://pixelengineers.com"),
  title: {
    default: "Pixel Engineers — Creative Design & Full-Stack Development Agency",
    template: "%s | Pixel Engineers",
  },
  description:
    "Pixel Engineers is a premier creative design, mobile app development, full-stack web engineering, custom software, and digital marketing agency delivering scalable, high-performance digital products worldwide.",
  keywords: [
    "Pixel Engineers",
    "creative design agency",
    "full-stack software development",
    "mobile app development agency",
    "Next.js web development",
    "React development company",
    "UI UX design services",
    "Figma design systems",
    "custom enterprise software",
    "digital marketing services",
    "technical SEO audits",
    "conversion rate optimization",
    "IT consulting and cloud architecture",
    "AWS and Google Cloud migration",
    "DevOps CI CD automation",
    "high performance web engineering",
  ],
  authors: [{ name: "Pixel Engineers", url: "https://pixelengineers.com" }],
  creator: "Pixel Engineers",
  publisher: "Pixel Engineers",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pixel Engineers — Creative Design & Development Agency",
    description:
      "A data-driven UX, design, and engineering agency delivering memorable digital products and measurable business results.",
    url: "https://pixelengineers.com",
    siteName: "Pixel Engineers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_poster.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel Engineers — Creative Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Engineers — Creative Design & Development Agency",
    description:
      "A data-driven UX, design, and engineering agency delivering memorable digital products and measurable business results.",
    creator: "@pixelengineers",
    images: ["/images/hero_poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "32x32" },
      { url: "/images/favicon.png", sizes: "192x192" },
    ],
    apple: [{ url: "/images/favicon.png", sizes: "180x180" }],
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2ca8fe",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-title" content="Pixel Engineers" />
        <meta name="application-name" content="Pixel Engineers" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-black antialiased selection:bg-[#4541f1] selection:text-white">
        <Preloader />
        <AppProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <BackToTop />
        </AppProvider>
      </body>
    </html>
  );
}

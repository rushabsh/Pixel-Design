import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata = {
  title: "Services — UI/UX Design, Web, Mobile App & Software Development",
  description:
    "Explore Pixel Engineers' full-cycle digital services: Mobile App Development, Creative UI/UX Design, Modern Web Development, Data-Driven Digital Marketing, Custom Software Development, and Strategic IT Consulting.",
  keywords: [
    "mobile app development services",
    "creative UI UX design agency",
    "custom web development company",
    "Next.js web application development",
    "digital marketing and SEO agency",
    "conversion rate optimization services",
    "custom enterprise software engineering",
    "SaaS architecture development",
    "IT consulting and cloud migration",
    "DevOps automation consulting",
    "full-cycle product engineering",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Services — UI/UX Design, Web, Mobile App & Software Development | Pixel Engineers",
    description:
      "Full-cycle digital engineering: Mobile App Development, Creative UI/UX Design, Web Engineering, Digital Marketing, Custom Software, and IT Consulting.",
    url: "https://pixelengineers.com/services",
    images: [
      {
        url: "/images/hero_poster.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel Engineers Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Services — UI/UX Design, Web, Mobile App & Software Development | Pixel Engineers",
    description:
      "Full-cycle digital engineering: Mobile App Development, Creative UI/UX Design, Web Engineering, Digital Marketing, Custom Software, and IT Consulting.",
    images: ["/images/hero_poster.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="main-layout_main__3rK1r">
      {/* Sticky controls and fullscreen navigation */}
      <Navbar />

      {/* Services Page Content */}
      <ServicesContent />

      {/* Shared Pixel Engineers Footer */}
      <Footer />
    </main>
  );
}

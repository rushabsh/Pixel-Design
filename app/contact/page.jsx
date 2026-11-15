import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact Us — Start Your Next Digital Project",
  description:
    "Ready to build your next breakthrough product? Contact Pixel Engineers for project inquiries, technical discovery consultations, RFPs, or general collaboration.",
  keywords: [
    "Contact Pixel Engineers",
    "hire software agency",
    "request project proposal",
    "UI UX design inquiry",
    "schedule discovery consultation",
    "custom software RFP",
    "mobile app development quotes",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us — Start Your Next Digital Project | Pixel Engineers",
    description:
      "Ready to build your next breakthrough product? Contact Pixel Engineers for project inquiries, technical discovery consultations, or collaboration.",
    url: "https://pixelengineers.com/contact",
    images: [
      {
        url: "/images/hero_poster.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pixel Engineers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Start Your Next Digital Project | Pixel Engineers",
    description:
      "Ready to build your next breakthrough product? Contact Pixel Engineers for project inquiries, technical discovery consultations, or collaboration.",
    images: ["/images/hero_poster.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="main-layout_main__3rK1r">
      {/* Sticky controls and fullscreen navigation */}
      <Navbar />

      {/* Contact Page Content */}
      <ContactContent />

      {/* Shared Pixel Engineers Footer */}
      <Footer />
    </main>
  );
}


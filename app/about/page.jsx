import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "About Us — Digital Minds, Designers & Engineers",
  description:
    "Learn about Pixel Engineers — our story, mission, core values, and the tight-knit team of creative designers and software engineers shaping digital products that scale.",
  keywords: [
    "About Pixel Engineers",
    "creative engineering agency",
    "digital product agency story",
    "UI UX design leadership",
    "custom software team",
    "agency culture and values",
    "technology experts",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us — Digital Minds, Designers & Engineers | Pixel Engineers",
    description:
      "Learn about Pixel Engineers — our story, mission, core values, and the tight-knit team shaping memorable digital products.",
    url: "https://pixelengineers.com/about",
    images: [
      {
        url: "/images/hero_poster.jpg",
        width: 1200,
        height: 630,
        alt: "About Pixel Engineers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Digital Minds, Designers & Engineers | Pixel Engineers",
    description:
      "Learn about Pixel Engineers — our story, mission, core values, and the tight-knit team shaping memorable digital products.",
    images: ["/images/hero_poster.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="main-layout_main__3rK1r">
      {/* Sticky controls and fullscreen navigation */}
      <Navbar />

      {/* Recreated About Us Page Sections */}
      <AboutContent />

      {/* Reusable Pixel Engineers Footer */}
      <Footer />
    </main>
  );
}


import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Focused from "@/components/Focused";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Optimized Dynamic WebGL Modules with Skeleton Fallbacks for Slow Networks
const ParticleText = dynamic(() => import("@/components/ParticleText"), {
  loading: () => (
    <div style={{ width: "100%", height: 200 }} className="flex items-center justify-center bg-black">
      <div className="w-3/4 max-w-lg h-14 rounded-2xl skeleton-shimmer-dark" />
    </div>
  ),
});

const Development = dynamic(() => import("@/components/Development"), {
  loading: () => (
    <section className="development_dev__ZUMqF" style={{ minHeight: 600, background: "#0d0f11" }}>
      <div className="w-full h-[600px] skeleton-shimmer-dark flex flex-col items-center justify-center gap-6 p-8">
        <div className="w-1/3 max-w-xs h-10 rounded-xl bg-white/5" />
        <div className="w-1/2 max-w-md h-5 rounded-md bg-white/5" />
      </div>
    </section>
  ),
});

export const metadata = {
  title: "Pixel Engineers — Creative Design & Full-Stack Development Agency",
  description:
    "We create memorable websites, digital experiences, mobile applications, and enterprise software designed and engineered by one elite team.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pixel Engineers — Creative Design & Development Agency",
    description:
      "We create memorable websites, digital experiences, mobile applications, and enterprise software designed and engineered by one elite team.",
    url: "https://pixelengineers.com",
    images: [
      {
        url: "/images/hero_poster.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel Engineers — Creative Design & Development Agency",
      },
    ],
  },
};

export default function Home() {
  return (
    <main id="main-content" className="main-layout_main__3rK1r">
      {/* Sticky controls and fullscreen navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <div style={{ width: "100%", height: 200 }}>
        <ParticleText
          text="Data Driven Users Focused"
          particleSize={2.2}
          density={4}
          color="currentCzolor"
          highlightColor="#0000"
          highlightMode="motion"
          shape="circle"
          intro="gather"
          scatter={190}
          gatherDuration={1600}
          stagger={420}
          clickBurst
          burstStrength={1}
          pointerRepel={42}
          repelRadius={120}
          idleDrift={0.8}
          trigger="mount"
          fontSize="clamp(3.5rem, 13vw, 9rem)"
          fontWeight={800}
          fontFamily="inherit"
          glow
        />
      </div>

      {/* Focused Marquee */}
      {/* <Focused /> */}

      {/* 01 — Our Services */}
      <Services />

      {/* 02 — About Us */}
      <About />

      {/* {SMART} DEVELOPMENT */}
      <Development />

      {/* 03 — Our Portfolio */}
      <Portfolio />

      {/* Numbers don't lie Banner */}
      <Banner />

      {/* 06 — What Our Clients Say */}
      <Testimonials />

      {/* Frequently Asked Questions (AEO & On-Page SEO) */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}

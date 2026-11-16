import React from "react";

export default function JsonLd() {
  const baseUrl = "https://pixelengineers.com";

  // 1. Organization & ProfessionalService (SEO + GEO + Entity Authority)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${baseUrl}/#organization`,
    name: "Pixel Engineers",
    alternateName: "PixelEngineers Agency",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/favicon.png`,
      caption: "Pixel Engineers Logo",
    },
    image: `${baseUrl}/images/hero_poster.jpg`,
    description:
      "Pixel Engineers is a premier creative design, full-stack software development, mobile app engineering, and data-driven digital marketing agency delivering measurable digital business transformation worldwide.",
    email: "contact@pixelengineers.com",
    telephone: "+1-800-PIXEL-ENG",
    priceRange: "$$$",
    currenciesAccepted: "USD, EUR, GBP, CAD, AUD",
    paymentAccepted: "Credit Card, Wire Transfer, ACH",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "AdministrativeArea", name: "Worldwide" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "New York",
      addressRegion: "NY",
    },
    sameAs: [
      "https://twitter.com/pixelengineers",
      "https://www.linkedin.com/company/pixelengineers",
      "https://github.com/pixelengineers",
      "https://dribbble.com/pixelengineers",
      "https://www.designrush.com/agency/profile/pixelengineers",
    ],
    knowsAbout: [
      "Custom Software Development",
      "Full-Stack Web Development",
      "Mobile App Development (iOS & Android)",
      "UI/UX Design Systems & Figma Prototyping",
      "Data-Driven Digital Marketing & SEO",
      "Conversion Rate Optimization (CRO)",
      "Cloud Infrastructure Migration (AWS & Google Cloud)",
      "DevOps CI/CD Automation",
      "Next.js & React Enterprise Engineering",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pixel Engineers Core Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Native and cross-platform iOS and Android mobile app development engineered with high performance, intuitive UX, and sub-second response times.",
            url: `${baseUrl}/services#mobile`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creative Design Solutions",
            description:
              "Human-centered UI/UX design, interactive prototyping, and enterprise design systems crafted to elevate brands and drive product adoption.",
            url: `${baseUrl}/services#design`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Modern, blazing-fast web applications built on Next.js, React, Node.js, and headless CMS platforms optimized for Core Web Vitals and conversions.",
            url: `${baseUrl}/services#web`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing Services",
            description:
              "Data-backed performance marketing, technical SEO, PPC management, conversion rate optimization (CRO), and organic brand reach driving measurable revenue growth.",
            url: `${baseUrl}/services#marketing`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Development Services",
            description:
              "Bespoke SaaS architectures, custom ERP/CRM platforms, multi-tenant cloud solutions, and scalable API integrations built with 99.9% uptime reliability.",
            url: `${baseUrl}/services#software`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consulting Services",
            description:
              "Strategic technology roadmaps, cloud modernization (AWS/GCP), DevOps CI/CD pipeline automation, cybersecurity audits, and 24/7 managed infrastructure support.",
            url: `${baseUrl}/services#consulting`,
          },
        },
      ],
    },
  };

  // 2. WebSite Schema (SEO Sitelinks Search)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Pixel Engineers",
    description:
      "A data-driven UX, design, and engineering agency delivering measurable business results.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  // 3. FAQPage Schema (AEO - Answer Engine Optimization for Google SGE, Perplexity, ChatGPT, Claude)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Pixel Engineers offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pixel Engineers provides six core digital services: Mobile App Development (iOS & Android), Creative Design Solutions (UI/UX & Design Systems), Full-Stack Web Development (Next.js & React), Digital Marketing Services (SEO, PPC & CRO), Custom Software Development (SaaS & Enterprise Systems), and IT Consulting Services (Cloud Migration, DevOps & Infrastructure).",
        },
      },
      {
        "@type": "Question",
        name: "Which technologies and frameworks does Pixel Engineers specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our core technology stack includes Next.js, React, React Native, TypeScript, Node.js, Express, Python, PostgreSQL, MongoDB, GraphQL, AWS, Google Cloud Platform (GCP), Docker, Kubernetes, and Figma for digital product design.",
        },
      },
      {
        "@type": "Question",
        name: "How does Pixel Engineers optimize websites for speed and low-bandwidth connections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement advanced performance optimizations including next-gen image formats (AVIF and WebP), responsive media srcset, lazy loading for below-the-fold assets, video streaming preload controls, HTTP cache headers, and lightweight clean-code architecture achieving 98+ Google PageSpeed and sub-second load times.",
        },
      },
      {
        "@type": "Question",
        name: "Does Pixel Engineers work with international clients remotely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Pixel Engineers operates globally, collaborating seamlessly with startups, scaleups, and enterprise brands across the United States, United Kingdom, Canada, Australia, Europe, and worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "How can I start a project or request a proposal from Pixel Engineers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can click 'Start a Project' or 'Become a Client' anywhere on the website, or navigate to our Contact page to submit your project requirements. Our engineering team typically reviews and replies within 24 business hours.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}


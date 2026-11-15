export default function manifest() {
  return {
    name: "Pixel Engineers — Creative Design & Development Agency",
    short_name: "Pixel Engineers",
    description:
      "A data-driven UX, design, and engineering agency delivering memorable digital products and measurable business results.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2ca8fe",
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/defense-and-government", destination: "/industries/defense-and-government" },
      { source: "/commercial-and-industrial", destination: "/industries/commercial-and-industrial" },
      { source: "/motive-traction-batteries", destination: "/industries/motive-traction-batteries" },
      { source: "/smart-ems", destination: "/technology/smart-ems" },
      { source: "/bess-core", destination: "/technology/bess-core" },
      { source: "/sodium-ion-technology", destination: "/technology/sodium-ion-technology" },
      { source: "/products", destination: "/products/products" },
      { source: "/contact", destination: "/contact/contact" }
    ];
  },
};

export default nextConfig;
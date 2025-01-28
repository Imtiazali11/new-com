import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's strict mode
  swcMinify: true,       // Enables SWC compiler for minification
  images: {
    domains: ["example.com"], // Allow images from specific domains
  },
  i18n: {
    locales: ["en", "fr"], // Support multiple languages
    defaultLocale: "en",
  },
};

export default nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@zenstackhq/runtime",
      "@zenstackhq/server",
    ],
    typedRoutes: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = withBundleAnalyzer(nextConfig);

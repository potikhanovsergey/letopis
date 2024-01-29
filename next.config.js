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
};

module.exports = withBundleAnalyzer(nextConfig);

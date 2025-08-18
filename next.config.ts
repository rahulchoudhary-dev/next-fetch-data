import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig;

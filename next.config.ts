import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Note: In Next.js 16+, ESLint is controlled via package.json scripts or ESLint config files
  // The eslint.ignoreDuringBuilds option has been removed from next.config
};

export default nextConfig;

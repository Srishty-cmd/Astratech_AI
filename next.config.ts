import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/cources",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

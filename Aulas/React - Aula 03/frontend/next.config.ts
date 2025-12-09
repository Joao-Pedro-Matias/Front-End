import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "cdn.freebiesupply.com"
      }
    ]
  }
};

export default nextConfig;

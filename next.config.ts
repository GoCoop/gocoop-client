import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: (process.env.NEXT_PUBLIC_API_PROTOCOL as "http" | "https") || 'http',
        hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || 'localhost',
        pathname: process.env.NEXT_PUBLIC_API_PATHNAME
        // Add port if localhost
      }
    ]
  }
};

export default nextConfig;

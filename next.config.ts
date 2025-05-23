import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production
  basePath: process.env.NODE_ENV === 'production' ? '/New-portfolio' : '',
};

export default nextConfig;

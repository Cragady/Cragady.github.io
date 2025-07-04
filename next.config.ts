import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_CONTENT_MAX_WIDTH: '1200',
  },
};

export default nextConfig;

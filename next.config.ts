import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        hostname: 's3.amazonaws.com',
     
        pathname: '/images/girl2.jpg',

      },
    ],
  },
};

export default nextConfig;

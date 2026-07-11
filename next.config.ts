import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash থেকে ইমেজ লোড করার জন্য
      },
      {
        protocol: 'https',
        hostname: 'example.com', // আপনি যদি অন্য কোনো ওয়েবসাইট ব্যবহার করেন
      },
    ],
  },
};

export default nextConfig;

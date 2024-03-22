/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api",
        destination: `${process.env.NEXT_APP_API_URL}/api/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `${process.env.NEXT_APP_IMAGE_URL}/uploads/:path*`,
      },
    ];
  },
  env: {
    BACKEND_BASE_URL: process.env.NEXT_APP_IMAGE_URL,
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

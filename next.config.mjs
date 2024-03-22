/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api",
        destination: `${process.env.NEXT_APP_BASE_URL}/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NEXT_APP_IMAGE_URL}/:path*`,
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
    ],
  },
};

export default nextConfig;

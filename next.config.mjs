/** @type {import('next').NextConfig} */
const nextConfig = {
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

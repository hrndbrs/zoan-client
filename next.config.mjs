/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=21600000; includeSubDomains; preload",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/:all*(js|css|min.css|min.js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=21600000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|png|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=21600000, immutable",
          },
        ],
      },
    ];
  },
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
  swcMinify: true,
};

export default nextConfig;

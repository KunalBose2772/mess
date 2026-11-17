import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/areas/:slug',
        destination: '/mess-and-tiffin-service-in-:slug-ranchi',
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/mess-and-tiffin-service-in-:slug-ranchi',
        destination: '/locations/:slug',
      },
      {
        source: '/page/:slug',
        destination: '/content/:slug',
      },
    ];
  },
};

export default nextConfig;


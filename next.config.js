/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // SEO & Performance Optimierungen
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig

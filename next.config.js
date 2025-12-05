/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bildoptimierung
  images: {
    // Moderne Formate priorisieren
    formats: ['image/avif', 'image/webp'],
    // Remote Patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Optimierte Größen für responsive Bilder
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimale Cache-Zeit
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 Tage
  },

  // Performance Optimierungen
  poweredByHeader: false,

  // Komprimierung
  compress: true,

  // Experimental Features für Performance
  experimental: {
    // Optimized Package Imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Headers für Caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

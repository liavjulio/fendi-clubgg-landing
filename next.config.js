/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // חובה עם output: 'export'
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'export',
  trailingSlash: true,
  // assetPrefix מוגדר כברירת מחדל כ-empty string
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
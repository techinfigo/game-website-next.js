/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ssc.gov.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ssc.nic.in',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    // Already on Next's default list, so this changes nothing today; it keeps
    // lucide-react optimized if a future Next drops it from the defaults.
    // (framer-motion was tried here and made every page ~1 kB larger.)
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    return [
      {
        // Files in public/ keep the same name when replaced, so cache for a day
        // and revalidate in the background rather than marking them immutable.
        // (/_next/static is already hashed and served immutable by Next.)
        // Skips /_next/ so hashed fonts in /_next/static/media stay immutable.
        source: '/:path((?!_next/).*\.(?:svg|png|jpg|jpeg|webp|avif|gif|ico|woff|woff2))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;

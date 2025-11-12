/** @type {import('next').NextConfig} */
const nextConfig = {

  output: "export",
  trailingSlash: false,
  // Image optimization - disabled for static export
  images: {
    unoptimized: true,
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Headers for proper caching and security
  // headers: async () => {
  //   return [
  //     // Video files - cache for 7 days, always check for updates
  //     {
  //       source: '/assets/videos/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=604800, must-revalidate',
  //         },
  //         {
  //           key: 'Content-Type',
  //           value: 'video/mp4',
  //         },
  //       ],
  //     },
  //     // Image files - cache for 7 days
  //     {
  //       source: '/assets/images/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=604800, must-revalidate',
  //         },
  //       ],
  //     },
  //     // Static assets - general cache
  //     {
  //       source: '/assets/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=604800',
  //         },
  //       ],
  //     },
  //     // Security headers
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'SAMEORIGIN',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // Compression
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Trailing slashes - set to true for better static hosting compatibility
  trailingSlash: true,

  // React strict mode
  reactStrictMode: true,

};

export default nextConfig;

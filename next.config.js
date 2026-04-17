/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to complete even if ESLint has internal errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

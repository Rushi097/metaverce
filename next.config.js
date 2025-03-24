/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir option removed as it's no longer supported in Next.js 15.2.3
  },
  output: 'export', // Enable static exports
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  amp: {
    // Enable AMP in hybrid mode
    hybrid: true,
  },
  // Merge with existing Next.js config
  ...require('./next.config.mjs')
};

export default nextConfig;

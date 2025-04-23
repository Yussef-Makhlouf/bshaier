/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "export",

  pnpm: {
    approveBuilds: true,
  },
}

export default nextConfig

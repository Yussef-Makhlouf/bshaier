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
    amp: {
      skipValidation: true
    }
  },
  trailingSlash: true,
  reactStrictMode: true,

  // Note: generateStaticParams is used in page components instead of exportPathMap
  // for app directory compatibility
}

export default nextConfig

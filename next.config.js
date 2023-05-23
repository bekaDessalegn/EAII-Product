/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: 'https://eaii-product.hasura.app/v1/graphql'
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig

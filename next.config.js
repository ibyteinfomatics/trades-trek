/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'imgix',
    path: 'http://54.242.152.130',
  },
  env: {
    baseApiUrl: 'https://api.keyless.ae',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000' // development api
        : 'http://tradesapi.ibyteworkshop.com', // production api
  },
};
// http://localhost:5000
module.exports = nextConfig;

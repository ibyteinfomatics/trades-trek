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
    path: 'http://tradestrek.ibyteworkshop.com',
  },
  env: {
    baseApiUrl: 'https://api.keyless.ae',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://tradesapi.ibyteworkshop.com' // development api
        : 'http://tradesapi.ibyteworkshop.com', // production api
  },
};

module.exports = nextConfig;

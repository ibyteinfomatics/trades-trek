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
        ? 'http://localhost:3000' // development api
        : 'https://api.keyless.ae', // production api
  },
};

module.exports = nextConfig;

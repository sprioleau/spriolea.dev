/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  // modularizeImports: {
  //   "react-icons": {
  //     transform: "react-icons/{{member}}",
  //   },
  // },
};

module.exports = nextConfig;

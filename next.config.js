/** @type {import('next').NextConfig} */

module.exports = {
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
};

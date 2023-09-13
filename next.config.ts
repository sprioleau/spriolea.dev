/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  output: "export", // enable static export
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

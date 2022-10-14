/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nation.africa", "i.ytimg.com"],
  },
};

module.exports = nextConfig;

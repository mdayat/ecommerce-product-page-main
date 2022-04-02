/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", "pages"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

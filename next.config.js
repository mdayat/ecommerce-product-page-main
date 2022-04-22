/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CART_ENDPOINT: "http://localhost:3000/api/cart",
  },
  eslint: {
    dirs: ["app", "pages"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

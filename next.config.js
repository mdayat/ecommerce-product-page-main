/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CART_ENDPOINT:
      "https://ecommerce-product-page-main-theta.vercel.app/api/cart",
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

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_KEY: "AIzaSyB8JyvTmwx1wFzoXDY7R1lc2ar2e5CbaKI",
    AUTH_DOMAIN: "learn-firebase-3f1ab.firebaseapp.com",
    DATABASE_URL:
      "https://learn-firebase-3f1ab-default-rtdb.asia-southeast1.firebasedatabase.app",
    PROJECT_ID: "learn-firebase-3f1ab",
    STORAGE_BUCKET: "learn-firebase-3f1ab.appspot.com",
    MESSAGING_SENDER_ID: "1048302001333",
    APP_ID: "1:1048302001333:web:bdaf9f769f841263f572fc",
  },
  eslint: {
    dirs: ["app", "pages"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;

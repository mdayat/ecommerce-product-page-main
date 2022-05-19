/** @type {import('next').NextConfig} */
import { PHASE_PRODUCTION_BUILD } from "next/constants.js";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const nextConfig = (phase) => {
  return {
    reactStrictMode: true,
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
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });

      if (phase === PHASE_PRODUCTION_BUILD) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: isServer
              ? "../analyze/server.html"
              : "./analyze/client.html",
          })
        );
      }

      return config;
    },
  };
};

export default nextConfig;

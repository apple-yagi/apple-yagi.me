import type { PlaywrightTestConfig } from "@playwright/test";

const isProduction = process.env.NODE_ENV === "production";
const baseURL = isProduction ? "https://apple-yagi.me" : "http://127.0.0.1:8787";

// https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  use: {
    baseURL,
    video: "on",
  },
};

export default config;

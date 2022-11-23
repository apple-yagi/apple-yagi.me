import type { PlaywrightTestConfig } from "@playwright/test";

// https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  use: {
    baseURL: "http://127.0.0.1:8787",
    video: "on",
  },
};

export default config;

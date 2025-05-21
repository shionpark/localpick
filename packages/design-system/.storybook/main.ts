import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;

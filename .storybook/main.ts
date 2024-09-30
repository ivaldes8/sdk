import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/organisms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/templates/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: true, // Enable type-checking
    reactDocgen: 'react-docgen-typescript', // Use react-docgen-typescript to parse component types
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true, // Helps with literal type extraction
      propFilter: (prop) => 
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true, // Exclude third-party props
    },
  },
};

export default config;

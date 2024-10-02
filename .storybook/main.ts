import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../src/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../src/organisms/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    // "../src/templates/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    // "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
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

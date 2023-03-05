const baseUrl = "https://api.registry.smartb.network/cccev/docs"

module.exports = {
  stories: [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-react-i18next",
  ],
  // "refs": {
  //   "s2": {
  //     "title": "CCCEV",
  //     "url": `${baseUrl}`
  //   },
  // },
  features: {
    emotionAlias: false,
    // buildStoriesJson: true
  },
};

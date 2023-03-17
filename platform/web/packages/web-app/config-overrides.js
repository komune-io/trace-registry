const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (config) => {
  const sourceMapLoader = config.module.rules[0]
  sourceMapLoader.exclude = [/node_modules/, /(?=.*kotlin)(?=.*js).*/, /stories/, ...(Array.isArray(sourceMapLoader.exclude) ? sourceMapLoader.exclude : [sourceMapLoader.exclude])]
  config.module.rules[1].oneOf.forEach((rule) => {
    if (!!rule.test && !Array.isArray(rule.test)) {
      if (rule.test.source && rule.test.source.includes("ts")) {
        rule.include = undefined;
        rule.options.plugins.push(
          [
            'babel-plugin-import',
            {
              libraryName: '@mui/material',
              libraryDirectory: '',
              camel2DashComponentName: false,
            },
            'core',
          ],
          [
            'babel-plugin-import',
            {
              libraryName: '@mui/icons-material',
              libraryDirectory: '',
              camel2DashComponentName: false,
            },
            'icons',
          ]
        )
        rule.options.ignore = ["../../node_modules/mapbox-gl/dist/mapbox-gl.js"];
        rule.exclude = [/node_modules/, /(?=.*kotlin)(?=.*js).*/, /stories/, ...(rule.exclude ? Array.isArray(rule.exclude) ? rule.exclude : [rule.exclude] : [])];
      }
      if (rule.test.source && rule.test.source.includes("js|mjs")) {
        rule.options.ignore = ["../../node_modules/mapbox-gl/dist/mapbox-gl.js"];
        rule.exclude = [/node_modules/, /(?=.*kotlin)(?=.*js).*/, /stories/, ...(Array.isArray(rule.exclude) ? rule.exclude : [rule.exclude])];
      }
    }
  })
  config.module.strictExportPresence = false;
  // config.optimization.minimize = false
  // config.plugins.push(new BundleAnalyzerPlugin())
  return config;
};

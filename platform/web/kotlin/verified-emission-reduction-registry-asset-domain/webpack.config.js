let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/adrien/dev/smartb/git/framework/registry/verified-emission-reduction-registry/build/js/packages/verified-emission-reduction-registry-asset-domain/kotlin/verified-emission-reduction-registry-asset-domain.js"]
};

config.output = {
    path: "/home/adrien/dev/smartb/git/framework/registry/verified-emission-reduction-registry/platform/s2/asset/asset-domain/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "asset-domain.js"
            : "asset-domain-[name].js";
    },
    library: "asset-domain",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/home/adrien/dev/smartb/git/framework/registry/verified-emission-reduction-registry/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/adrien/dev/smartb/git/framework/registry/verified-emission-reduction-registry/platform/s2/asset/asset-domain/build/reports/webpack/verified-emission-reduction-registry-asset-domain/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config

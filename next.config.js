module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  output: 'export',
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
};

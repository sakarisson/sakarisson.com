module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  experimental: {
    appDir: true,
  },
  productionBrowserSourceMaps: true,
};

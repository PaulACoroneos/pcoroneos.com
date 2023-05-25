module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    // if (!options.dev && options.isServer) {
    // const originalEntry = config.entry

    // config.entry = async () => {
    //   const entries = { ...await originalEntry() }
    //   entries['./scripts/build-rss.js'] = './scripts/build-rss.js'
    //   return entries
    // }
    // }

    return config;
  },
};

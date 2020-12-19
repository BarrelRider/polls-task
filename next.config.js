module.exports = {
    webpack: (config, options) => {

        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 1000000,
                name: '[name].[ext]',
              },
            },
          });

       
        return config
    }
}
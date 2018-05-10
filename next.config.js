// const path = require('path');
const withSass = require('@zeit/next-sass');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = withSass({
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: '/components',
      styles: '/styles',
    },
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
      config.plugins.push(new StyleLintPlugin({
        syntax: 'scss',
      }));
    }
    return config;
  },
});

/*
// const path = require('path')
// const glob = require('glob')

config.module.rules.push(
  {
    test: /\.(css|scss)/,
    loader: 'emit-file-loader',
    options: {
      name: 'dist/[path][name].[ext]'
    }
  }
,
  {
    test: /\.css$/,
    use: ['babel-loader', 'raw-loader', 'postcss-loader']
  }
,
  {
    test: /\.s(a|c)ss$/,
    use: ['babel-loader', 'raw-loader', 'postcss-loader',
      { loader: 'sass-loader',
        options: {
          includePaths: ['src/styles', 'node_modules']
            .map((d) => path.join(__dirname, d))
            .map((g) => glob.sync(g))
            .reduce((a, c) => a.concat(c), [])
        }
      }
    ]
  }
)
*/

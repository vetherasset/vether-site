const compose = require('next-compose')
const withLess = require('@zeit/next-less')
const withVideos = require('next-videos')

module.exports = compose([
  [withLess, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }],
  withVideos(),
  {
    webpack: (config) => {
      return config
    }
  }
])

module.exports = {
  configureWebpack: {
    entry: {
      index: './src/block/index.js',
    },
    output: {
      filename: 'js/[name].js'
    }
  },
  filenameHashing: false,
}


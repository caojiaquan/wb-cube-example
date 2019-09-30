module.exports = {
  configureWebpack: {
    entry: {
      index: './src/blocks/h5/index.js',
    },
    output: {
      filename: 'js/[name].js'
    }
  },
  filenameHashing: false,
}


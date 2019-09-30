module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.entryPoints.clear()
    }
  },
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


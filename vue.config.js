module.exports = {
  productionSourceMap: false,
  filenameHashing: false,
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.entryPoints.clear()
      config.optimization.delete('splitChunks');
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
}
import { url } from './src/assets/const'
module.exports = {
  // px2rem
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75
      })
  },
  // 设置代理
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/web': {
        // target 为请求接口的服务器地址
        target: url,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/web': ''
        }
      }
    },
    disableHostCheck: true
  }
}

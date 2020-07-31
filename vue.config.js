// 需要已经引入path模块，如果没有记得安装进去
// npm  install  path  --save

// 设置别名后写法：
// styles就是我在vue.config.js中设置的路径别名，代表 'src/assets/styles' 路径
// @import '~styles/variable.styl'

// vue/cli4的别名配置
const path = require('path');//引入path模块
const resolve = dir => path.join(__dirname, dir)//path.join(__dirname)设置绝对路径

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
        .set('@', resolve('./src'))
        .set('assets', resolve('./src/assets'))
        .set('components', resolve('./src/components'))
        .set('views', resolve('./src/views'))
        .set('common',resolve('./src/common'))
        .set('network',resolve('./src/network'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
}

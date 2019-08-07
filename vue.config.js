const path = require('path')//引入path
//__dirname:内置代表当前文件的文件夹的绝对路径
path.dirname(__dirname)

/* 
根据目录文件夹名得到其对应的绝对路径
*/
function resolve(dir){
    return path.resolve(__dirname,dir)
}

/* 
    配置指定引用带编译器的版本:vue.esm.js
*/
module.exports = {//编写webpack配置
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],//自动添加的文件扩展名
            alias: {//模块路径别名
              'vue$': 'vue/dist/vue.esm.js',//$代表精确匹配
              '@': resolve('src'),
              'components':resolve('src/components'),
              'pages':resolve('src/pages')
            }
          }
    },
    //配置开发服务中的代理
    /* 
    更加灵活 假设我有多个后台，即使只有一个后台
    我发折磨多请求出去，并不一定所有请求都转发 ，比如有一个自己mock的接口，完全不需要转发
    需要就加，不需要就不加
    */
    devServer: {
      proxy: {
        //请求地址以api开头
        '/api': {
          target: 'http://localhost:4000',//转发的目标地址
          changeOrigin: true,//需要虚拟主机站点 （支持跨域）
          pathRewrite :{//重写路径：让代理服务再转发请求时对路径进行特定修改
            '^/api': ''//去掉路径开头的/api
         }
        },
        '/baiidu': {
          target: 'http://www.baidu.com',
          changeOrigin: true,
          '^/baidu':''
        }
      }
    }
  }
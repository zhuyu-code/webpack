const path =require("path");
const config={
  entry:{
    index:'./src/index.js',
  },//多入口情况，使用对象语法，文档上第二种写法
  mode:'development',
  output:{
    filename:'[name]-buddle.js',//使用name由于多入口不会引起冲突
    path:path.resolve(__dirname,'../dist')//必须为绝对路径
  },
  devServer:{
    contentBase:"dist"
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[
          {
            loader:"babel-loader"
          }
        ],
        exclude:/node_module/
      }
    ]
  }
}
module.exports=config
const path =require("path");
const config={
  entry:{
    app:'./src/index.js',
    ven:'./src/index2.js'
  },//多入口情况，使用对象语法，文档上第二种写法
  mode:'development',
  output:{
    filename:'[name]-buddle.js',//使用name由于多入口不会引起冲突
    path:path.resolve(__dirname,'../dist')//必须为绝对路径
  },
  devServer:{
    contentBase:"dist"
  }
}
module.exports=config
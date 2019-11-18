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
    contentBase:"dist",
    overlay:true
  },
  module:{
    rules:[
      {
      test:/\.css$/,
      use:[
        {
          loader:"style-loader"
        },
        {
          loader:"css-loader"
        }
      ]
      },
      {
        test:/\.html$/,
        use:[
          {
            loader:"file-loader",
            options:{
              name:"[name].html"
            }
          },
          {
            loader:"extract-loader"
          },
          {
            loader:"html-loader",
            options:{
              attrs:["img:src"]
            }
          }
        ]
      },
      {

        test: /\.(jpg|git|png)$/,
        
        use: [{
        
        loader: "file-loader",
        
        options: {
        
        name: "images/[name]-[hash:8].[ext]"
        
        }
        
        }]
        
        }
    ]
  }
}
module.exports=config
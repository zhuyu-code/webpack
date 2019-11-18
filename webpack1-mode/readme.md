# webpack4.0最简单的打包方式
## 安装
```yarn global add webpack webpack-cli webpack-dev-server ```
## 打包格式
1. 创建三个文件夹`mkdir config dist src`,在src里面创建index.js,在dist里面创建index.html,`touch dist/index.html,touch src/index.js`
## 简易打包命令
```webpack --mode=development```  
```webpack --mode=production```
## 局限
只适用于打包js文件，但是线上环境一般要打包为js，css，html,image文件，那就需要在config中配置，请看目录下一个例子
## webpack基本的打包流程介绍
* entry(配置入口，单入口和多入口都可以)
* mode（开发环境和生产环境）
* output（输出路径）
* devServer（配置服务器参数）
>contentBase:'dist'//用于运行server的时候直接进入dist运行index.html
## 打包命令
```webpack --config=config/webpack-dev.js```
```webpack-dev-server --config=config/webpack-dev.js```
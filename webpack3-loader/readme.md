## webpack基本的打包流程介绍
* entry(配置入口，单入口和多入口都可以)
* mode（开发环境和生产环境）
* output（输出路径）
* devServer（配置服务器参数）
>contentBase:'dist'//用于运行server的时候直接进入dist运行index.html
## 打包命令
```webpack --config=config/webpack-dev.js```
```webpack-dev-server --config=config/webpack-dev.js```
## loader的使用
* loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！
## loader的打包流程
1. 安装loader
2. 配置module对象里面rules规则
3. 正常使用webpack命令即可
### css的打包
* 需要style-loader,css-loader
### html和image的打包
* 需要extract-loader,用于区别js和html分开打包，因为index.html不只是现成的dist里面的了，都需要在src里打包出来的，dist文件夹里面全是打包后的结果，因为可能有很多html文件，你不可能全部写出来，需要让loader帮忙加载，html-loader用于打包html，fileloader用于改名和打包image。

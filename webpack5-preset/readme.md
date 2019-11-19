# babel-polyfill和preset
最简单的使用preset的情况下，也就是环境变量，不用独立的插件进行。
> yarn add babel-preset-env  

1. 首先还是要安装babel-cli用于使用babel打包命令等
2. 安装babel-loader加载所有的js使用babel的语法
3. 配置所有的语法在.babelrc里面，使用环境配置的情况下
4. 安装babel-preset-env插件进行配置环境变量操作。
5. 这个时候就会自动下载很多transform插件了
6. 运行这个babel-cli的时候不能全局使用的时候，使用局部的变量进行执行，就可以使用脚手架了
> ./node_modules/.bin/babel src/index.js
7. 继续配置浏览器和防止环境变量污染的.babelrc配置
```
{
  "presets": [[
    "env",
    {
      "target":{
        "browsers":["last 2 versions"]//配置浏览器知识版本
      },
      "debug":true
    }]
  ],
  "plugins":[
    "transform-runtime"//防止运行时promise转换污染全局变量
  ]
}
```
8.注意index.js引入的内容。
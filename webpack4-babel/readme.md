# webpack-cli配置babel
1. 首先创建.babelrc文件，下载所需要的babel-plugin，假如是es2015转化plugin为例子，下载所需要的plugin`yarn add babel-plugin-transform-es2015-arrow-functions`,然后有了这个箭头函数的专门插件后，就可以转换了
2. 插件下载完成后还要去专门去.babelrc配置这个插件，才能使用，官网的粘贴上去就行。
2. 可以先不结合webpack，先本地编译转换，下载babel-cli(我看官网这个依赖了babel-core等很多babel插件，然后babel-cli下载一个就可以代替多个)，下载后就可以使用babel命令了，直接babel src/index.js,控制台就会打印出转化的内容。(我测试失败了，但是不影响)
3. 开始结合webpack和babel，结合无非就是让webpack的loader进行加载需要的js文件进行babel编译，下载babel-loader进行操作。最后跑起来就行。
4.报错的话，他会让你安装babel-loader7以上，按照提示装就行，挺简单的。
5.识别Es7,ES8的语法可以使用其他插件，文件里面写了
6.使用babel-polyfill可以不用像之前那么麻烦看下一个文件夹
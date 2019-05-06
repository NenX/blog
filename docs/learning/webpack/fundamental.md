## 功能
- 代码转换
- 文件优化
- 代码分割
- 模块合并
- 开发服务
- 代码校验
- 自动发布

## 安装
::: tip
webpack4 需要安装webpack和webpack-cli两个包
:::
```shell
npm i webpack webpack-cli -D
```
## 配置
默认配置文件名为根目录下的<code>webpack.config.js</code>，默认导出一个webpack配置对象。
### webpack配置对象 
- entry：入口文件路径 
- output：出口。
  - filename：出口文件名 
  - path：必须是绝对路径 
- mode：模式。默认为production，可选development
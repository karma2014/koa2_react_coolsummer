# koa2_react_coolsummer
koa2+react+mysql项目，主要是为了体验react项目如何部署在node服务器上，以及koa2如何做一个查询数据库的接口，本项目是基于koa-generator脚手架的一个简单demo，主要作为学习node用。
后期会持续改进迭代。
### 本例目录主要文件夹作用:
public：react项目打包后文件
routes：路由
schema：sequelize自动生成
modles：引入mysql及其他业务代码
controllers：控制层，业务处理
config：连接myql数据库
utils：工具函数

### 本项目已上传至npm包
### 使用

1、npm install koa2_react_coolsummer

2、npm install

3、node app.js

4、默认8080端口，可以在localhost:8080/index中打开端口

5、如需要使用数据库接口，需要安装mysql，并建表使用。详细使用我会专门写一篇blog来讲解

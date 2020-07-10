# koa-apollo-mysql-template

## 描述·Description
基于koa和knex的apollo服务器模板，koa使用`koa-generator`创建。

## 目录结构·Structure
`bin`：可执行文件
- `bin/www.js`：应用入口
`data`：数据源
- `data/methods`：数据库操作方法，定义方法返回、修改、删除、增添数据库记录
`data/mysql.config.js`：数据库连接配置
- `model`：数据库模型
`model/resolver`：定义解析器
`modle/schema`：定义Schema模型
`mysql`：MySQL数据库相关
- `mysql/init.sql`：数据库真实测试用例，需要先在mysql中执行创建数据库和插入记录
`public`：可访问文件夹
`router`：路由
`views`：视图模板

## 模板教程
[我的博客](https://kylin.dev/2020/07/07/Apollo-GraphQL%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/)
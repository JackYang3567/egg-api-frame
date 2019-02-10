# …or create a new repository on the command line
```
echo "# egg-api-frame" >> README.md
git init
git add README.md
git add .
git commit -m "first commit"
git remote add origin https://github.com/JackYang3567/egg-api-frame.git
git push -u origin master
```
# …or push an existing repository from the command line
```
git remote add origin https://github.com/JackYang3567/egg-api-frame.git
git push -u origin master
```
# ======================================
# centos7 mysql数据库安装和配置
## 一、系统环境
升级系统版本
```
# yum update
```
升级完成后系统版本为
```
[root@yl-web yl]# cat /etc/redhat-release 
CentOS Linux release 7.1.1503 (Core) 
```

## 二、mysql安装
### 1、官网下载安装mysql-server
```
# wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
# rpm -ivh mysql-community-release-el7-5.noarch.rpm
# yum install mysql-community-server

#yum install mysql
#yum install mysql-server
#yum install mysql-devel
```
### 2、安装成功后重启mysql服务。
```
# service mysqld restart
```
### 3、初次安装mysql，root账户没有密码。
```
# mysql -u root 

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.6.43 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
3 rows in set (0.00 sec)

mysql> exit;
Bye

```
### 4、设置密码
```
mysql> set password for 'root'@'localhost' =password('root');

```
## 三、配置mysql
### 1、编码
mysql配置文件为/etc/my.cnf

最后加上编码配置
```
[mysql]
default-character-set =utf8
```
这里的字符编码必须和/usr/share/mysql/charsets/Index.xml中一致。

### 2、远程连接设置
如果MySql服务器没有设置远程连接，客户端连接时会报“Error No. 1130”错误

把在所有数据库的所有表的所有权限赋值给位于所有IP地址的root用户。
```
mysql> grant all privileges on *.* to root@'%'identified by 'root';
```
如果是新用户而不是root，则要先新建用户
```
mysql> create user 'username'@'%' identified by 'password'; 
``` 
此时就可以进行远程连接了。
# =======================================
# 用egg创建一个api框架（egg-api-frame）

一个Egg相关的API框架,确定已安装最新版本的node, 


## QuickStart

```
$ node -v             #如查显示的不是最新版本，请用nvm安装最新版本
$ nvm ls-remote       #查看node可用的版本
$ nvm install 11.9.0  #此处安装的是node 的11.9.0版本
```
确定已全局安装了egg-init脚手架。
```
$ npm i egg-init -g
```
使用egg-init脚手架创建项目
```
$ egg-init egg-api-frame --type=simple
```

### Development

```
$ cd egg-api-frame
$ npm i
$ npm run dev
```
### Browse
mac or linux在浏览器地址栏中输入：
```
http://localhost:7001/
```
or (如果用的是vagrant)在浏览器地址栏中输入：
```
 open http://192.168.3.10:7001/
```

## 一、安装相关组件
###　1、构建ORM
#### 1）、安装相关依赖
```
$ cd egg-api-frame
$ npm install egg-sequelize mysql2 sequelize-cli --save
```
#### 2）、配置sequelize
修改 ./package.json文件，添加如下几行：
```
"scripts": {
    "m:new":"sequelize migration:create",
    "m:up":"sequelize db:migration",
    "m:down":"sequelize db:migration:undo"
  },
```
#### 3）、配置config/plugin.js 启动插件
```
exports.sequelize = {  
    enable: true ,
    package: 'egg-sequelize'
};
```

#### 4）、配置config/config.default.js
```
config.sequelize = {  
    dialect: 'mysql' ,
    database: 'egg_api_frame',
    host:'localhost',
    port:'3306',
    username:'root',
    password:'',
};
```

###　2、数据库配置
#### 1）、创建.sequelizerc
```
$ cd egg-api-frame
$ touch .sequelizerc 
```
.sequelizerc  #包含下列内容：
```
const path = require('path');

module.exports = {
    'config': path.resolve('config','config.json'),
    'models-path': path.resolve('app','model'),
    'seeders-path': path.resolve('app','seeder'),
    'migrations-path': path.resolve('app','migration')
}
```
#### 2）、创建 ./config/config.json
./config/config.json #包含下列内容：
```
{
    "development": {
        "username": "root",
        "password": null,
        "database": "egg_api_frame",
        "host":"127.0.0.1",
        "dialect": "mysql" 
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "egg_api_frame_test",
        "host":"127.0.0.1",
        "dialect": "mysql" 
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "egg_api_frame_production",
        "host":"127.0.0.1",
        "dialect": "mysql" 
    }
}
```

#### 3）、创建文件夹
在项目目录app下创建下列文件夹
```
$ cd egg-api-frame/app
$ mkdir migration
$ mkdir model
$ mkdir seeder 
```
#### 4）、创建egg_api_frame数据库
使用Sequel pro（mac） 或SQLyog(windows)数据库图形化界面创建数据库

也可用mysql命令行创建数据库
```
mysql> create database egg_api_frame;
```
#### 5）、创建user的migration
```
$ ./node_modules/.bin/sequelize model:generate --attributes --name User
or
$ npm run m:new -- --name User
```

#### 6）、修改user的migration文件逻辑
打开编辑 ./app/migration/20190210013433-User.js 内容如下：
[20190210013433-User.js](https://github.com/JackYang3567/egg-api-frame/blob/master/app/migration/20190210013433-User.js)


#### 7）、创建user的migration
### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
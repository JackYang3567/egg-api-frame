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
    database: 'egg-api-frame',
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
#### 4）、创建user的migration
```
$ ./node_modules/.bin/sequelize model:generate --attributes --name User
```
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
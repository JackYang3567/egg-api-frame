# …or create a new repository on the command line
```
echo "# egg-api-frame" >> README.md
git init
git add README.md
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

## 安装相关组件
###　构建ORM
```
$ cd egg-api-frame
$ npm install egg-sequelize mysql2 sequelize-cli -g
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
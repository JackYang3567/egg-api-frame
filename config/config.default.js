'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549672234931_2982';

  // add your config here
  config.middleware = [];

  config.sequelize = {  
    dialect: 'mysql' ,
    database: 'egg_api_frame',
    host:'localhost',
    port:'3306',
    username:'root',
    password:'root',
};
  return config;
};

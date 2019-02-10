'use strict';
const utils = require('utility');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', [
    {
      email: '10808013567@163.com',
      password: utils.md5('111111'),
      inviter_id: 0,
      username: 'Jack',
      weixin: '10808013567',
      weibo: '10808013567',
      receive_remote: 0,
      email_verifyed: 1,
      avatar: '10808013567.jpg',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
},
 

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

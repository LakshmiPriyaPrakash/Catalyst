'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        name: 'Demo User',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'bubba@tiel.com',
        username: 'bubba',
        name: 'Bubba the Tiel',
        hashedPassword: bcrypt.hashSync('password'),
      },
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     const Op = Sequelize.Op;

     await queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition'] }
    }, {});
  }
};

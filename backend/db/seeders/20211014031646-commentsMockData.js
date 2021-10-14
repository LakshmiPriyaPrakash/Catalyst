'use strict';

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
     await queryInterface.bulkInsert('Comments', [
      {userId: 1, storyId: 1, body: "Brilliant piece!"},
      {userId: 2, storyId: 1, body: "Fantastic ideas."},
      {userId: 1, storyId: 2, body: "Great ideas."},
      {userId: 2, storyId: 2, body: "Got my brain thinking..."},
      {userId: 1, storyId: 4, body: "All geared up for a sustainable living!"},
      {userId: 2, storyId: 4, body: "Fabulous ideas!"},
      {userId: 1, storyId: 5, body: "Will share with friends and family."},
      {userId: 2, storyId: 5, body: "Inspired to pen down my own ideas"},
      {userId: 1, storyId: 6, body: "Will share with friends and family."},
      {userId: 2, storyId: 6, body: "Inspired to pen down my own ideas"},
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Comments', null, {});
  }
};

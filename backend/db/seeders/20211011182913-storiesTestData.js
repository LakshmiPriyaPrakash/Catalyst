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

      await queryInterface.bulkInsert('Stories', [
        {
          authorId: 1,
          title: "Practising minimalism in an era of abundance",
          subtitle: "Get started today!",
          imageUrl: "https://res.cloudinary.com/lpriya/image/upload/v1633982692/Catalyst/minimalism_agiqrc.jpg",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus purus, imperdiet id porta eu, blandit at felis. Maecenas vestibulum dolor mi, id mattis est tempor non. Vivamus tempus mi nec ante dictum, eu porta nisl suscipit. Suspendisse iaculis commodo mauris, vel condimentum nisl consectetur id. Aliquam nisi dui, blandit in mattis id, porta vel ligula. Donec ullamcorper ligula in nisi commodo lobortis. Phasellus et tempus lectus, nec efficitur enim. Pellentesque eu ante vestibulum, fringilla lacus eget, efficitur augue. Aenean libero urna, porttitor sed ex vitae, tempor venenatis dolor. Aliquam commodo, ex et feugiat iaculis, metus elit congue velit, ut consectetur felis purus at tellus. Morbi nibh nunc, ullamcorper nec ultrices ut, maximus placerat odio. Nullam scelerisque placerat mauris, sit amet varius nunc.",
        },

        {
          authorId: 1,
          title: "A list of creative ideas for a green lifestyle",
          subtitle: "Decide what kind of difference you want to make.",
          imageUrl: "https://res.cloudinary.com/lpriya/image/upload/v1633982693/Catalyst/green-lifestyle_bem50i.jpg",
          body: "Fusce suscipit malesuada ligula, eu mattis ex vestibulum eu. Cras aliquam fringilla leo quis consequat. Morbi et molestie mauris. Nulla sit amet varius erat. Phasellus felis nisi, mattis quis mauris vitae, faucibus fringilla diam. Morbi gravida felis at ornare tincidunt. Donec libero justo, semper et ante sollicitudin, lobortis pharetra erat. Proin ut semper orci. Vivamus sodales maximus malesuada. Phasellus lacus mauris, congue et ultricies ac, efficitur non orci.",
        },

        {
          authorId: 1,
          title: "Living off the grid and its impact on the environment",
          subtitle: "Tired of the daily grind? Leverage that to help the planet!",
          imageUrl: "https://res.cloudinary.com/lpriya/image/upload/v1633982694/Catalyst/off-grid_aw6qof.jpg",
          body: "Donec vitae volutpat lectus. Sed dignissim suscipit metus, vestibulum dignissim ligula laoreet quis. Suspendisse tempor tincidunt mauris ultrices dignissim. Proin tellus risus, pharetra eget dignissim a, condimentum eu lorem. Curabitur at nunc sed tortor commodo sodales. Donec id pulvinar ante, in bibendum est. Nulla eu purus vitae ex venenatis ullamcorper. Morbi quis ante porttitor, gravida felis sed, volutpat dui. Nullam molestie, nisl ac ultricies vulputate, leo nulla laoreet odio, eu feugiat lacus nunc a magna. Proin hendrerit neque eu ante vestibulum, eu laoreet justo tristique. Nullam pretium nulla luctus pulvinar tempus. Ut pellentesque, urna eu gravida mollis, dui lectus commodo massa, ac convallis ante erat ut turpis. Aliquam erat volutpat. In varius neque eu euismod aliquam. Vestibulum et enim at mauris venenatis dictum ac non ipsum.",
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

     await queryInterface.bulkDelete('Stories', null, {});
  }
};

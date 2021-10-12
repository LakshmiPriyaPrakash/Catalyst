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
        {
          authorId: 2,
          title: "Easy ways to being environmentally friendly",
          subtitle: "Have a lifestyle that is better for the environment.",
          imageUrl: "https://res.cloudinary.com/lpriya/image/upload/v1634025055/Catalyst/environmental-friendly_smbryh.jpg",
          body: "Morbi sed semper elit, quis pharetra orci. Aliquam erat volutpat. Vestibulum mollis eleifend ligula ut lobortis. Phasellus iaculis purus auctor vestibulum fermentum. Quisque ac tempus orci. Sed hendrerit nunc vehicula fringilla facilisis. Sed a orci eget orci sagittis consequat vel nec leo. Nulla efficitur mattis urna sit amet maximus. Phasellus feugiat semper venenatis. Integer molestie nibh eu purus ultricies, non volutpat libero accumsan. Donec eu est a metus ultrices eleifend nec nec augue. Fusce ligula ante, lobortis vitae leo non, commodo lobortis ex. Vivamus felis metus, blandit et turpis ut, efficitur rutrum nulla. Proin non mattis diam. Donec eleifend nibh a maximus aliquam.",
        },
        {
          authorId: 2,
          title: "Try renewable energy, go rooftop solar",
          subtitle: "Switch to clean and affordable electricity!",
          imageUrl: "https://res.cloudinary.com/lpriya/image/upload/v1634025055/Catalyst/solar-rooftops_tcyjwc.jpg",
          body: "Integer finibus enim in risus volutpat, sed maximus tellus feugiat. Phasellus et venenatis nunc. Donec sagittis sagittis molestie. In id convallis metus, eu scelerisque est. Vivamus scelerisque fermentum mi, ut convallis massa finibus ut. Suspendisse nunc risus, volutpat vel nisi id, luctus mollis odio. Pellentesque id magna sit amet dolor lacinia suscipit. Praesent vehicula justo sapien, a aliquam felis bibendum ut. Donec id molestie purus. Vivamus non tellus luctus, placerat justo nec, facilisis eros. Fusce justo ante, rutrum et metus a, mattis posuere arcu.",
        },
        {
          authorId: 2,
          title: "Reduce your carbon footprint, but locally grown produce",
          subtitle: "Support local farms and grow your own too.",
          imageUrl: "https://res.cloudinary.com/lpriya/image/upload/v1634025055/Catalyst/eat-local_lttu06.jpg",
          body: "Etiam nisi dolor, aliquam vitae posuere ac, euismod sed nisi. Praesent sagittis mollis elit a bibendum. Donec diam dui, ultrices quis ex sit amet, suscipit iaculis ligula. Praesent feugiat sem vitae tortor rutrum pretium. Nulla a odio ac dui ullamcorper elementum non non sapien. Sed a feugiat mi, id tempus sapien. Sed ac erat a ipsum egestas porta. Suspendisse quis velit eget nisi aliquam fringilla a nec augue. Suspendisse feugiat venenatis dui, molestie volutpat nisl semper in. Nullam erat purus, luctus in tincidunt id, posuere id nunc. In et pharetra felis.",
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

const express = require('express')
const asyncHandler = require('express-async-handler');
const { Story, User } = require('../../db/models');

const router = express.Router();

//gets all stories from the Stories table
router.get('/', asyncHandler(async function(req, res) {
    const stories = await Story.findAll({
        include: User
    });
    return res.json(stories);
}));


//inserts a story into the Stories table
router.post('/', asyncHandler(async function(req, res) {
      const newStory = await Story.create(req.body);
      const story = await Story.findByPk(newStory.id, {
        include: User
    });
      if(story) {
        return res.json(story);
      }
    })
  );


//edits a story
router.put('/:id', asyncHandler(async function(req, res) {
  await Story.update(req.body, { where: { id: req.body.id } });
  const updatedStory = await Story.findByPk(req.body.id);

  if(updatedStory) {
    return res.json(updatedStory);
  }
})
);

//deletes a story
router.delete('/delete/:id', asyncHandler(async function(req, res) {
  const storyId = req.params.id;
  await Story.destroy({ where: { id: storyId } })
  .then(() => {
    return res.json({message: 'Success'});
   })
})
);




module.exports = router;

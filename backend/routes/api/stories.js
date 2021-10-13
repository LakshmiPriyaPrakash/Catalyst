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
      let newStory = await Story.create(req.body);
      if(newStory) {
        return res.json(newStory);
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




module.exports = router;

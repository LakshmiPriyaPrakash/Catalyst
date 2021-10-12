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
      let story = await Story.create(req.body);
      if(story) {
        return res.json(story);
      }
    })
  );






module.exports = router;

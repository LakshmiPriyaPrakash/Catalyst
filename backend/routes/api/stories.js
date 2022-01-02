const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Story, User } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload} = require('../../awsS3.js')

const router = express.Router();

const validateStory = [
  check('title')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide a title.'),
  check('subtitle')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide a subtitle.'),
  check('body')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide content for story.'),
  handleValidationErrors,
];

//gets all stories from the Stories table
router.get('/', asyncHandler(async function(req, res) {
    const stories = await Story.findAll({
        include: User
    });
    return res.json(stories);
}));


//inserts a story into the Stories table
router.post('/',
            requireAuth,
            singleMulterUpload("image"),
            validateStory,
            asyncHandler(async function(req, res) {
              const { authorId, title, subtitle, body } = req.body;
              const imageUrl = await singlePublicFileUpload(req.file);
              const newStory = await Story.create({
                authorId,
                title,
                subtitle,
                body,
                imageUrl
              });
              const story = await Story.findByPk(newStory.id, {
                include: User
              });
              if(story) {
                return res.json(story);
              }
            })
  );


//edits a story
router.put('/:id',
            requireAuth,
            singleMulterUpload("image"),
            validateStory,
            asyncHandler(async function(req, res) {
              const { id, authorId, title, subtitle, body } = req.body;
              const imageUrl = await singlePublicFileUpload(req.file);
              const editedStory = {
                authorId,
                title,
                subtitle,
                body,
                imageUrl
              };

              await Story.update(editedStory, { where: { id: id } });
              const updatedStory = await Story.findByPk(id, {
                include: User
              });

              if(updatedStory) {
                return res.json(updatedStory);
              }
            })
);

//deletes a story
router.delete('/delete/:id', requireAuth, asyncHandler(async function(req, res) {
  const storyId = req.params.id;
  const deletedStory = await Story.destroy({ where: { id: storyId } })
  if(deletedStory) {
    return res.json(storyId);
  }
})
);




module.exports = router;

const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Comment, Story, User } = require('../../db/models');

const router = express.Router();

const validateComment = [
  check('body')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide content for comment.'),
  handleValidationErrors,
];

//gets all comments from the Comments table
router.get('/', asyncHandler(async function(req, res) {
    const comments = await Comment.findAll({
        include: [User, Story]
    });
    return res.json(comments);
}));


//inserts a comment into the Comments table
router.post('/', requireAuth, validateComment, asyncHandler(async function(req, res) {
    const newComment = await Comment.create(req.body);
    const comment = await Comment.findByPk(newComment.id, {
      include: [User, Story]
  });
    if(comment) {
      return res.json(comment);
    }
  })
);






module.exports = router;

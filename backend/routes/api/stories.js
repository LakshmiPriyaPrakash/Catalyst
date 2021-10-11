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






module.exports = router;

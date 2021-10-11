const express = require('express')
const asyncHandler = require('express-async-handler');
const { Story } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const stories = await Story.findAll();
    return res.json(stories);
}));






module.exports = router;

const express = require("express")
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)

    } catch (eror) {
        res.json({
            message: eror
        })

    }
})
module.exports = router
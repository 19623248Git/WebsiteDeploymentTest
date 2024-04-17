const express = require('express');
const router = express.Router();
const Post = require('./models/Post');

// Routes
router.get('/post', async (req, res) => {
    layout: false
    try {
        const data = await Post.find();
        res.render('Links', {data});
    } catch (error) {
        console.log(error)
    }
}

)

// GETTING POSTS
/**
 * GET /
 * Post :id
 */
router.get('/post/:id', async (req, res) => {
    layout: false
    try {
        let slug = req.params.id;
        const data = await Post.findById({_id: slug});
        res.render('temp', {data});
    } catch (error) {
        console.log(error)
    }
}

)

// SEARCH FUNCTION
/**
 * POST /
 * Post - searchTerms
 */
router.post('/search', async (req, res) => {
    layout: false
    try {
        const locals = {
            title: "Search",
        }

        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "")

        const data = await Post.find({
            $or: [
                {title: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
                {description: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
            ]
        });
        res.render("Search",{
            data,
            locals
        });
    } catch (error) {
        console.log(error)
    }
}

)

module.exports = router;
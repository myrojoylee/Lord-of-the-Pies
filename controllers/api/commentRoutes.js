// Call required dependencies, models and middleware
const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment } = require("../../models");

// This GET route finds all the comments
router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
        console.log(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

// This GET route finds comments by it's id
router.get('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        res.status(200).json(commentData);
        console.log(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// This POST route creates a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            recipe_id: req.body.recipe_id,
        })
        res.status(200).json(newComment)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// Export router
module.exports = router;

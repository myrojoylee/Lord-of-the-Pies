const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment } = require("../../models");

// TO DO: GET route to find all comments
// Remember to initialize session variables
// of data we need later
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

// TO DO: GET route to find a comment by id
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

// TO DO: POST route to create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            recipe_id: req.session.recipe_id,
        })
        res.status(200).json(newComment)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;

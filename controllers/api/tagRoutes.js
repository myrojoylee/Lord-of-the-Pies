// Call required dependencies, models and middleware
const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Tag, Recipe, RecipeTag } = require("../../models");


// This GET route finds all tags
router.get("/", withAuth, async (req, res) => {
  try {
    const tagData = await Tag.findAll()
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// This GET route finds tags by their id
router.get('/:id', withAuth, async (req, res) => {
  try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [
          {
            model: Recipe,
            through: {
              model: RecipeTag,
              attributes: ["id", "tag_id", "recipe_id"]
            }
          }
        ],
        });
      res.status(200).json(tagData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// Export router
module.exports = router;

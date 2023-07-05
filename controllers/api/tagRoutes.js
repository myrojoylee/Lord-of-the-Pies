//TO DO:
// require Tag, Recipe, and RecipeTag model
const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Tag } = require("../../models");
const { Recipe } = require("../../models");
const { RecipeTag } = require("../../models");

// GET to find all tags
router.get("/", withAuth, async (req, res) => {
  try {
    const tagData = await RecipeTag.findAll(
        {
          model: Tag, Recipe, RecipeTag
        },
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET to find a single tag
// make sure to include associated Recipe model
// using RecipeTag as a through table
router.get('/:id', withAuth, async (req, res) => {
  try {
      const tagData = await RecipeTag.findByPk(req.params.id, {
        include: [
          {
            model: Recipe
          }
        ],
      });
      res.status(200).json(tagData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;

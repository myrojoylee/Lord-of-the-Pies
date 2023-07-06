//TO DO:
// require Tag, Recipe, and RecipeTag model DONE
const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Tag } = require("../../models");
const { Recipe } = require("../../models");
const { RecipeTag } = require("../../models");
// lines 5-7 can be all one line

// GET to find all tags DONE
router.get("/", withAuth, async (req, res) => {
  try {
    const tagData = await Tag.findAll()
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});
// GET to find a single tag
// make sure to include associated Recipe model
// using RecipeTag as a through table
// DONE
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

module.exports = router;

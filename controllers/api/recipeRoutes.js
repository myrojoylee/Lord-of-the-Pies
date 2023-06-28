const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Recipe } = require("../../models");

//TO DO: POST route to create a new recipe

router.get("/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// updating a recipe by id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedRecipeData = await Recipe.update(
      {
        name: req.body.name,
        detail: req.body.detail,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!updatedRecipeData) {
      res.status(400).json({ message: "No recipe found with that id!" });
      return;
    }

    res.status(200).json(updatedRecipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: "No recipe found with this id!" });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

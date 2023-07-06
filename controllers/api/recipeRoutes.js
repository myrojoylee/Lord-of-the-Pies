// Call required dependencies, models and middleware
const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Recipe, User } = require("../../models");

//This GET route finds all recipes
router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// This GET route finds recipes by their id
router.get("/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//This POST route create a new recipe
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

// This PUT route updates a specific recipe by it's id
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

// This DELETE route deletes a recipe by id
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

// Export router
module.exports = router;

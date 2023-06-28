const router = require("express").Router();
const { User, Recipe, Comment } = require("../models");
const withAuth = require("../utils/auth");

// renders homepage
router.get("/", async (req, res) => {
  try {
    // TO DO: specify attributes so that we can
    // render recipe name, recipe detail
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render("homepage", {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TO DO: create route for user profile.
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"],
      },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    console.log(user);
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// TO DO: create route for recipe by id.
router.get("/recipe/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      includes: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["recipe_id", "user_id"],
        },
      ],
    });
    const recipe = recipeData.get({ plain: true });
    console.log(recipe);
    if (!recipeData) {
      res.status(404).json({ message: "No recipe found" });
    }
    res.render("/recipe/:id", {
      ...recipe,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route for new recipe creation
router.get("/new-recipe", withAuth, async (req, res) => {
  try {
    // Find the logged in blogger based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    res.render("new-post", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// TO DO: create route for login
router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("./homepage");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});
// TO DO: create route to sign up
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});
//do this

module.exports = router;

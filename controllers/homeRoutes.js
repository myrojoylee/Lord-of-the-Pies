// Call required dependencies, models and middleware
const router = require("express").Router();
const { User, Recipe, Comment, Tag, RecipeTag } = require("../models");
const withAuth = require("../utils/auth");
require("dotenv").config();

// Route that renders homepage
router.get("/", async (req, res) => {
  try {
    // specify attributes so that we can
    // render recipe name, recipe detail
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Tag,
          through: {
            model: RecipeTag,
            attributes: ["id", "tag_id", "recipe_id"],
          },
        },
      ],
    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render("homepage", {
      recipes,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to print out user profile.
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
      user_name: req.session.user_name,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to print out recipes by id and their following comments.
router.get("/recipe/:id", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
        {
          model: User,
          attributes: ["username", "id"],
        },
      ],
    });
    const recipe = recipeData.get({ plain: true });
    console.log(recipe);
    if (!recipeData) {
      res.status(404).json({ message: "No recipe found" });
    }

    if (recipe.user_id === req.session.user_id) {
      res.render("recipe", {
        ...recipe,
        user_id: req.session.user_id,
        user_name: req.session.user_name,
        logged_in: req.session.logged_in,
      });
    } else {
      res.render("comment", {
        ...recipe,
        user_id: req.session.user_id,
        user_name: req.session.user_name,
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// route to print out new recipe creation page
router.get("/new-recipe", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    res.render("new-recipe", {
      ...user,
      logged_in: true,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
      upload_preset: process.env.CLOUDINARY_PRESET,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to print out login page
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
// Route to print out sign up page
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export Router
module.exports = router;

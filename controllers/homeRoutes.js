const router = require("express").Router();
const { User, Recipe, Comment } = require("../models");
const withAuth = require("../utils/auth");

// renders homepage
router.get("/", async (req, res) => {
  try {
    // TO DO: specify attributes so that we can
    // render recipe name, recipe detail
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// TO DO: create route for user profile.
// Specify attributes so that we can render
// user name on the page

// TO DO: create route for recipe by id.
// Specify attributes so that we can render
// receipt name, recipe detail, recipe author, recipe date, and associated comments

// TO DO: create route for login

// TO DO: create route to sign up

module.exports = router;

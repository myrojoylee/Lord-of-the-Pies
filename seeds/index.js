const sequelize = require("../config/connection");
const { User, Recipe, Comment } = require("../models");

const userData = require("./userData");
const recipeData = require("./recipeData");
const commentData = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();

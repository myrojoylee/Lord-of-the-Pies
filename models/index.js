// import models
const User = require("./User");
const Recipe = require("./Recipe");
const Comment = require("./Comment");
const RecipeTag = require("./RecipeTag");
const Tag = require("./Tag");

// model associations

// User has many recipes
User.hasMany(Recipe, {
  foreignKey: "user_id",
});

// Recipe belongs to User
Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Recipe has many Comments 
Recipe.hasMany(Comment, {
  foreignKey: "recipe_id",
});

// Comment belongs to recipe
Comment.belongsTo(Recipe, {
  foreignKey: "recipe_id",
});

// Recipe belongs to many tags through RecipeTag
Recipe.belongsToMany(Tag, {
  through: RecipeTag,
});

// Tag belongs to many recipes through RecipeTag
Tag.belongsToMany(Recipe, {
  through: RecipeTag,
});

// export all classes
module.exports = { User, Recipe, Comment, RecipeTag, Tag };

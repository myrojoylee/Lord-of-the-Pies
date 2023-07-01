const User = require("./User");
const Recipe = require("./Recipe");
const Comment = require("./Comment");
const RecipeTag = require("./RecipeTag");
const Tag = require("./Tag");

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Recipe.hasMany(Comment, {
  foreignKey: "recipe_id",
});

Comment.belongsTo(Recipe, {
  foreignKey: "recipe_id",
});

Recipe.belongsToMany(Tag, {
  through: RecipeTag,
});

Tag.belongsToMany(RecipeTag, {
  through: RecipeTag,
});

//test

module.exports = { User, Recipe, Comment, RecipeTag, Tag };

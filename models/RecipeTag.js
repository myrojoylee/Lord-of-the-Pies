// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config folder
const sequelize = require("../config/connection");

// Initialize RecipeTag model by extending off Sequelize's Model Class
class RecipeTag extends Model {}

RecipeTag.init(
  {
    // define columns for RecipeTag model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // references recipe model by it's id 
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "recipe",
        key: "id",
      },
    },
    // references tag model by it's id 
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "tag",
          key: "id",
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe_tag",
  }
);

// Export RecipeTag
module.exports = RecipeTag;

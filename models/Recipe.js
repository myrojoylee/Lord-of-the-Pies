// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config folder
const sequelize = require("../config/connection");

// Initialize Recipe model by extending off Sequelize's Model Class
class Recipe extends Model {}

Recipe.init(
  {
    // define columns for Recipe model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alt_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // references user model by it's id 
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

// Export Recipe
module.exports = Recipe;

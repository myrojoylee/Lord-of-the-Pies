// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config folder
const sequelize = require("../config/connection");

// Initialize Recipe model by extending off Sequelize's Model Class
class Comment extends Model {}

Comment.init(
  {
    // define columns for Comment model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    detail: {
      type: DataTypes.TEXT,
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
    // references recipe model by it's id 
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "recipe",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

// Export Comment
module.exports = Comment;

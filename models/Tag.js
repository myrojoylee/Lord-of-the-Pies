// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config folder
const sequelize = require("../config/connection");

// Initialize Tag model by extending off Sequelize's Model Class
class Tag extends Model { }

Tag.init(
    {
        // define columns for Tag model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tag",
    }
);

// Export Tag
module.exports = Tag;



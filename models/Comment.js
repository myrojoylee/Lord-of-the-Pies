const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        detail: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
          },

        user_id: {
            type: DataTypes.STRING,
            references: {
              model: 'user',
              key: 'id',
            },
        },

        recipe_id: {
            type: DataTypes.STRING,
            references: {
                model: 'recipe',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;

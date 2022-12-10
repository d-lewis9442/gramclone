'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
      Comment.belongsTo(models.Post, { foreignKey: 'postId' })
    }
  }
  Comment.init(
    {
      body: {
        allowNull: false,
        type: DataTypes.STRING
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'posts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}

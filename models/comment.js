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
    }
  }
  Comment.init(
    {
      body: {
        allowNull: false,
        type: DataTypes.STRING
      },
      likes: DataTypes.INTEGER,
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
      },
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
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

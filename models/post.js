'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      image: {
        allowNull: false,
        type: DataTypes.STRING
      },
      body: {
        allowNull: false,
        type: DataTypes.STRING
      },
      likes: DataTypes.INTEGER,
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Post
}

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('user_followers', 'userId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })

    await queryInterface.changeColumn('user_followers', 'followerId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })

    await queryInterface.changeColumn('posts', 'userId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })

    await queryInterface.changeColumn('comments', 'userId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })

    await queryInterface.changeColumn('comments', 'postId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'posts',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('user_followers', 'userId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE'
    })

    await queryInterface.changeColumn('user_followers', 'followerId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE'
    })

    await queryInterface.changeColumn('posts', 'userId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE'
    })

    await queryInterface.changeColumn('comments', 'userId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE'
    })

    await queryInterface.changeColumn('comments', 'postId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE'
    })
  }
}

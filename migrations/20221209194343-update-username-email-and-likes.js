'use strict'

const { query } = require('express')
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    })

    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })

    await queryInterface.changeColumn('posts', 'likes', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    })

    await queryInterface.changeColumn('comments', 'likes', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
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
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: false
    })

    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      allowNull: false
    })

    await queryInterface.changeColumn('posts', 'likes', {
      type: Sequelize.INTEGER
    })

    await queryInterface.changeColumn('comments', 'likes', {
      type: Sequelize.INTEGER
    })
  }
}

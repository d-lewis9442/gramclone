// User Associations
User.belongsToMany(models.User, {
  as: 'followers',
  through: models.UserFollower,
  foreignKey: 'userId'
})
User.belongsToMany(models.User, {
  as: 'following',
  through: models.UserFollower,
  foreignKey: 'followerId'
})
User.hasMany(models.Posts, { foreignKey: 'userId' })
User.hasMany(models.Comments, { foreignKey: 'userId' })

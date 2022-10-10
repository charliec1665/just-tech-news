const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');

// create associations
User.hasMany(Post, {
    // declare foreignkey which creates reference for the id column in the User model to link to foreign key pair, 
        // which is the user_id in the Post model
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// add reverse association
Post.belongsTo(User, {
    // declare foreignkey which is designated as user_id in the Post model
    foreignKey: 'user_id',
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };
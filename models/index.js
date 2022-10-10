const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    // declare foreignkey which creates reference for the id column in the User model to link to foreign key pair, 
        // which is the user_id in the Post model
    foreignKey: 'user_id'
});

// add reverse association
Post.belongsTo(User, {
    // declare foreignkey which is designated as user_id in the Post model
    foreignKey: 'user_id',
});

module.exports = { User, Post };
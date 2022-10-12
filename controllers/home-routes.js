// contain home-facing routes like homepage and login page
const router = require('express').Router();

router.get('/', (req, res) => {
    // render is usable because we've hooked up a template engine, we only need to specify which template we want to use 'homepage'
    res.render('homepage', {
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebars Docs',
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;
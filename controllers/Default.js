const guard = require('../guard');

function def() {
    response.render('default', {
        title: 'Posts',
        posts: [
            {
                title: 'test post title',
                content: 'test post content'
            },
            {
                title: 'test post title 2',
                content: 'lorem200'
            }

        ]
    });
}

module.exports.default = def;

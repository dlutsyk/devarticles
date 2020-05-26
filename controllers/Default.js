const guard = require('../guard');

function show() {
    response.render('home', {title: 'Default title'});
}

module.exports.Show = guard.ensure(['http', 'get'], show);
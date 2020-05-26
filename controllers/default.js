const guard = require('../guard');

function def() {
    response.render('home', {title: 'Default controller'});
}

module.exports.default = def;

const guard = require('../guard');

function show() {
    response.render('home', {title: 'Home Show'});
}

function def() {
    response.render('home', {title: 'Home Default'});
}

function user() {
    response.send(JSON.stringify(request.query));
}

module.exports.default = def;
module.exports.user = user;
module.exports.show = guard.ensure(['http', 'get'], show);

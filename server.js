const express = require('express');
const handlebars = require('express-handlebars')
const app = require('./app');

// Initialize express and associate it with app instance.
app.server = express();

app.server.engine('handlebars', handlebars({defaultLayout: 'main', extname: 'hbs'}))
app.server.set('views', './views');
app.server.set('view engine', 'handlebars');

// Initialize application insance.
app.init();

// Start server to lister
app.server.listen(process.env.PORT || '3000');

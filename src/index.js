const express = require('express');
var path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db= require('./config/db');
//connnect 
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
route(app);
app.listen(port, () => {
  console.log(`Example App listening at http://localhost:${port}`);
});

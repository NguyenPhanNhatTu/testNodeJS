const newsRouter = require('./news');
const siteRouter = require('./site');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/connectdb');
mongoose.connection.once('open', function () {
  console.log('Ket noi duoc thuc hien');
});

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}
module.exports = route;

const { Router } = require('express')
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.get("/", function (req, res) {
    res.render("index");
});

routes.get('/gallery', function (req, res) {
  res.render('gallery')
})


module.exports = routes;


const routes = require('express').Router();
const NewsController = require('../../controllers/newsController');

routes.get('/news/get-all', NewsController.getAllNews);
routes.get('/news/get-new', NewsController.getNewByID);

module.exports = routes;
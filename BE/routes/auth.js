const authControllers = require('../controllers/authControllers');

const routes = require('express').Router();

routes.post("/register", authControllers.registerUser);

module.exports = routes;
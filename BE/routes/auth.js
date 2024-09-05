const authControllers = require('../controllers/authControllers');

const routes = require('express').Router();
//REGISTER
routes.post("/register", authControllers.registerUser);
//LOGIN
routes.post("/login", authControllers.loginUser);

module.exports = routes;
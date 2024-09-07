const authControllers = require('../controllers/authControllers');
const middlewareControllers = require('../controllers/middlewareControllers');

const routes = require('express').Router();
//REGISTER
routes.post("/register", authControllers.registerUser);
//LOGIN
routes.post("/login", authControllers.loginUser);

//REFRESH TOKEN
routes.post("/refresh", authControllers.requestRefreshToken);

//LOGOUT
routes.post("/logout", middlewareControllers.verifyToken, authControllers.userLogout);

module.exports = routes;
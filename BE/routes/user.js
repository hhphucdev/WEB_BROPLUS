const middlewareControllers = require("../controllers/middlewareControllers");
const userControllers = require("../controllers/userControllers");

const router = require("express").Router();

//GET ALL USERS
router.get("/", middlewareControllers.verifyToken, userControllers.getAllUsers);

//DELETE USER
router.delete("/:id", middlewareControllers.verifyTokenAndAdminAuth, userControllers.deleteUser);

module.exports = router;

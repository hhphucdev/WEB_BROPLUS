const userControllers = require("../controllers/userControllers");

const router = require("express").Router();

//GET ALL USERS
router.get("/", userControllers.getAllUsers);

//DELETE USER
router.delete("/:id", userControllers.deleteUser);

module.exports = router;

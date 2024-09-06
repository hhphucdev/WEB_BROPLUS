const User = require("../models/User");

const userControllers = {
  //GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //DELETE USER
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json("User deleted");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = userControllers;

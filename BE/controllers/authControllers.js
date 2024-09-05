const User = require("../models/User");
const brcypt = require("bcrypt");

const authControllers = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await brcypt.genSalt(10);
      const hashed = await brcypt.hash(req.body.password, salt);

      //Create a new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      //Save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //LOGIN
    loginUser: async (req, res) => {
        try {}
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = authControllers;

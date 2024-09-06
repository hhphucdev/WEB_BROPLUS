const User = require("../models/User");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authControllers = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await brcypt.genSalt(10);
      const hashed = await brcypt.hash(req.body.password, salt);

      //Create a new user
      const newUser = new User({
        username: req.body.username,
        phone: req.body.phone,
        password: hashed,
      });

      //Save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //   LOGIN
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ phone: req.body.phone });
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      const validPassword = await brcypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json({ message: "Wrong password" });
      }
      if (user && validPassword) {
        const accessToken = jwt.sign(
          { id: user._id, admin: user.admin },
          process.env.MYSECRET,
          {
            expiresIn: "1h",
          }
        );
        const { password, ...info } = user._doc;
        res.status(200).json({ ...info, accessToken });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = authControllers;

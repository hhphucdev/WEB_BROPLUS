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
    //GENERATE NEW ACCESS TOKEN
    generateAccessToken: (user) => {
      return jwt.sign({ id: user._id, admin: user.admin }, process.env.MYSECRET, {
        expiresIn: "5d",
      });
    },

    //GENERATE NEW REFRESH TOKEN

    generateRefreshToken: (user) => {
      return jwt.sign(
        { id: user._id, admin: user.admin },
        process.env.MYREFRESHSECRET,
        { expiresIn: "365d" }
      );
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
          const accessToken = authControllers.generateAccessToken(user);
          const refreshToken = authControllers.generateRefreshToken(user);
          res.cookie("refreshtoken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
          });
          const { password, ...info } = user._doc;
          res.status(200).json({ ...info, accessToken });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  };

  //STORE TOKEN

  module.exports = authControllers;

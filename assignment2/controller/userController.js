const User = require("../models/user");
const bcrypt = require("bcrypt");

const register= async (req, res) => {
    const { username, password, email } = req.body;
    try {
      const existingUser  = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('User already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword, email });
      await newUser.save();
      res.send('User registered successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error registering user');
    }
  };

  module.exports = {register};
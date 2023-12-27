const User = require("../models/user");
const bcrypt = require("bcrypt");
const req = require("express/lib/request");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({
    id : user.id,
    email : user.email},
    'myuser',
    {expiresIn : 8640000}
  )
}

const register= async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser  = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('User already exists');
        console.log("User already exists");
      }
      // if(password !== confirmpassword){
      //   return res.status(400).send('Passwords do not match');
      // }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      res.send('User registered successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error registering user');
      console.log("Error registering user");
    }
  };
const login = async (req, res) => {
  const { email, password } = req.body;
  try{
  const user = await User.findOne({email});
  if(user && bcrypt.compareSync(password, user.password)){
    req.session.user = ({email: user.email});
    const token = generateToken(user);
    res.cookie("token",token);
    console.log('Generated Token:', token);
    // res.json({ token });
    console.log("Login Successful");
    res.redirect('/articlevariety.html'); // Redirect to a protected page
    } else {
      console.log('Invalid credentials');
      res.redirect('/login.html'); // Redirect to the login page
    }
  }catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal server error');
  }
};

const logout =  (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Logout failed');
    }
    res.clearCookie('token');
    res.redirect('/');
    console.log('User logged out');

  });

  
};
const getUsers = async (req, res) => {
  try {
    const email = req.user.email;

    if(email==="admin123@gmail.com"){
      const token = generateToken(AdminUser);
      const users = await User.find();
      console.log(users);
      res.json(users);
      
    }
    else{
      return res.status(400).send('User is not an admin');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
const postUsers = async (req, res) => {
  console.log('user posted');
}
const putUsers = async (req, res) => {
  console.log("users updated");
}
const deleteUsers = async (req, res) => {
  console.log('user deleted');
}



  module.exports = {register,login,logout,getUsers,postUsers,putUsers,deleteUsers};
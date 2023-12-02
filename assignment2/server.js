var express = require('express');
const user = require("./models/user");

var app = express();

var path = require('path');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const connect = require("./configs/mongo")
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
app.use(express.json()); //this is for sending the same data in receive that you initially send in req
connect();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  // key: 'user_sid',
  secret: 'myuser', // Change this to a secure random string
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60000 }
}));


app.use(bodyParser.urlencoded({ extended: true }));



// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use(require("./routes/userRoutes"));

app.listen(3000);
console.log('Server is listening on port 3000');
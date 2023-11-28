var express = require('express');
const user  = require("./models/user");

var app = express();

var path = require('path');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const connect = require("./configs/mongo")
app.use(express.json()); //this is for sending the same data in receive that you initially send in req
connect();


// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use(require("./routes/userRoutes"));

app.listen(3000);
console.log('Server is listening on port 3000');
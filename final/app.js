// app.js
const express = require('express');
const app = express();
var path = require('path');
const port = 3000;
const mongoose = require("mongoose");
const connect = require("./configs/mongo");
connect();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

// const myRoutes = require('./routes/myroutes');
// app.use('/', myRoutes);

app.use(require("./routes/myroutes"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



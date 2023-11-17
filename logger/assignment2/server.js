var express = require('express');
var app = express();
var path = require('path');
// let University = require("./models/university");

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.json); this is for sending the same data in receive that you initially send in req
// app.use(express.static('style.css'));
// app.use(express.static('/public/style.css'));
// app.use(express.static('/public/scripting.js'));

//sir code
app.get("/api/universities",async function(req,res){ //async ia a special func that means that thread hnadling should be done by node and not us
  // let records = await University.find(); use await to stop code until result does not come
  // res.send(records); //all IO operations are async and use await to stop code until result does not come
  res.send([{name:'Comsats',city:'Lahore',},
  {name:'PIEAS',city:'islamabad'}])
})
//similarly we will make app.post for post request
//app.patch for patch request
//app.delete for delete request
//then these function in rotes/api/universities,js
//and then tell to use that router in this file
//npm install mongoose
// code copy for connection: either install or copy code for cloud
// app.use(express.static(path.join(__dirname, 'public')));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/markup');
});

// about page
app.get('/registration.html', function(req, res) {
  res.render('pages/registration');
});
app.get('/articlevariety.html', function(req, res) {
  res.render('pages/articlevariety');
});
app.get('/login.html', function(req, res) {
  res.render('pages/login');
});

app.listen(3000);
console.log('Server is listening on port 3000');
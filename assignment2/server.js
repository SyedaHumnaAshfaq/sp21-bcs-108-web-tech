var express = require('express');
var app = express();
var path = require('path');

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static('style.css'));
// app.use(express.static('/public/style.css'));
// app.use(express.static('/public/scripting.js'));


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

app.listen(3000);
console.log('Server is listening on port 3000');
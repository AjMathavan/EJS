var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sundar Pichai ', organization: "google", birth_year: 2015},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Elon Musk', organization: "spacex", birth_year:  2002}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(9002);
console.log('Server is listening on port 9002');
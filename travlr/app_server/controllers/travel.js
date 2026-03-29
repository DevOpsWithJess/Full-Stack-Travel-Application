// require the file system module to read external files
var fs = require('fs');

// require path to help locate the JSON file correctly
var path = require('path');

// reads the trips.json file and converts it from JSON into a JavaScript object
var trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

// creates a function called travel that receives the request and response
const travel = (req, res) => {
  // renders the travel view page and passes the title and trips data to the view
  res.render('travel', {
    title: 'Travel',
    trips: trips
  });
};

// exports the travel function so it can be used in other parts of the application
module.exports = {
  travel
};
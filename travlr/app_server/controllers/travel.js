// Define the endpoint for fetching trips data from the API
const tripsEndpoint = 'http://localhost:3000/api/trips';
const fetch = require('node-fetch');
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};
// require the file system module to read external files
//var fs = require('fs');

// require path to help locate the JSON file correctly
//var path = require('path');

// reads the trips.json file and converts it from JSON into a JavaScript object
//var trips = JSON.parse(
//  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
// 

// creates a function called travel that receives the request and response
const travel = async (req, res) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    const trips = await response.json();

    res.render('travel', {
        title: 'Travel',
        trips: trips
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching trips data' });
  }
};

// exports the travel function so it can be used in other parts of the application
module.exports = {
  travel
};
// Loads the express module 
const express = require('express');
// Creates a new router object using the express.Router() method
const router = express.Router();
// Imports the controller 
const ctrlTravel = require('../controllers/travel');
// when someone visits /travel, the travel function from the controller will be called
router.get('/', ctrlTravel.travel);

module.exports = router;
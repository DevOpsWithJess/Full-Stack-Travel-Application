const fs = require('fs');
const path = require('path');
const mongoose = require('./app_server/models/db');
const Trip = require('./app_server/models/travlr');

const dataPath = path.join(__dirname, 'data', 'trips.json');

const seedDB = async () => {
  try {
    const json = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const trips = json.trips || json;

    await Trip.deleteMany({});
    await Trip.insertMany(trips);

    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Seed error:', err);
    mongoose.connection.close();
  }
};

seedDB();
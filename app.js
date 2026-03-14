/* Load required modules
    express= webframework
    path = helps Node find files */
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const ctrlTravel = require('./app_server/controllers/travel');

/* Create an Express application */
const app = express();

/* Define the port to run the server on */
const port = process.env.PORT || 3000;

/* Serve static files
   tells Express that everything in the public directory
   can be accessed by the browser */
app.use(express.static(path.join(__dirname, 'public')));

/* Register handlebars partials */
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

/* Indicating where the views are stored and which view engine to use */
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

/* Default route */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* Travel route */
app.get('/travel', ctrlTravel.travel);

/* Start the node server */
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
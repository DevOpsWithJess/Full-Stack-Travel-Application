/* Load required modules
    express= webframework
    path = helps Node find files */
const express = require('express');
const path = require('path');

/* Create an Express application */
const app = express();

/* Define the port to run the server on */
const port = process.env.PORT || 3000;

/* Serve static files
   tells Express that everything in the public directory
   can be accessed by the browser */
app.use(express.static(path.join(__dirname, 'public')));

/* Default route */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* Start the node server */
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
// creates a function called travel that receives the request and response
const travel = (req, res) => {
  // renders the travel view page and passes the title variable with the value 'Travel'
  res.render('travel', { title: 'Travel' });
};
// exports the travel function so it can be used in other parts of the application
module.exports = {
  travel
};
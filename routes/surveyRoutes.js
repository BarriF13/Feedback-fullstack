//to access the survey route we need to know if the user logged in first
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
  //line below= if some one request to access this route first run the requireLogin then go to last argument
  app.post('/api/surveys',requireLogin, requireCredits, (req, res) => {

  });

};

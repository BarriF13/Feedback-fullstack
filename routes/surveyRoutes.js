
const _ = require('lodash'); // convention
const { Path } = require('path-parser');
const { URL } = require('url')// this comes from node
const mongoose = require('mongoose');
//to access the survey route we need to know if the user logged in first
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

//access model class -
const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });
  //line below= if some one request to access this route first run the requireLogin then go to last argument
  app.post('/api/surveys/webhooks', (req, res) => {
    //console.log(req.body);
    const events = _.map(req.body, (event) => {
      const pathname = new URL(event.url).pathname;
      const p = new Path('/api/surveys/:surveyId/:choice');
      const match = p.test(pathname);
      if(match){
        return { email: event.email, surveyId: match.surveyId, choice: match.choice}
      }
    })
    res.send({});
  });
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,

      recipients: recipients.split(',').map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()

    });
    //great place to send an email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err)
    }
  });

};

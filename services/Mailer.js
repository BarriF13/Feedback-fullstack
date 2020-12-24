const sendgrid = require('sendgrid');

const helper = sendgrid.mail;
 
const keys = require('../config/keys');


//this class get's lot's of configuration and gives out mailer that's why we make it like react class comp
class Mailer extends helper.Mail{
  
}
module.exports = Mailer;
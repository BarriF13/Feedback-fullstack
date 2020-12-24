const sendgrid = require('sendgrid');

const helper = sendgrid.mail;
 
const keys = require('../config/keys');


//this class get lot's of configuration and gives out mailer that's why we make it like react class comp
class Mailer extends helper.Mail{

  constructor({ subject, recipients}, content){
    super();

    this.from_email = new helper.Email('no-reply@howdowedo.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);
  }


}


module.exports = Mailer;
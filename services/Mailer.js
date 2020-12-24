const sendgrid = require('sendgrid');

const helper = sendgrid.mail;

const keys = require('../config/keys');


//this class get lot's of configuration and gives out mailer that's why we make it like react class comp
class Mailer extends helper.Mail {

  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email('no-reply@howdowedo.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);

    });
  }
  //this is how sendgrid works ----------------------------------
    addClickTracking(){
      const trackingSettings = new helper.TrackingSettings();
      const clickTracking = new helper.clickTracking(true, true);

      trackingSettings.setClickTracking(clickTracking);
      this.addTrackingSettings(trackingSettings);
    }
  }



module.exports = Mailer;
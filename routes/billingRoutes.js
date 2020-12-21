// routes for billing 
const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin , async (req, res) => {

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    // access User model / access credit / add credit /(async.await fn)then save the user-we need to save it to const user again to update user always--same reference but different object
    req.user.credits += 5;
    const user = await req.user.save();
    //and send the new user to server 
    res.send(user);
  });
};

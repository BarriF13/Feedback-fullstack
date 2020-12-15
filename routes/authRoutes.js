const passport = require('passport')//actual module
//Route handler to send user to passport authentication place -'google' is internal strategy identifier inside GoogleStrategy

/* To use routes ->wrap in arrow functions
then export the function by using app object as arg */
module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    //scope tell google we want to access these two string below as already in google account and it's not made up
    scope: ['profile', 'email']
  })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
  //for logout
  app.get('/api/logout', (req, res ) => {
    req.logout();
    res.send(req.user);// just to say you are lotout
  })
  //route to check if the user already registered 
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

};
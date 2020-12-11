const express = require('express');
require('./services/passport');//passport.js doesn't return anything so we won't assign in to any variable
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./config/keys');

/********* WE CAN REFACTOR more to  *********
      const authRoutes = require('./routes/authRoutes')

 //then we call authRoutes with app object 
      authRoutes(app);    

--     to code line 18   **************/

const app = express();//express server
// heroku uses this and chose the port if not use 5000

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Client ID is ok if it gets shared 
// Client secret we don't want to share 
/************************************************************ */
/* Below passport STRG to services folder for refactoring purposes */
//Hey passport, I want you to authenticate a user with this strategy and () we say how 
//clientID and clientSecret
//https://console.developers.google.com/ -- for registering the app
// passport.use(new GoogleStrategy({
//   clientID: keys.googleClientID,
//   clientSecret: keys.googleClientSecret,
//   //after grant permission we sent user to url below --related to redirect_uri_mismatch
//   callbackURL: '/auth/google/callback'
// },
//   //now here we can get users props and save it to our database 
//   (accessToken, refreshToken, profile, done) => {
//     console.log('access token',accessToken);
//     console.log('refresh token',refreshToken);
//     console.log('profile:', profile);
    
//   })
// );
/************************************************************ */
/* Below two routes moved to route folder for refactoring purposes */
// //Route handler to send user to passport authentication place -'google' is internal strategy identifier inside GoogleStrategy
// app.get('/auth/google', passport.authenticate('google', {
//   //scope tell google we want to access these two string below as already in google account and it's not made up
//   scope: ['profile', 'email']
//   })
// );

// app.get('/auth/google/callback', passport.authenticate('google'));
/************************************************************ */



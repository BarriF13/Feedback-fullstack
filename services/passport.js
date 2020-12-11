
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
//Hey passport, I want you to authenticate a user with this strategy and () we say how 
//clientID and clientSecret
//https://console.developers.google.com/ -- for registering the app
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  //after grant permission we sent user to url below --related to redirect_uri_mismatch
  callbackURL: '/auth/google/callback'
},
  //now here we can get users props and save it to our database 
  (accessToken, refreshToken, profile, done) => {
    console.log('access token',accessToken);
    console.log('refresh token',refreshToken);
    console.log('profile:', profile);
    
  })
);


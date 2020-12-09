const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();//express server

const keys = require('./config/keys');
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

//Rout handler to send user to passport authentication place -'google' is internal strategy identifier inside GoogleStrategy
app.get('/auth/google', passport.authenticate('google', {
  //scope tell google we want to access these two string below as already in google account and it's not made up
  scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// heroku uses this and chose the port if not use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Client ID is ok if it gets shared 
// Client secret we don't want to share 

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
  //after grant permission we sent user to url below
  callbackURL: '/auth/google/callback'
  }, (accessToken) => {
    console.log(accessToken);
  })
);

// heroku uses this and chose the port if not use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Client ID is ok if it gets shared 
// Client secret we don't want to share 

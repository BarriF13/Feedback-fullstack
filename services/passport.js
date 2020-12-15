
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users'); //User is out model class here 

//for adding cookie-- user here is a database user and id is mongo id 
passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},

  (accessToken, refreshToken, profile, done) => {
    //console.log('profile', profile);
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        //if we already have a record
        if (existingUser) {
          //done is for finishing off with mongo first arg is err if there is no error we get null , second arg = user record-everything is done  
          done(null, existingUser);
        } else {
          //we make a new record
          // we use .save to save it database -mongoose model instance
          new User({ googleId: profile.id })
            .save()
            .then((user) => { done(null, user) });
        }
      })

  })
);


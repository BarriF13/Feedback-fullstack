
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users'); //User is out model class here 

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},

  (accessToken, refreshToken, profile, done) => {
    //console.log('profile', profile);
    User.findOne({ googleId: profile.id })
    .then((existingUser)=>{
      if(existingUser){
        //we already have a record
      } else {
        //we make a new record
        new User({ googleId: profile.id }).save();//it is not save in mondoDB yet so we use .save to save ut database 
      }
    })
   
  })
);


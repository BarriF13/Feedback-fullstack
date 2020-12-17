
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users'); //User is out model class here 

//for adding cookie-- user here is a database user and id is mongo id 
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//removing id , reversing the serializing process 
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true //just trust the proxy
},

  async (accessToken, refreshToken, profile, done) => {
    //console.log('profile', profile);
    const existingUser = await User.findOne({ googleId: profile.id })

    //if we already have a record
    if (existingUser) {
      //done is for finishing off with mongo first arg is err if there is no error we get null , second arg = user record-everything is done  
      done(null, existingUser);
    } else {
      //we make a new record
      // we use .save to save it database -mongoose model instance
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  })
);


const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');//to enabling cookie
const passport = require('passport');//to tell passport to use cookie
const bodyParser = require('body-parser')
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');//passport.js doesn't return anything so we won't assign in to any variable


mongoose.connect(keys.mongoURI);

const app = express();
//*********** middle wares **********/
//for parsing data we get form stripe api
app.use(bodyParser.json());
//now telling express to use cookie--maxAge = how long to expired in milliseconds (days*hours*min*second*millisecond)--Keys for encrypt and we don't put it in public
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys]

  })
);
//telling passport to use cookies for authentication 
app.use(passport.initialize());
app.use(passport.session());


//they return a function 
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


//for express in production mode in heroku
if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets 
  //like main.js file or main.css files
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);



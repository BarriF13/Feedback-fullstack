const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./services/passport');//passport.js doesn't return anything so we won't assign in to any variable


const app = express();
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT);


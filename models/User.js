//mongoose model class

const mongoose = require('mongoose');
//Schema is one of the properties in mongoose
//const Schema = mongoose.Schema; or  de-structure like below
const { Schema } = mongoose;
//mongoose like to know all the different properties on each record we want to have,  a head of time. So we use schema
//with schema object = will describe what each property should look like 

const userSchema = new Schema({
   googleId: String
  });

//To create the model class and tell mongoose to create userSchema :
//users is the name of collection 
mongoose.model('users', userSchema);

//now to execute the code above we go to index.js 
//mongoose in testing env , runs  model files requires multiple times and  get confused. so we require it differently 
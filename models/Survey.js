//mongoose model class
const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String ,
  body: String,
  subject: String,
  //would be emails so it would be an array
  recipients: [String]
 });

 mongoose.model('surveys', surveySchema);
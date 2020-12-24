//mongoose model class
const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient')
const surveySchema = new Schema({
  title: String ,
  body: String,
  subject: String,
  //would be emails so it would be an array
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0},

 });

 mongoose.model('surveys', surveySchema);
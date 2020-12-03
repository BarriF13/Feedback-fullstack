const express = require('express');

const app = express();//express server

app.get('/', (req ,res)=>{
  res.send({ hi: 'there'})

});
// heroku uses this and chose the port if not use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
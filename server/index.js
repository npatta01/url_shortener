const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser')
const urlRoutes = require('./routes/url');
const cors = require('cors');

require('./models/url')


require('dotenv').config()





const mongoURI = process.env.DB;
const connectOptions = { 
  keepAlive: true, 
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE 
}; 

//Connect to MongoDB 
mongoose.Promise = global.Promise; 
mongoose.connect(mongoURI, connectOptions, (err, db) => 
{ 
  if (err) console.log(`Error`, err); 
  console.log(`Connected to MongoDB`); 
}); 


const port = process.env.PORT || 3005;
const app = express();

app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//app.options('*', cors()) // include before other routes

app.get('/', async (req, res) => res.send('Hello World!'))


app.use('/api', urlRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
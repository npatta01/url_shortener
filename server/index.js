

const mongoose = require("mongoose");

const express = require("express");
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/url');
const cors = require('cors');
const path = require("path");

require('./models/url');


require('dotenv').config();

const {fetchRoute} =  require( "./routes/shared");


const mongoURI = process.env.DB;
const connectOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE
};

//Connect to MongoDB 
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
    if (err) console.log(`Error`, err);
    console.log(`Connected to MongoDB`);
});


const port = process.env.PORT || 3005;
const app = express();

app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
//app.options('*', cors()) // include before other routes


app.use('/api', urlRoutes);


app.use('/:code', fetchRoute);


// Serve static files if in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
} else {
    app.get('/', async (req, res) => res.send('Listening only on server mode'));

}

app.listen(port, () => console.log(`Url Shortener pp listening on port ${port}!`));
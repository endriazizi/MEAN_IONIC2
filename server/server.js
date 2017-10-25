'user strict'
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
 
// var databaseConfig = require('./config/database');
var router = require('./app/routes');
 
// mongoose.connect(databaseConfig.url);
//mongoose.connect('mongodb://endriazizi:endriazizi@ds133465.mlab.com:33465/mean_ionic2');



mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/zoo', { useMongoClient: true })
mongoose.connect('mongodb://endriazizi:endriazizi@ds133465.mlab.com:33465/mean_ionic2', { useMongoClient: true })
    .then(() => {
        console.log('connected to mongo database correctly!');
    })
app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");
 
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
 
router(app);
//set up environment variables
require('dotenv').config();
//server.js - automatically run when running npm start / shraed element
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
var db = require("./config/db");

//initialisation of app with Express
const app = express();

const port = 8000;

//parse URL encoded forms
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, database) => {
    if(err) return console.log(err);

    //make sure database name is added and not collection name
    db = database.db(process.env.DB_NAME);
    require('./app/routes')(app, db);

    //add listener to listen for HTTP requests
    app.listen(port, () => {
        console.log("We are live on " + port);
    });
});

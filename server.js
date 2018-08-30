//server.js - automatically run when running npm start / shraed element
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

//initialisation of app with Express
const app = express();

const port = 8000;

//add listener to listen for HTTP requests
app.listen(port, () => {
    console.log("We are live on " + port);
});
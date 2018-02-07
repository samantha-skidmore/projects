// src/server.js 

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const contact = require("./App/models/contact");
const app = express();

let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/contact", require("./App/routes"));

mongoose.connect("mongodb://localhost/contact", (err) => {
    if (err) throw err;
    console.log("Connected to the database");

});

app.listen(port, () => {
    console.log("Listening on port " + port);
    console.log("I am here");

});
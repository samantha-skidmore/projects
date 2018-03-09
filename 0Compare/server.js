const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const issuesRoutes = require('./routes/issues');
const config = require('./config');
const restful = require("node-restful");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.json());
app.use('/issues', issuesRoutes);

mongoose.connect("mongodb://localhost:27017/issues", (err) => {
    if (err) throw err;
    console.log("Connected to Database");
})

app.listen(config.port, () => {
    console.log("Listening on PORT " + config.port);

});

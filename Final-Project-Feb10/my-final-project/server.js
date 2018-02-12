// BACK END USING EXPRESS/MONGOOSE
// my-final-project/server.js 

//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan"); 
const restful = require("node-restful")
const uuid = require("uuid");
const config = require("./config");
const modelsRecipe = require("./models/modelsRecipe.js");
const routesRecipe = require("./routes/routesRecipe.js");

//Express
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Routes
app.use("/api", require("./routes/api"));
// app.use("/newRoute", require("./routes/newRoute"));


//MongoDB
mongoose.connect("mongodb://localhost/recipesDatabase", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

//Start Server
let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Listening on port " + port);
    console.log("I am here");

});

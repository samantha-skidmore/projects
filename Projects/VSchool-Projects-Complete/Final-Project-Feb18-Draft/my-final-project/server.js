// BACK END USING EXPRESS/MONGOOSE
// my-final-project/server.js 

//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan"); 
const restful = require("node-restful")
const config = require("./config");
const Recipe = require("./models/Recipe.js");
const routesRecipe = require("./routes/routesRecipe.js");

//Express
const app = express(); 

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
//I don't think Morgan is middleware but I am putting it here anyway. 

//Routes
app.use("/api", require("./routes/api.js"));
app.use("/recipes", require("./routes/routesRecipe.js"));
app.use("/models", require("./models/Recipe.js"));

//MongoDB
mongoose.connect("mongodb://localhost/recipes", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

//Start Server
let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Listening on port " + port);
    console.log("I am here");

});

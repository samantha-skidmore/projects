//Dependencies
const express = require("express");
const recipeRouter = express.Router();

//Models
const modelsRecipe = require("../models/modelsRecipe");

//Routes
modelsRecipe.methods(["get", "put", "post", "delete"]);


//Return Router
module.exports = recipeRouter; 
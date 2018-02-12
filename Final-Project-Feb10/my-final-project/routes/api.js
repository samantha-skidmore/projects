//Dependencies
const express = require("express");
const recipeRouter = express.Router();

//Models
const modelsRecipe = require("../models/modelsRecipe");

//Routes
modelsRecipe.methods(["get", "put", "post", "delete"]);
modelsRecipe.register(recipeRouter, "/recipesDatabase");


//Return Router
module.exports = recipeRouter;
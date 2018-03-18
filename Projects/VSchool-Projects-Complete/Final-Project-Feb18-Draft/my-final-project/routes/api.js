//Dependencies
const express = require("express");
const recipeRouter = express.Router();

//Models
const Recipe = require("../models/Recipe");

//Routes
Recipe.methods(["get", "put", "post", "delete"]);

//Return Router
module.exports = recipeRouter; 
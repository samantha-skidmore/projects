// BACK END USING EXPRESS/MONGOOSE 
// my-final-project/models/modelsRecipe.js

//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const restful = require("node-restful");
const mongoose = restful.mongoose;

//Schema
const RecipeSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    }, 
 
    notes: {
        type: String,
        required: false   
    },
  
    ingredients:[String],

    instructions: {
        type: String,
        required: false
    }

});

//Return Model
module.exports = restful.model("modelsRecipe", RecipeSchema);
 
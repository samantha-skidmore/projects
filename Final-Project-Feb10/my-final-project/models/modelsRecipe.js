// BACK END USING EXPRESS/MONGOOSE 
// my-final-project/models/index.js

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
  
    ingredient1: {
        type: String,
        required: false
    },

    ingredient2: {
        type: String,
        required: false
    },

    ingredient3: {
        type: String,
        required: false
    },

    ingredient4: {
        type: String,
        required: false
    },

    ingredient5: {
        type: String,
        required: false
    },

    ingredient6: {
        type: String,
        required: false
    },

    instructions: {
        type: String,
        required: false
    }

});

//Return Model
module.exports = restful.model("modelsRecipe", RecipeSchema);

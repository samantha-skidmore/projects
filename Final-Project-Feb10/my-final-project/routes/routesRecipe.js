// BACK END USING EXPRESS/MONGOOSE 
// my-final-project/routes/index.js

//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const recipeRouter = express.Router();
 
//Models
const modelsRecipe = require("../models/modelsRecipe");
const routesRecipe = require("../routes/routesRecipe");
const data = require("../recipesDatabase");

//Routes
recipeRouter.get("/recipesDatabase", function(req, res){
    res.send("API is Working");
})

// recipeRouter.route("/") 
    .get((req, res) => {
        RecipeSchema.find((err, foundRecipe) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundRecipe);
            }
        });
     
        routesRecipe.get("/routes", function (req, res) {
            res.send("routesRecipeGet");
        });

        routesRecipe.post("/routes", function (req, res) {
            res.send("routesRecipePost");
        });

        routesRecipe.put("/routes/", function (req, res) {
            res.send("routesRecipePut");
        });

        routesRecipe.delete("/routes", function (req, res) {
            res.send("routesRecipeDelete");
        })
    });

//Return Router
module.exports = recipeRouter;

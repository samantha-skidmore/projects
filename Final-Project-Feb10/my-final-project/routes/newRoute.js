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

app.get("/", (req, res) => {
    let query = {};
    modelsRecipe.find(query, (err, modelsRecipe) => {
        if (err) return res.status(500).send(err);
        return res.send(modelsRecipe);
    });
});
console.log("1st 'GET' works");

app.post((req, res) => {
    let modelsRecipe = new modelsRecipe(req.body);
    modelsRecipeModel.save((err, savedRecipe) => {
        if (err) {
            console.error(err);
        } else {
            res.send(savedRecipe);
        }
    });
}) 
console.log("'POST' works");

routesRecipe.route("/:_id")
app.get((req, res) => {
    let { id } = req.params;
    modelsRecipeModel.findOne({ _id: id }), ((err, foundRecipe) => {
        if (err) {
            console.error(err);
        } else {
            res.send(foundRecipe);
        }
    })
});
console.log("2nd 'GET' works");

app.put((req, res) => {
    let { id } = req.params;
    modelsRecipeModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedRecipe) => {
        if (err) {
            console.error(err);
        } else {
            res.send(updatedRecipe);
        }
    })
});
console.log("'PUT' works");

app.delete((req, res) => {
    let { id } = req.params;
    modelsRecipeModel.findByIdAndRemove(id, (err, removedRecipe) => {
        if (err) {
            console.error(err);
        } else {
            res.send(removedRecipe);
        }
    })
});
console.log("'DELETE works'");

module.exports = modelsRecipe;
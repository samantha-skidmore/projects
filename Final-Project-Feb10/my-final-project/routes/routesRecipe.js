// BACK END USING EXPRESS/MONGOOSE 
// my-final-project/routes/routesRecipe.js

//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const recipeRouter = express.Router();
 
//Models
const modelsRecipe = require("../models/modelsRecipe");

//Routes
recipeRouter.route("/") 

    .get((req, res) => {
        modelsRecipe.find((err, foundRecipe) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundRecipe);
            }
        });
    })

    .post((req, res) => {
        let recipe = new modelsRecipe(req.body);
        modelsRecipe.save((err, savedRecipe) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedRecipe);
            }
        });
    }) 
    

recipeRouter.route("/:id")
    .delete((req, res) => {
        let { id } = req.params;
        modelsRecipe.findByIdAndRemove(id, (err, removedRecipe) => {
            if (err) {
                console.error(err);
            } else {
                res.send(removedRecipe);
            }
        })
    })

    .put((req, res) => {
        let { id } = req.params;
        modelsRecipe.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedRecipe) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedRecipe); 
            }
        });
    }) 
    
    .get((req, res) => {
        let { id } = req.params;
        modelsRecipe.findOne({ _id: id }), ((err, foundRecipe) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundRecipe);
            }
        });
    }); 



//Return Router
module.exports = recipeRouter;



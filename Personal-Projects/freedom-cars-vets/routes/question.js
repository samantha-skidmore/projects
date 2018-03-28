// freedom-cars-vets/routes/donate.js

const express = require("express");
const questionRouter = express.Router();
const questionModel = require("../models/models.js");

questionRouter.route("/")
    .post((req, res) => {
        const newQuestion = new questionModel(req.body);
        newQuestion.save((err, foundQuestion) => {
            console.log(foundQuestion)
            if (err) {
                console.error(err);
            } else { 
                res.send(foundQuestion);
            }
        });
    })
 
    .get((req, res) => {
        questionModel.find((err, foundQuestion) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundQuestion);
            }
        });
    });

questionRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        questionModel.findById(id, (err, foundQuestion) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundQuestion);
            }
        });
    });

questionRouter.route("/:id")
    .put((req, res) => {
        questionModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateQuestion) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updateQuestion)
            }
        });

    });

questionRouter.route("/:id")
    .delete((req, res) => {
        let { id } = req.params;
        questionModel.findByIdAndRemove(id,  (err, removedQuestion) => {
            if (err) {
                console.error(err)
            } else {
                res.send(removedQuestion)
            }
        });
    })


module.exports = questionRouter; 
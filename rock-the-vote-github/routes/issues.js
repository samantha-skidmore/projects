// rock-the-vote/routes/issues.js

const express = require("express");
const issueRouter = express.Router();
const issueModel = require("../models/models.js");
// const commentModel = require("../models/comments.js");

issueRouter.route("/")
    .post((req, res) => {
        const newIssue = new issueModel(req.body);
        newIssue.save((err, foundIssue) => {
            console.log(foundIssue)
            if (err) {
                console.error(err);
            } else { 
                res.send(foundIssue);
            }
        });
    })

    .get((req, res) => {
        issueModel.find((err, foundIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundIssue);
            }
        });
    });

issueRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        issueModel.findById(id, (err, foundIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundIssue);
            }
        });
    });

issueRouter.route("/:id")
    .put((req, res) => {
        issueModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updateIssue)
            }
        });

    });

issueRouter.route("/:id")
    .delete((req, res) => {
        const { id } = req.params;
        issueModel.findByIdAndRemove(id,  (err, removedIssue) => {
            if (err) {
                console.error(err)
            } else {
                res.send(removedIssue)
            }
        });
    })

module.exports = issueRouter; 
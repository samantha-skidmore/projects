// rock-the-vote/routes/comments.js

const express = require("express");
const commentRouter = express.Router();
const commentModel = require("../models/comments.js")

commentRouter.route("/")
    .post((req, res) => {
        const newComment = new commentModel((req.body));
        newComment.save((err, savedComment) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedComment)
            }

        })

    });
commentRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        commentModel.findById(id, (err, foundComment) => {
            if (err) {
                console.error(err)
            } else {
                res.send(foundComment)
            }
        })
    })

module.exports = commentRouter
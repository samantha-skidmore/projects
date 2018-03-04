// rock-the-vote/models/comments.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({

    text: String,
    issue: {
        type: mongoose.Schema.Types.ObjectId, ref: "Issue"
    }
})

module.exports = mongoose.model("Comment", commentSchema) 
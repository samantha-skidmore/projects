// rock-the-vote/models/models.js

const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    totalVotes: {
        type: Number,
        default: 0 
    },
    comments: {
        type: [String],
        required: false
    }
})

module.exports = mongoose.model("issues", issueSchema);  
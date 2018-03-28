// freedom-cars-vets/models/models.js

const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false,
        default: 0
    },
    question: {
        type: [String],
        required: false
    }
})

module.exports = mongoose.model("question", questionSchema);  
// App/models/contact.js

const express = require("express");
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    question: {
        type: String
    }

});

module.exports = mongoose.model("Contact", contactSchema)

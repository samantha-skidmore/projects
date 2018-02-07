// routes/index.js

var express = require("express");
var contactRoutes = express.Router();
var data = require("../../database");

contactRoutes.route("/")

    .get((req, res) => {
        res.send(data);
    })

    .post((req, res) => {
        data.push(req.body);
        res.send(data);
    })

contactRoutes.route("/:_id")

    .get((req, res) => {
        for (var i = 0; i < data.length; i++) {
            if (data[i]._id == req.params._id) {
                return res.send(data[i])
            }
        }
        res.send(data);
    })

    .put((req, res) => {
        data.push(req.body);
        res.send(data);
    })

    .delete((req, res) => {
        res.send(data);
    })
    
contactRoutes.get("/contact", function (req, res) {

});

contactRoutes.post("/contact", function (req, res) {

});

contactRoutes.put("/contact", function (req, res) {

});

contactRoutes.delete("/contact", function (req, res) {

});

module.exports = contactRoutes;

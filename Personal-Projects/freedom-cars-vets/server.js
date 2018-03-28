// freedom-cars-vets/server.js

const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const restful = require("node-restful");
const morgan = require("morgan");
const config = require("./config");

const app = express();

const donateRouter = require("./routes/donate.js"); 

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use("/donate", donateRouter);

mongoose.connect("mongodb://localhost:27017/donate", (err) => {
    if (err) throw err;
    console.log("Connected to Database");
})

app.listen(8080, () => {
    console.log("Listening on PORT "); 

}); 

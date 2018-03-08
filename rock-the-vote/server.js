// rock-the-vote/server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const restful = require("node-restful");
const morgan = require("morgan");
const config = require("./config");

const issueRouter = require("./routes/issues.js");
// const commentRouter = require("./routes/comments.js");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/issues", issueRouter);
// app.use("/comments", commentRouter);

mongoose.connect("mongodb://localhost:27017/issues", (err) => {
    if (err) throw err;
    console.log("Connected to Database");
})

app.listen(config.port, () => {
    console.log("Listening on PORT " + config.port);

});

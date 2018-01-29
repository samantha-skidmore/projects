/* Single Page Application and CRUD is the goal before we get to the backend.

Warm Up 1/25/18
*/

let stringify = (url, query) => {
    url += "?";
    for (let key in query) {
        url += `${key}=${query[key]}&`;
    }
    return url

}

let url = "http://localhost:8080/monkeys";
let query = {
    color: "black", 
    species: "howler"

}

stringify(url, query); // http://localhost:8080/monkeys?color=black&species=howler



/* Bounty Hunter Part 3 Notes

You have already built in the back-end of bounty hunter:
you have index.js
you have a folder called routes
you have a bounty.js
you have a database.js
Now...
first thing to do is make a "client" folder

Any set of requests that goes to an endpoint all of those should be grouped together.  If I am doing a /get request to a bounty endpoint they all go together.

We had a set of requests that went to the coins endpoint then I would group all of those together based on their endpoint


const express = require("express");
const bodyParser = require("body-parser");
const bountyRoute = require("./routes/bounty.js");
const config = require("./config");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/bounty", bountyRoute);

app.listen(8080, () => {
    console.log("Listening on port 8080");
})

Changing the app.listen on line 51:
app.listen(config.port, () => {
    console.log("Listening on port " + config.port);
})


//making my routes (bounty.js):

const express = require("express");
const bountyRoute = express.Router();
const database = require("../database");

bountyRoute.route("/") 
    .get((req, res) => {
        res.send(database);
    })

    .post((etc.))

    });

module.exports = bountyRoute;


Make a file config.js (one folder outside of "Routes")
//this is just a great place to put our configurations data


module.exports = {
    port: process.env.PORT

}
//.env is the environment
//when we are in a development environment it will be a PORT
//when we are in a deploy environment it will be something different...

Make another file called .env  This is where we can define environment variables
we are going to define with a port variable:
PORT=8080
THAT IS IT FOR THE .env FILE
there is an NPM package for reading enviorment variables in Node. 
npm install --save dotenv
we will see the dotenv in our dependencies


NOW BACK TO CODE FROM LINE 80 before module exports:

require("dotenv").config();

module.exports = {
    port: process.env.PORT

}

Now we make a "client" folder.  This is from the client and this is where we build the react app.  This is a sibling to the routes folder so create-react-app . in the client folder

Need to install packages in the correct folder.  If the package is for the client make sure you install the package in the client folder.  Example:  npm install --save axios from the client folder

There is a package tells our server to allow our server for cross-resource-origin sharing
Do this from the main project folder which is where the server is 
npm install --save cors

CORS is no longer an issue when we deploy on our server...(watch video to listen to what he said about how CORS is no longer an issue)

Always put your middleware before your routes.  That is like sending out the truck before it gets wheels on it.



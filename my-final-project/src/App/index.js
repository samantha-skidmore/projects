// App/index.js 

const express = require("express");
const contact = require("../App/models/contact");
import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.css";

let port = 8080;

function App(props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default App;  
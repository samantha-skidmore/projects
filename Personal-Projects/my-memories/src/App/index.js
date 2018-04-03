// my-memories/src/App/index.js

import React from "react";
import { Switch, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
// import AllPages from "./AllPages";
import FamilyHistory from "./FamilyHistory";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Kids from "./Kids";
// import NavBar from "./NavBar";
import OurFamily from "./OurFamily";
import Recipes from "./Recipes";
import Skidmore from "./Skidmore";
import Stewart from "./Stewart";

import "./app.css";
import "../src.css";

function App(props) {
    return (
        <div className="wrapper">
            <Header />
            {/* <NavBar /> */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/OurFamily" component={OurFamily} />
                <Route path="/FamilyHistory" component={FamilyHistory} />
                <Route path="/Kids" component={Kids} />
                <Route path="/Recipes" component={Recipes} />
                <Route path="/Skidmore" component={Skidmore} />
                <Route path="/Stewart" component={Stewart} />
            </Switch>
            <Footer /> 
        </div>
    )
}

export default App;
import React from "react";
import { Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import FamilyHistory from "./FamilyHistory";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Kids from "./Kids";
import OurFamily from "./OurFamily";
import Recipe from "./Recipe";
import Skidmore from "./Skidmore";
import Stewart from "./Stewart";

import "./app.css";

function App(props) {
    return (
        <div className="wrapper">
            <Header />
            <Home />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/OurFamily" component={OurFamily} />
                <Route path="/FamilyHistory" component={FamilyHistory} />
                <Route path="/Kids" component={Kids} />
                <Route path="/Recipe" component={Recipe} />
                <Route path="/Skidmore" component={Skidmore} />
                <Route path="/Stewart" component={Stewart} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
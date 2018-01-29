import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";
import Pages from "./Pages";
import FamilyHistory from "./Pages/FamilyHistory";
import Kids from "./Pages/Kids";
import OurFamily from "./Pages/OurFamily";
import Pics from "./Pages/Pics";
import Recipes from "./Pages/Recipes";
import "./app.css";

function App(props) {
    return (
        <div className="containerAll">
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/FamilyHistory" component={FamilyHistory} />
                <Route path="/Kids" component={Kids} />
                <Route path="/Pics" component={Pics} />
                <Route path="/OurFamily" component={OurFamily} />
                <Route path="/Recipes" component={Recipes} />
            </Switch>
        </div>

    )
}



export default App;

// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/App/index.js 
 
import React from "react";
import { Switch, Route } from "react-router-dom";
import Links from "../pages/Links";
import Header from "../App/Header"
import Home from "../pages/Home";
import FAQs from "../pages/FAQs";
import AddRecipe from "../pages/AddRecipe";
import FindRecipe from "../pages/FindRecipe";
import Resources from "../pages/Resources";
import "../App/Styles/styles.css";

function App(props) {
    return (
        <div className="Links">
            <Header />
            <Links />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/FAQs" component={FAQs} />
                <Route path="/Resources" component={Resources} />
                <Route path="/FindRecipe" component={FindRecipe} />
                <Route path="/AddRecipe" component={AddRecipe} />
            </Switch>
        
        </div>
    )
}

export default App;
// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/App/index.js 
 
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavLinks from "../PagesNav/NavLinks";
import Home from "../PagesNav/Home";
import FAQs from "../PagesNav/FAQs";
import AddRecipe from "../PagesNav/AddRecipe";
import FindRecipe from "../PagesNav/FindRecipe";
import Resources from "../PagesNav/Resources";
import "../App/Styles/styles.css";

function App(props) {
    return (
        <div className="Nav">
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
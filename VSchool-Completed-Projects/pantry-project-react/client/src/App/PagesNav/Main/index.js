// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/App/PagesNav/Main.js 

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import FAQs from "../FAQs";
import AddRecipe from "../AddRecipe";
import RecipesList from "../../RecipesComp/RecipesList";
import RecipeSingle from "../../RecipesComp/RecipeSingle.js";
import Resources from "../Resources";
import "../../Styles/styles.css";
import "../../Styles/pagesNav.css";


function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/FAQs" component={FAQs} />
                <Route path="/Resources" component={Resources} />
                <Route path="/FindRecipe" component={RecipesList} />
                <Route path="/AddRecipe" component={AddRecipe} />
                <Route path="/recipes/:id" component={RecipeSingle} />
            </Switch>
            
        </div>
    ) 
}

export default Main;
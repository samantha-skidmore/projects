// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/pages/index.js 

import React from "react";
import Links from "../Links ";
import Home from "../Home";
import FAQs from "../FAQs";
import AddRecipe from "../AddRecipe";
import FindRecipe from "../FindRecipe";
import Resources from "../Resources";
import MyRecipes from "../MyRecipes";
import MyPantry from "../MyPantry";
import MyReceipts from "../MyReceipts";
import "../App/Styles/styles.css";

function Pages(props) {
    return (
        <div>
            <div className="Nav">
                <Links />
                <Home />
                <FAQs />
                <AddRecipe />
                <FindRecipe />
                <Resources />
            </div>
            <div className="Main">
                <MyRecipes />
                <MyPantry />
                <MyReceipts />
            </div>
        </div>
    )
}

export default Pages;
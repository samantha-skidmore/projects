// HOME JS COMPONENT IN PAGES

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Recipes from "../../Main/Recipes";
import MyPantry from "../../Main/MyPantry";
import Receipts from "../../Main/Receipts";

import "../../app.css"
import "../../Main/main.css";
import "../../Pages/pages.css";
import "../../Main/Recipes/recipes.css";
import "../..//Main/MyPantry/mypantry.css";
import "../..//Main/Receipts/receipts.css";

function Home(props) {
    return (
        <div className="Pages">
            <Recipes />
            <MyPantry />
            <Receipts />
        </div>
    )
} 

export default Home;
//MAIN JS COMPONENT IN APP

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Recipes from "../Main/Recipes";
import MyPantry from "../Main/MyPantry";
import Receipts from "../Main/Receipts";

import "../Main/main.css"; 
import "../Main/Recipes/recipes.css";
import "../Main/MyPantry/mypantry.css";
import "../Main/Receipts/receipts.css";


function Main(props) { 
    return (
        <div className="allMain">
            <Recipes />
            <MyPantry />
            <Receipts />
        </div>
    )
} 
 
export default Main;   
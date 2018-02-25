// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/PagesMain/index.js 

import React from "react";
import HomeLinks from "../PagesMain/HomeLinks";
import MyPantry from "../PagesMain/MyPantry";
import MyReceipts from "../PagesMain/MyReceipts";
import MyRecipes from "../PagesMain/MyRecipes";
import "../App/Styles/styles.css";

function PagesMain(props) {
    return (
        <div className="MainPages">
            <HomeLinks />
            <MyPantry />
            <MyReceipts />
            <MyRecipes />
        </div>
    )
}

export default PagesMain; 
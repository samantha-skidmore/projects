// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/PagesNav/index.js 

import React from "react";
import NavLinks from "../PagesNav/NavLinks";
import Home from "../PagesNav/Home";
import FAQs from "../PagesNav/FAQs";
import AddRecipe from "../PagesNav/AddRecipe";
import FindRecipe from "../PagesNav/FindRecipe";
import Resources from "../PagesNav/Resources";
import "../App/Styles/styles.css";

function PagesNav(props) {
    return (
        <div className="NavPages">
                <NavLinks />
                <Home />
                <FAQs />
                <AddRecipe />
                <FindRecipe />
                <Resources />
            </div>
    )  
}

export default PagesNav;
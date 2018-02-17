// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/pages/Links/index.js 

import React from "react";
import { Link } from "react-router-dom";
import "../../App/Styles/styles.css";

function LinkTo(props) {
    return (
        <div>
            <div className="Links">
                <Link to="/">Home</Link>
                <Link to="/FindRecipe">FindRecipe</Link>
                <Link to="/AddRecipe">Add Recipe</Link>
                <Link to="/FAQs">FAQs</Link>
                <Link to="/Resources">Resources</Link>
            </div>

            <div className="Main">
                <Link to="/MyRecipes">Recipes</Link>
                <Link to="/MyPantry">My Pantry Items</Link>
                <Link to="/MyReceipts">Receipts</Link>
            </div>
        </div>
    )
}
export default LinkTo;
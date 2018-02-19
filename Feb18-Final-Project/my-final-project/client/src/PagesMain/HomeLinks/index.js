// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/pages/HomeLinks/index.js 

import React from "react";
import { Link } from "react-router-dom";
import "../../App/Styles/styles.css";

function HomeLinks(props) {
    return (
        <div className="HomeLinks">
                <Link to="/MyRecipes">Recipes</Link>
                <Link to="/MyPantry">My Pantry Items</Link>
                <Link to="/MyReceipts">Receipts</Link>
            </div>


            )
        }
        
export default HomeLinks;
// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/pages/NavLinks/index.js 

import React from "react";
import { Link } from "react-router-dom";
import "../../App/Styles/styles.css";

function NavLinks(props) {
    return (
        <div className="NavLinks">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/FindRecipe">FindRecipe</Link></button>
                <button><Link to="/AddRecipe">Add Recipe</Link></button>
                <button><Link to="/FAQs">FAQs</Link></button>
                <button><Link to="/Resources">Resources</Link></button>
        </div>

            ) 
        }
        
export default NavLinks; 
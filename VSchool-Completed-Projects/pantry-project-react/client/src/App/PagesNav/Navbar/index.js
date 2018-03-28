// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/App/PagesNav/Navbar.js 

import React from "react";
import { Link } from "react-router-dom";
import '../../Styles/styles.css';
import "../../Styles/pagesNav.css";

function NavLinks(props) {
    return (
        <div className="NavLinks">
               <Link to="/"><span className='links'>Home</span></Link>
               <Link to="/FindRecipe"><span className='links'>Find Recipe</span></Link>
               <Link to="/AddRecipe"><span className='links'>Add Recipe</span></Link>
               <Link to="/FAQs"><span className='links'>FAQs</span></Link>
               <Link to="/Resources"><span className='links'>Resources</span></Link>
        </div>
            )
        } 
        
export default NavLinks; 

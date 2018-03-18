// FRONT END USING REACT
// STUFF FOR THE CLIENT
//src/App/Header/index.js 

import React from "react";
import "../Header/header.css"; 

function Header(props) {
    return (
        <div className="imagePantryHeader">
            <div className="header">
                <h1>My Pantry</h1>
            </div>
        </div>
    )  
}

export default Header;
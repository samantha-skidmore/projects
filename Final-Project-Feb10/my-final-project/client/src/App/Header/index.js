// FRONT END USING REACT
// STUFF FOR THE CLIENT
//src/App/Header/index.js 

import React from "react";
import "../Styles/styles.css";

function Header(props) {
    return (
        <div>
            <header id="showcase" class="grid">
                <div className="bg-image">
                    <div className="content-wrap"></div>
                    <h1>My Pantry</h1>
                </div>
            </header>
        </div>
    )
}
export default Header;
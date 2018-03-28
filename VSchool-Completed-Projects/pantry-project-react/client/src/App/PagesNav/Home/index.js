// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/App/PagesNav/Home.js 

import React from "react";
import "../../Styles/styles.css";
import "../../Styles/pagesNav.css";

function Home(props) {
    return (
        <div className="Home">
            <h4> This is the Home Page</h4>
            <ul>
                <li>
                    <div className="CardRecipe" />
                        <div className="CardTitle">My Recipes</div>
                    <div className="CardPantry" />
                        <div className="CardTitle">My Pantry Items</div>
                    <div className="CardReceipt" />
                        <div className="CardTitle">My Receipts</div>
                </li>
            </ul>
        </div>
           
    )
}
export default Home;
// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/pages/Home/index.js  

import React from "react";
import "../../App/Styles/styles.css";

function Home(props) {
    return (
        <div className="Home">
            <ul>
                <li>
                    <div className="cardRecipes">
                        <div className="img">
                            <img src="../../App/Styles/images/kitchen-cookbook.jpeg" alt=""></img>
                            </div>
                            <div id="card-content">
                                <h3 class="card-title"><a href="my-recipes" class="click">My Recipes</a></h3>
                                <h2>Information</h2>
                            </div>
                        </div>
                </li>
                    <li>
                        <div className="cardPantry">
                            <div className="img">
                                <img src="../../App/Styles/images/pantry4.jpeg" alt=""></img>
                            <div id="card-content">
                                <h3 class="card-title"><a href="my-pantry" class="click">My Pantry Items</a></h3>
                                <h2>Information</h2>
                            </div>
                            </div>
                        </div>
                </li>
                        <li>
                            <div className="cardReceipts">
                                <div className="img">
                                    <img src="../../App/Styles/images/receipts1.jpeg" alt=""></img>
                                    <div id="card-content">
                                        <h3 class="card-title"><a href="Receipts" class="click">Receipts</a></h3>
                                        <h2>Information</h2>
                                    </div>
                                </div>
                            </div>
                        </li>
            </ul>

        </div>

            )
    }
export default Home;
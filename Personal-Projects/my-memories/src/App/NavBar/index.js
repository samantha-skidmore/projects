// my-memories/src/App/Navbar/index.js 

import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
import "../../src.css";


function NavBar(props) {
    return (
        <div className="NavBar">
               <Link to="/"><button1 className="home">Home</button1></Link>
               <Link to="/FamilyHistory"><button1 className="famHist">Our Family History</button1></Link>
               <Link to="/Kids"><button1 className="kids">Kids</button1></Link>
               <Link to="/OurFamily"><button1 className="ourFam">Our Family Today</button1></Link>
               <Link to="/Recipes"><button1 className="recipes">All Family Recipes</button1></Link>
               <Link to="/Skidmore"><button1 className="skid">Skidmore Family History</button1></Link>
               <Link to="/Stewart"><button1 className="stew">Stewart Family History</button1></Link>
        </div>
            )
        } 
        
export default NavBar;  
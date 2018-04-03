// my-memories/src/App/AllPages/index.js 

import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
import "../../src.css";


function AllPages(props) {
    return (
        <div className="AllPages">
               <Link to="/"><button className="links">Home</button></Link>
               <Link to="/FamilyHistory"><button className="links">Our Family History</button></Link>
               <Link to="/Kids"><button className="links">The Kids</button></Link>
               <Link to="/OurFamily"><button className="links">Our Family Today</button></Link>
               <Link to="/Recipes"><button className="links">All Family Recipes</button></Link>
               <Link to="/Skidmore"><button className="links">Skidmore Family History</button></Link>
               <Link to="/Stewart"><button className="links">Stewart Family History</button></Link>
        </div>
            )
        } 
        
export default AllPages;  
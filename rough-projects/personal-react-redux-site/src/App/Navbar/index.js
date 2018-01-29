import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css"

function Navbar(props) {
    return (
        <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/OurFamily">Our Family</Link>
            <Link to="/Kids">Kids</Link>
            <Link to="/Pics">Pics/Videos/Blogs</Link>
            <Link to="/FamilyHistory">Family History</Link>
            <Link to="/Recipes">Recipes</Link>
        </div>
    )
}
export default Navbar;  
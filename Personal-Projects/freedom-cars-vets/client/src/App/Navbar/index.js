// freedom-cars-vets/client/src/App/Navbar/index.js

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function NavBar(props) {
    return (
        <nav className="navBarWrapper">       
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">AboutUs</Link>
        </nav>
    ) 
}

export default NavBar; 
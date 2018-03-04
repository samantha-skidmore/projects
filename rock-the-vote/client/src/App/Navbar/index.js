// src/App/Navbar/index.js

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar(props) {
    return (
        <div className="navBarWrapper">
            <Link className="link" to="/">Post Issue</Link>
            <Link className="link" to="/issuelist">Issue List</Link>

        </div>
    )
}

export default NavBar
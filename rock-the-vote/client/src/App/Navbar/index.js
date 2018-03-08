// src/App/Navbar/index.js

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function NavBar(props) {
    return (
        <nav className="navBarWrapper">
        
            <Link className="link" to="/">Home</Link>
            {" | "}
            <Link className="link" to="/PostIssue">Post Issue</Link>
            {" | "}
            <Link className="link" to="/Issues">Issues</Link>
            {" | "}
            <Link className="link" to="/IssueList">Issue List</Link>
            {" | "}
            <Link className="link" to="/Comments">Comments</Link>
            

        </nav>
    ) 
}

export default NavBar;
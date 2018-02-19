//NAVBAR INDEX COMPONENT

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Gallery">Gallery</Link>
        </div>
    )
}

export default Navbar;
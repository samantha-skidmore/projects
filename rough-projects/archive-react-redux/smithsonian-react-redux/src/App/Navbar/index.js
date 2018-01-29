import React from "react";
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/Gallery">Gallery</Link>
        </div>
    )
}

export default Navbar;
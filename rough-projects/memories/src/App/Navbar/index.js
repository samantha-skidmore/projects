import React from "react"
import {Link} from "react-router-dom";
import "./navbar.css"

function Navbar(props) {
    return (
        <div className="Nav">
            <Link to="/">Home</Link>
            <Link to="/memories">Memories</Link>
        </div>
    )
}
export default Navbar;

//NAVBAR COMPONENT

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// import Pages from "./Pages";
// import Home from "./Pages/Home";
// import AboutUs from "./Pages/AboutUs";
// import Resources from "./Pages/Resources";
// import ContactUs from "./Pages/ContactUs";
// import MyAccount from "./Pages/MyAccount";
import "./navbar.css";

function Navbar(props) {
    return (
        <div className="Links">
            <nav>
                <Link to="/">Home</Link>
                <Link to="./AboutUs">About Us</Link>
                <Link to="./Resources">Resources</Link>
                <Link to="./ContactUs">Contact Us</Link>
                <Link to="./MyAccount">My Account</Link>
            </nav>
        </div>
    )
}
export default Navbar; 

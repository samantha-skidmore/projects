// my-memories/src/App/Home/index.js

import React from "react";
import NavBar from "../NavBar";
// import { Switch, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
// import FamilyHistory from "../FamilyHistory";
// import Kids from "../Kids";
// import OurFamily from "../OurFamily";
// import Recipe from "../Recipe";
// import Skidmore from "../Skidmore";
// import Stewart from "../Stewart";

import "../app.css";
import "../../src.css";

function Home(props) { 
    return (
        <div className="home">
                Home Page
                <NavBar />
        </div>
    )
}

export default Home;

// APP JS COMPONENT

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Resources from "./Pages/Resources";
import ContactUs from "./Pages/ContactUs";
import MyAccount from "./Pages/MyAccount";

import Main from "./Main";
import Recipes from "./Main/Recipes";
import MyPantry from "./Main/MyPantry";
import Receipts from "./Main/Receipts";

import "./app.css";
import "./Header/header.css";
import "./Navbar/navbar.css";
import "./Main/main.css";
import "./Pages/pages.css";

function App(props) {
    return (
        <div className="containerAll">
            <Header />
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/AboutUs" component={AboutUs} />
                    <Route path="/Resources" component={Resources} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/MyAccount" component={MyAccount} />

                </Switch>
            </div>
            <Main />
            <div>
                <Switch>
                    <Route path="/Recipes" component={Recipes} />
                    <Route path="/MyPantry" component={MyPantry} />
                    <Route path="/Receipts" component={Receipts} />
                </Switch>
            </div>
        </div>

    )
}
export default App;
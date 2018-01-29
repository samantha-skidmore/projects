// APP JS COMPONENT

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Navbar/Pages/Home";
import AboutUs from "./Navbar/Pages/AboutUs";
import Resources from "./Navbar/Pages/Resources";
import ContactUs from "./Navbar/Pages/ContactUs";
import MyAccount from "./Navbar/Pages/MyAccount";

import Main from "./Main";
import Recipes from "./Main/Recipes";
// import MyPantry from "./Main/MyPantry";
// import Receipts from "./Main/Receipts";

import "./Main/main.css";  
import "./app.css";
 
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
                    {/* <Route path="/MyPantry" component={MyPantry} />
                    <Route path="/Receipts" component={Receipts} /> */}
                </Switch>
            </div>
         </div>

    )
}
export default App;
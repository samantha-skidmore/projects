// freedom-cars-vets/client/src/App/index.js 

import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import NavBar from "./Navbar/index.js";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Form from "../shared/Form.js";
import "./Styles/app.css";

function App() {
    return ( 
        <div className="Body">
            <Header />
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
            </Switch>
            
            <Form />
            

        </div> 
    )
}

export default App;  
// rock-the-vote/client/src/App/index.js 

import React from "react";
import { Route, Switch } from "react-router-dom";
// import AppRoutes from "../App/AppRoutes.js";
import IssueListPage from "./Pages/IssueListPage/index.js";
import HomePage from "./Pages/HomePage/index.js";
import NavBar from "./Navbar/index.js";
import "../App/Styles/app.css";
import "../App/Styles/home.css";

function App(props) {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/issues" component={IssueListPage} />
            </Switch>                 
        </div>
    )
}

export default App; 
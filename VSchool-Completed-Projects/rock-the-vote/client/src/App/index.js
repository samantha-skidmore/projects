// rock-the-vote/client/src/App/index.js 

import React from "react";
// import { Route, Switch } from "react-router-dom";
// import NavBar from "../App/Navbar/index.js";
// import IssuesDisplay from "../App/Issues/IssuesDisplay/index.js";
import Issues from "./Issues";
// import Issue from "./Issues/IssuesDisplay/Issue/index.js";
import "../App/Styles/app.css";

function App() {
    return ( 
        <div className="Body">
        {/* <NavBar />
            <Switch>
                <Route exact path="/" render={()=><h1>Home Page</h1>} />
                <Route path="/issues" component={IssuesDisplay} />
            </Switch>    */}
            <Issues />
            {/* <Issue /> */}

        </div> 
    )
}

export default App;  
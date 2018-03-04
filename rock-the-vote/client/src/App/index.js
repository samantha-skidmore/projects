// rock-the-vote/client/src/App/index.js 

import React from "react";
import {Switch, Route} from "react-router-dom";
import Form from "../shared/Form.js";
import IssueList from "./IssueList/index.js";
import Issues from "./IssueList/Issues/index.js";
import Issue from "./IssueList/Issues/Issue/index.js";
import NavBar from "./Navbar/index.js";
import "./app.css";

function App(props){
   return (
       <div className="voteDiv">
            <NavBar></NavBar>
           <Switch>
           <Route path ="../shared/Form.js" component={Form}></Route>
           <Route path = "./IssueList" component = {IssueList}></Route>
           <Route path ="../App/IssueList/index.js"></Route>
           <Route path ="../App/IssueList/Issues/index.js"></Route>
           <Route path ="../App/IssueList/Issues/Issue/index.js"></Route>
           <Route path ="../App/IssueList/Issues/Issue/Comments/index.js"></Route>
           </Switch>
          
       </div>
   ) 
}

export default App;
// rock-the-vote/client/src/App/routes.js 

import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../App/HomePage";
import IssueList from "../App/IssueList/index.js";
import Issues from "../App/IssueList/Issues/index.js";
import Issue from "../App/IssueList/Issues/Issue/index.js";
import Comments from "../App/IssueList/Issues/Issue/Comments/index.js";
import "../App/Styles/app.css";

function Routes(props) {
    return (
             <div className="routes">
                <Switch>
                    {/* <Route exact path="/" render={()=><h1>Home Page</h1>}></Route> */}
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/PostIssue" component={Issue}></Route>
                    <Route path="/Issues" component={Issues}></Route>
                    <Route path="/IssueList" component={IssueList}></Route>
                    <Route path="/Comments" component={Comments}></Route>
                </Switch>
            </div>

            )
        }
        
export default Routes;

  
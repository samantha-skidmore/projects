// rock-the-vote/client/src/App/appRoutes.js 

import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../App/Pages/HomePage/index.js";
import IssueListPage from "../App/Pages/IssueListPage/index.js";
import IssuesPage from "../App/Pages/IssuesPage/index.js";
import IssuePage from "../App/Pages/IssuePage/index.js";
import CommentsPage from "../App/Pages/CommentsPage/index.js";
import "../App/Styles/app.css";
import "../App/Styles/home.css";
import "../App/Styles/pages.css";

function AppRoutes(props) {
    return (
             <div className="routes">
                <Switch>
                    {/* <Route exact path="/" render={()=><h1>Home Page</h1>}></Route> */}
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/PostIssue" component={IssuePage}></Route>
                    <Route path="/IssueList" component={IssueListPage}></Route>
                    <Route path="/Issues" component={IssuesPage}></Route>
                    <Route path="/Comments" component={CommentsPage}></Route>
                </Switch>
            </div>

            ) 
        }
        
export default AppRoutes;
   
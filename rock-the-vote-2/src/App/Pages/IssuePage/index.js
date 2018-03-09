// rock-the-vote/client/src/App/Pages/IssuePage/index.js

import React from "react";
import NavBar from "../../Navbar/index.js";
import IssueListPage from "../IssueListPage/index.js";
import Issue from "../../IssueList/Issues/Issue/index.js";
import "../../Styles/pages.css";
import "../../Styles/issueList.css";

function IssuePage(props) {
    return (
        <div className="Pages">
            <NavBar />
            <IssueListPage />
            {/* <Issue /> */}
        </div>
    )
}

export default IssuePage; 

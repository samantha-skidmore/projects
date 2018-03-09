// rock-the-vote/client/src/App/Pages/IssuesListPage/index.js

import React from "react";
// import IssuesPage from "../IssuesPage/index.js";
import IssueList from "../../IssueList/index.js";
import "../../Styles/pages.css";
import "../../Styles/issueList.css";

function IssueListPage(props) {
    return (
        <div className="Pages">

            <h1>This is Fun</h1>
            this is fun
            {/* <IssuesPage /> */}
            <IssueList />
        </div>
    )
}

export default IssueListPage; 
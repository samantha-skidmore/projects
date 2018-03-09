// rock-the-vote/client/src/App/Pages/IssuesPage/index.js

import React from "react";
import NavBar from "../../Navbar/index.js";
import CommentsPage from "../CommentsPage/index.js";
import Issues from "../../IssueList/Issues/index.js";
import "../../Styles/pages.css";
import "../../Styles/issueList.css";

function IssuesPage(props) {
    return (
        <div className="Pages">
            <NavBar />
            <CommentsPage />
            <Issues />
        </div>
    )   
}

export default IssuesPage;
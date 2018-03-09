// rock-the-vote/client/src/App/Pages/CommentsPage/index.js

import React from "react";
import NavBar from "../../Navbar/index.js";
import IssuesListPage from "../IssueListPage/index.js";
import Comments from "../../IssueList/Issues/Issue/Comments/index.js";
import "../../Styles/pages.css";
import "../../Styles/comments.css";

function CommentsPage(props) {
    return (
        <div className="Pages">
            <NavBar />
            <IssuesListPage />
            <Comments />
        </div>
    )
}

export default CommentsPage;
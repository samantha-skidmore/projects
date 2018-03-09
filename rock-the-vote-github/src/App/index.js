// rock-the-vote/client/src/App/index.js 

import React from "react";
// import Issues from "../App/IssueList/Issues/index.js";
// import IssueList from "../App/IssueList/index.js";
// import Issue from "../App/IssueList/Issues/Issue/index.js";
// import Comments from "../App/IssueList/Issues/Issue/Comments/index.js";
import Form from "../shared/Form.js";
import NavBar from "../App/Navbar/index.js";
import Routes from "../App/routes.js";
import "../App/Styles/app.css";

function App(props) {
    return (
        <div className="voteDiv">
            <NavBar />
            <Routes />
            <Form />
            {/* <Issues /> */}
            {/* <IssueList />
            <Issue />
            <Comments />           */}
        </div>
    )
}

export default App;
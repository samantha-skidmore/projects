// src/App/IssueList/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { getIssues, addIssue } from "../../redux/issues.js";
// import Issues from "../IssueList/Issues/index.js";

import "../Styles/issueList.css";

class IssueList extends Component {
    componentDidMount() {
        console.log("this is for you");
        this.props.getIssues();
    }

    render() {
        const loading = this.props.loading;
        // let data = this.props.data;
        console.log(this.props);
        // let { data } = this.props.issues;
        return (
            !loading ?
            <div className="IssueList">
                <h3>This is the IssueList index.js</h3>
                {/* {data.sort((num1, num2) => {
                    num1 = num1.upVotes;
                    num2 = num2.upVotes;
                    if (num1 > num2) {
                        return -1;
                    } else if (num1 < num2) {
                        return 1;
                    }
                    return 0;
                })

                    .map((issues, index) => {
                        return <Issues key={index + issues.title} issues={issues} />
                    }
                    )}
                ) */}

                 </div>
             :
            <div>
                 loading...
            </div> 

        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { addIssue, getIssues })(IssueList);
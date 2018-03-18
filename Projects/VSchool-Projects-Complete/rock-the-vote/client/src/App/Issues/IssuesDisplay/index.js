// src/App/IssueList/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { getIssues, addIssue } from "../../../redux/issues.js"
import Issue from "./Issue/index.js";
import "../../Styles/issuesDisplay.css";

class IssuesDisplay extends Component {
    componentDidMount() {
        this.props.getIssues();
    }  
 
    render() {
        let { data, loading } = this.props.issues;
        return (
            !loading ?
                <div className="IssuesDisplay">
                    {data.sort((issue1, issue2) => {
                        issue1 = issue1.upvotes;
                        issue2 = issue2.upvotes;
                        if(issue1 > issue2){
                            return -1
                        } else if (issue1 < issue2) {
                            return 1;
                        } 
                        return 0;
                    })
                    .map((issue, index) => {
                        return <Issue key={index + issue.title} issue={issue} />
                    })}
                </div>
                :
                <div>
                    loading
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { getIssues, addIssue })(IssuesDisplay);
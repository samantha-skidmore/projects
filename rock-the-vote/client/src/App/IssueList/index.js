// src/App/issueList/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { addIssue, getIssues } from "../../redux/issues.js";
import Issues from "../IssueList/Issues/index.js";
import "../../App/IssueList/issue.css";

class IssueList extends Component {
    componentDidMount() {
        this.props.getIssues()
    }

    render() {
        const loading = this.props.loading;
        const data = this.props.data;
        return (
            !loading ?
                <div className="issueWrap">
                    {data.sort((num1, num2) => {
                        num1 = num1.upvotes;
                        num2 = num2.upvotes;
                        if (num1 > num2) {
                            return -1;
                        } else if (num1 < num2) {
                            return 1;
                        }
                        return 0;
                    })

                        .map((issue, index) => {
                            return (
                                <Issues key={index} {...issue} />    
                            )           
        }
                        )}
                    }
    
                    <div>
                        Loading...
                    </div>
                </div>
        
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        issue: state.issue
    }
}

export default connect(mapStateToProps, { addIssue, getIssues })(IssueList);
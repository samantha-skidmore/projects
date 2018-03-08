// src/App/issueList/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { getIssues, addIssue } from "../../redux/issues.js";
import Issues from "../IssueList/Issues/index.js";

import "../Styles/issueList.css";

class IssueList extends Component {
    componentDidMount() {
        this.props.getIssues();
    }

    render() {
        let { data, loading } = this.props.issues;
        // const loading = this.props.loading;
        // let data = this.props.data;
        return (
            !loading ?
                <div className="IssueList">
                    {this.props.data.sort((num1, num2) => {
                        num1 = num1.upvotes;
                        num2 = num2.upvotes;
                        if(num1 > num2) {
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
                    )

                </div>
                :
                <div>
                    Loading...
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
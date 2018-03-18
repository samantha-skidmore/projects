// App/IssueList/Issues/Issue/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateIssue } from "../../../../redux/issues.js";

import Comments from "./Comments/index.js";
import "../../../Styles/issuesDisplay.css";
// import thumbsDown from "../../../Styles/images/thumbs-down.png";
// import thumbsUp from "../../../Styles/images/thumbs-up.png";
// ><img src={thumbsUp} alt="upvote"
// ><img src={thumbsDown} alt="downvote"

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideComments: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    
    vote(type, issue) {
        if (type === "up") {
            issue.upvotes = String(+issue.upvotes + 1);
        } else if (type === "down") {
            issue.downvotes = String(+issue.downvotes + 1);
        }
        issue.totalVotes = String(+issue.totalVotes + 1);
        this.props.updateIssue(issue)

    }

    toggleDisplay() {
        this.setState({
            hideComments: false
        })
    }

    render() {
        let { issue } = this.props;
        return (
            <div className="issueWrap">
                <div className="info">
                    <h1>{issue.title}</h1>
                    <p className="description">{issue.description}</p>
                    <div className="votes">
                        <span className="totalVotes">Total Votes: {issue.totalVotes || 0}</span>
                        <div>
                            <a className="thumbs" onClick={() => {this.vote("up", issue)}}><span> {issue.upvotes || 0}</span></a>
                            <a className="thumbs" onClick={() => {this.vote("down", issue)}}><span> {issue.downvotes || 0}</span></a>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <h3>Comments:</h3>
                    <Comments currIssue={issue}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { updateIssue })(Issue);
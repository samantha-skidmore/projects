// src/App/IssueList/Issues/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updatedIssue } from "../../../redux/issues.js";
import Comments from "./Issue/Comments/index.js";
import "../../Styles/issueList.css";
import "../../Styles/images/thumbs-down.png";
import "../../Styles/images/thumbs-up.png";

class Issues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideComments: true
        }

        this.toggleDisplay = this.toggleDisplay.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    vote(type, issues) {
        if (type === 'upVote') {
            issues.upvotes = String(+issues.upvotes + 1);
        } else if (type === 'downVote') {
            issues.downvotes = String(+issues.downvotes + 1);
        }
        issues.totalVotes = String(+issues.totalVotes + 1);
        this.props.updateIssue(issues)

    }

    toggleDisplay() {
        this.setState({
            hideComments: false
        })
    }

    // vote(name, issues, toggleDisplay) {
    //     if (name === "upVote") {
    //         this.props.upVote = String(+this.props._id, this.props.upVotes + 1);

    //     } else if (name === "downVote") {
    //         this.props.downVote = String(+this.props._id, this.props.downVotes + 1);
    //     }
    //     issues.totalVotes = String(+issues.totalVotes + 1);
    //     this.props.updatedIssue(issues);

    //     toggleDisplay()
    //     this.setState({
    //         hideComments: false
    //     })

    // }

    render() {
        const { issues } = this.props;
        return (
            <div className="issueWrap">
                <div className="info">
                    <h3>This is the Issues index.js</h3>
                    <h1>{issues.title}</h1>
                    <p className="description">{issues.description}</p>
                    <div className="votes">
                        <h2 className="upVote">{issues.upVotes}</h2>
                        <h2 className="downVote">{issues.downVotes}</h2>
                    </div>
                    <div className="votes">
                        <h2>Total Votes: {issues.upVotes + issues.downVotes}</h2>
                    </div>
                    <div>
                        <span className="totalVotes">Total Votes: (issues.totalVotes || 0}</span>
                    </div>
                    <div>
                        <button className="thumbs" onClick={() => { this.vote("up", issues) }}><span> {issues.upVotes || 0}</span></button>
                        <button className="thumbs" onClick={() => { this.vote("down", issues) }}><span> {issues.downVotes || 0}</span></button>
                    </div>

                </div>
                <h3>Comments:</h3>
                <Comments id={issues._id}></Comments>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}
export default connect(mapStateToProps, { updatedIssue })(Issues);
// src/App/IssueList/Issues/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updatedIssue } from "../../../redux/issues.js";
import Comments from "./Issue/Comments/index.js";

//import up arrows/down arrows

class Issues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideComments: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    const(name, issue, toggleDisplay) {
        if (name === "upVote") {
            this.props.upVote = String(this.props._id, this.props.upVotes + 1);

        } else if (name === "downVote") {
            this.props.downVote = String(this.props._id, this.props.downVotes + 1);
        }

        this.props.totalVotes = String(this.props.totalVotes + 1);
        this.props.updatedIssue(issue)

    toggleDisplay()
        this.setState({
            hideComments: false
        })
    }

    render() {
        const { issue } = this.props;
        return (
            <div className="issueWrap">
                <div className="info">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.description}</h2>
                    <div className="votes">
                        <h2 className="upvote">{this.props.upVotes}</h2>
                        <h2 className="downvote">{this.props.downVotes}</h2>
                    </div>
                    <h2>Total Votes: {this.props.upVotes + this.props.downVotes}</h2>
                    <div>
                        <span className="totalVotes">Total Votes: (issue.totalVotes || 0}</span>
                    </div>
                    <div>
                        <button onClick={this.handleClick}name="upvote">Up-Vote</button>
                        <button onClick={this.handleClick}name="downvote">Down-Vote</button>
                    </div>
                </div>
                <div className="comments">
                    <Comments id={this.props._id}></Comments>
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
    export default connect(mapStateToProps, { updatedIssue })(Issues)
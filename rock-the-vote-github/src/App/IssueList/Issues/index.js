// src/App/IssueList/Issues/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updatedIssue } from "../../../redux/issues.js";
import Comments from "./Issue/Comments/index.js";
import "../../Styles/issueList.css";
import "../../Styles/images/arrowsDown.jpg";
import "../../Styles/images/arrowsUp.jpg";

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
                    <h1>{issues.title}</h1>
                    <p className="description">{issues.description}</p>
                    <div className="votes">
                        <h2 className="upvote">{issues.upVotes}</h2>
                        <h2 className="downvote">{issues.downVotes}</h2>
                    </div>
                    <h2>Total Votes: {issues.upVotes + issues.downVotes}</h2>
                    <div>
                        <span className="totalVotes">Total Votes: (issues.totalVotes || 0}</span>
                    </div>
                    <div>
                        <button className="arrow" onClick={() => { this.vote("up", issues) }}><span> {issues.upvotes || 0}</span></button>
                        <button className="arrow" onClick={() => { this.vote("down", issues) }}><span> {issues.downvotes || 0}</span></button>
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
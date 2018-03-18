// src/App/IssueList/Issues/Comments/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateIssue } from "../../../../../redux/issues.js";

import "../../../../Styles/comments.css";

class Comments extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    } 

    handleChange(e) {
        let { value } = e.target;
        this.setState({
            comment: value
        });
    }

    clearInput() {
        this.setState({
            comment: ""
        })
    }

    submitComment(e) {
        e.preventDefault();
        let { currIssue } = this.props;
        let { comment } = this.state;
        currIssue.comments.push(comment);
        this.props.updateIssue(currIssue);
        this.clearInput();
    }

    deleteComment(comment) {
        let { currIssue } = this.props;
        for(let i = 0; i < currIssue.comments.length; i++) {
            if(currIssue.comments[i] === comment) {
                currIssue.comments.splice(i, 1);
                break;
            }
        }
        this.props.updateIssue(currIssue);
    }

    render() {
        return (
            <div>
                <div className="comments">
                    {this.props.currIssue.comments.map((comment, index) => {
                        return (
                            <div className="commentsSingle"key={index}>
                                <div className="commentText">{comment}</div>
                                <button className="commentDelete" onClick={() => {this.deleteComment(comment)}}>Delete</button>
                            </div>
                        );
                    })}
                </div>
                <form className="commentForm"onSubmit={this.submitComment}>
                    <textarea className="commentBox"onChange={this.handleChange} type="text" value={this.state.comment} placeholder="Leave Comment Here" />
                    <button className="Post">POST</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { updateIssue })(Comments);
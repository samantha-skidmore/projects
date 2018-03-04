// src/App/IssueList/Issues/Comments/index.js 

import React, { Component } from "react";
// import { connect } from "react-redux";
// import axios from "axios";
import "./comments.css";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
    }
    handleChange(e) {
        let { value } = e.target;
        this.setState((prevState) => {
            return {
                comment: value
            }
        });
    }
    clearInputs() {
        this.setState({
            comment: ""
        });
    }
    commentSubmit(e) {
        e.preventDefault();
        let { issueCurrent } = this.props;
        let { comment } = this.state;
        issueCurrent.comments.push(comment);
        this.props.issueEdit(issueCurrent, issueCurrent._id);
        this.clearInput();
    }
    commentDelete(comment) {
        let { issueCurrent } = this.props;
        for (let i = 0; i < issueCurrent.comments.length; i++) {
            if (issueCurrent.comments[i] === comment) {
                issueCurrent.comments.splice(i, 1);
                break;
            }
        }
        this.props.issueEdit(issueCurrent, issueCurrent._id);
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.issueCurrent.comments.map((comment, index) => {
                        return (
                            <div className="commentSingle" key={index}>
                                <div className="commentText">{comment}</div>
                                <button className="commentDelete" onClick={() => { this.commentDelete(comment) }}>Delete</button>
                            </div>
                        );
                    })}
                </div>
                <form className="commentForm" onSubmit={this.commentSubmit}>
                    <textarea className="commentBox" onChange={this.handleChange} value={this.state.comment} name="comment" placeholder="Leave Comment Here" ></textarea>
                    <button className="Post">POST</button>
                </form>
            </div>
        )
    }
}
export default Comments;
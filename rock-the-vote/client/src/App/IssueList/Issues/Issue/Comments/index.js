// src/App/IssueList/Issues/Comments/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updatedIssue } from "../../../../../redux/issues.js";
import "../../../../Styles/comments.css";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.commentDelete = this.commentDelete.bind(this);
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({
                comment: value
            }
        );
    }
    clearInputs() {
        this.setState({
            comment: ""       
        })
    }

    commentSubmit(e) {
        e.preventDefault();
        const { issueCurrent } = this.props;
        const { comments } = this.state;
        issueCurrent.comments.push(comments);
        this.props.updatedIssue(issueCurrent, issueCurrent._id);
        this.clearInputs();
    }
    commentDelete(comments) {
        const { issueCurrent } = this.props;
        for (let i = 0; i < issueCurrent.comment.length; i++) {
            if (issueCurrent.comments[i] === comments) {
                issueCurrent.comments.splice(i, 1);
                break;
            }
        }
        this.props.updatedIssue(issueCurrent, issueCurrent._id);
    }
    render() {
        return (
            <div>
                <div className="comments">
                    {this.props.issueCurrent.comments.map((comments, index) => {
                        return (
                            <div className="commentSingle" key={index}>
                                <div className="commentText">{comments}</div>
                                <button className="commentDelete" onClick={() => { this.commentDelete(comments) }}>Delete</button>
                            </div>
                        );
                    })}
                </div>
                
                <form className="commentForm" onSubmit={this.commentSubmit}>
                    <textarea className="commentBox" onChange={this.handleChange} value={this.state.comments} name="comment" placeholder="Leave Comment Here" ></textarea>
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
export default connect(mapStateToProps, { updatedIssue })(Comments);
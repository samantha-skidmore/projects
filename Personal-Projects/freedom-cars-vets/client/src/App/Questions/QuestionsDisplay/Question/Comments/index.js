// src/App/Questions/QuestionsDisplay/Question/Comments/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuestion } from "../../../../../redux/questions.js";

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
        let { currQuestion } = this.props;
        let { comment } = this.state;
        currQuestion.comments.push(comment);
        this.props.updateQuestion(currQuestion);
        this.clearInput();
    }

    deleteComment(comment) {
        let { currQuestion } = this.props;
        for(let i = 0; i < currQuestion.comments.length; i++) {
            if(currQuestion.comments[i] === comment) {
                currQuestion.comments.splice(i, 1);
                break;
            }
        }
        this.props.updateQuestion(currQuestion);
    }

    render() {
        return (
            <div>
                <div className="comments">
                    {this.props.currQuestion.comments.map((comment, index) => {
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
        questions: state.questions
    }
}

export default connect(mapStateToProps, { updateQuestion })(Comments);
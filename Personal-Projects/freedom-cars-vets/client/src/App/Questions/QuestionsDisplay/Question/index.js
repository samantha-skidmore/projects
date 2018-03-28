// App/Questions/QuestionsDisplay/Question/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuestion } from "../../../../redux/questions.js";

import Comments from "./Comments/index.js";
import "../../../Styles/questionsDisplay.css";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    

    render() {
        let { question } = this.props;
        return (
            <div className="questionWrap">
                <div className="info">
                    <p>{question.name}</p>
                    <p>{question.email}</p>
                    <p>{question.phone}</p>
                    <p>{question.question}</p>
                </div>
            </div>
               
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, { updateQuestion })(Question);
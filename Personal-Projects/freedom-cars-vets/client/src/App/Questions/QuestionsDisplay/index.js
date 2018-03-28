// src/App/Questions/QuestionsDisplay/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions, addQuestion } from "../../../redux/questions.js"
import Question from "./Question/index.js";
import "../../Styles/questionsDisplay.css";

class QuestionsDisplay extends Component {
    componentDidMount() {
        this.props.getQuestions();
    }  
 
    render() {
        let { data, loading } = this.props.questions;
        return (
            !loading ?
                <div className="QuestionsDisplay">
                    {data.sort((question1, question2) => {
                        question1 = question1.upvotes;
                        question2 = question2.upvotes;
                        if(question1 > issue2){
                            return -1
                        } else if (question1 < question2) {
                            return 1;
                        } 
                        return 0;
                    })
                    .map((question, index) => {
                        return <Question key={index + question.title} question={question} />
                    })}
                </div>
                :
                <div>
                    loading
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, { getQuestions, addQuestion })(QuestionsDisplay);
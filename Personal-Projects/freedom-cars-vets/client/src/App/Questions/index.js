// freedom-cars-vets/src/App/Questions/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions, addQuestion } from "../../redux/questions.js";
import Form from "../../shared/Form.js";

class Questions extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
  
    formSubmit(newQuestion) {
        this.props.addQuestion(newQuestion);
    }

    render() {
        return (
            <div>
                <Form add submit={this.formSubmit} />
                <QuestionsDisplay />
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, { getQuestions, addQuestion })(Questions);
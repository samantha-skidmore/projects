// App/IssueList/Issues/Issue/index.js 

import React, { Component } from "react";
import { connect } from "react-redux";
import { getIssues, addIssue } from "../../../../redux/issues.js";
import Form from "../../../../shared/Form.js";
import "../../../Styles/shared.css";

class Issue extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this); 
    }
    formSubmit(Issue) {
        this.props.addIssue(Issue);
    }

    render() {
        return (
            <div className="Form">
                <Form add submit={this.formSubmit}></Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Issue: state.Issue
    }
}

export default connect(mapStateToProps, { getIssues, addIssue })(Issue);
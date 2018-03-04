// client/src/shared/Form.js 

import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addIssue, getIssues } from "../redux/issues";
// import { Link } from "react-router-dom";
import "./shared.css";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                title: "",
                description: ""
            },
            route: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                description: ""
            }
        })
    }

    handleSubmit(e) {
        const { add, id } = this.props;
        e.preventDefault();
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        }
        else {
            this.props.submit(this.state.inputs, id)
        } 
    }

    render() {
        const { title, description } = this.state.inputs;
        if (this.state.route) {

            return (
                <div className="formWrap">
                    <Form onSubmit={this.handleSubmit} className="form" >
                        <div className="inputs">
                            <h3>Issue?</h3>
                            <input className="inputTitle" onChange={this.handleChange} type="text" value={title} name="title" placeholder="Issue" />
                            <h3>Description</h3>
                            <textarea className="inputDescription" onChange={this.handleChange} type="text" value={description} name="description" placeholder="Description" />
                            <button className="submitButton"> Submit</button>
                        </div>

                    </Form>

                </div>

            )
        }
    }
}
export default Form;

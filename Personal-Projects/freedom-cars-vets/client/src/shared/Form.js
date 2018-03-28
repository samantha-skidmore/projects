// freedom-cars-vets/client/src/shared/Form.js 

import React, { Component } from "react";
import "../App/Styles/shared.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: "",
                email: "",
                phone: "",
                question: ""
            } 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
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
                name: "",
                email: "",
                phone: "",
                question: ""
            }
        })
    }

    handleSubmit(e) {
        let { add, id } = this.props;
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
        let { name, email, phone, question } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit} className="formWrap">
                <div className="inputs">
                    <h3>Name</h3>
                    <input className="inputName" type="text" onChange={this.handleChange} placeholder="Name" name="name" value={name} />

                    <h3>Email</h3>
                    <textarea className="inputEmail" onChange={this.handleChange} type="text" value={email} name="email" placeholder="Email" />

                    <h3>Phone Number</h3>
                    <textarea className="inputPhone" onChange={this.handleChange} type="number" value={phone} name="phone" placeholder="Phone" />

                    <h3>Question</h3>
                    <textarea className="inputQuestion" onChange={this.handleChange} type="text" value={question} name="question" placeholder="Question?" />

                    <button className="submitButton">Submit</button>
                </div>
            </form>  
        )
    }
}
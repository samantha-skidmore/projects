// client/src/shared/Form.js 

import React, { Component } from "react";
import "../App/Styles/shared.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: "",
                description: ""
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
                title: "",
                description: ""
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
        let { title, description } = this.state.inputs;
            return (
                {/* <div className="formWrap"> */}
                    <form onSubmit={this.handleSubmit} className="formWrap">
                        <div className="inputs">
                            <h3>Issue?</h3>
                            <input className="inputTitle" type="text" onChange={this.handleChange} placeholder="Issue" name="title" value={title}  />
                            <h3>Description</h3>
                            <textarea className="inputDescription" onChange={this.handleChange} type="text" value={description} name="description" placeholder="Description" />
                            <button className="submitButton"> Submit</button>
                        </div>
                    </form>

                // </div>

            )
    }
}
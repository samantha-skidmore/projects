import React, { Component } from "react"

export default class Form extends Component {
    constructor(props) {
        super(props);
        //deconstruct by the line below.  This allows me not to have to put props.title and props.medium etc. etc. etc.
        let { title, description, price, imgUrl, id } = props;
        this.state = {
            inputs: {
                title: title || "",
                medium: medium || "",
                imgUrl: imgUrl || "",
                id: id || "",

            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value, } = e.target;
        //what does this mean?
        
        //what are we going to do with these variables?  We are going to set the state
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    //keep the stuff before inputting one value at a time
                    //I want to copy and then change the one particular thing

                    [name]: value

                }
            }
        })

    }
    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                medium: "",
                imgUrl: "",
                id: "",

            }
        })
    }
    //the following is a "shorthand" way of writing an "if" statement.
    handleSumit(e) {
        e.preventDefault();
        let gallery = { ...this.state.inputs };
        this.props.submit(gallery, this.props.id);
        // this.props.clear ? this.clearInputs() : null
        if (this.props.clear) this.clearInputs();

    }
    render() {
        let { title, medium, imgUrl, id } = this.state.inputs;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="title" />
                <input onChange={this.handleChange} value={medium} name="medium" type="text" placeholder="medium" />
                <input onChange={this.handleChange} value={imgUrl} name="imgUrl" type="text" placeholder="imgUrl" />
                <input onChange={this.handleChange} value={id} name="id" type="text" placeholder="id" />
                <button>Submit</button>
                {/* Do I want a button? */}
            </form>
        )
    }


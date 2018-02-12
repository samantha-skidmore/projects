// src/Redux/Form.js
 
import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe, editRecipe } from "../Redux/recipes.js";
import "../App/app.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { title, notes, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, instructions } = props;
        this.state = {
            inputs: {
                title: title || "",
                notes: notes || "",
                ingredient1: ingredient1 || "",
                ingredient2: ingredient2 || "",
                ingredient3: ingredient3 || "",
                ingredient4: ingredient4 || "",
                ingredient5: ingredient5 || "",
                ingredient6: ingredient6 || "",
                instructions: instructions || ""
                
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { title, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [title]: value
                }
            }
        });
    }
    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                notes: "",
                ingredient1: "",
                ingredient2: "",
                ingredient3: "",
                ingredient4: "",
                ingredient5: "",
                ingredient6: "",
                instructions: ""
            }
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        var { editRecipe, addRecipe, add, edit, index } = this.props;
        if (add) {
            addRecipe(this.state.inputs);
        } else {
            editRecipe(this.state.inputs, index);
        }
        if (this.props.clear) {
            this.clearInputs();
        }
    }
    render() {
        let { title, notes, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, instructions } = this.state.inputs;
        return (
            <div className="onSubmitMain">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
                    <input onChange={this.handleChange} value={notes} name="notes" type="text" placeholder="Notes About Author, Family Story, Etc." />
                    <input onChange={this.handleChange} value={ingredient1} name="ingredient1" type="text" placeholder="Ingredient1" />
                    <input onChange={this.handleChange} value={ingredient2} name="ingredient2" type="text" placeholder="Ingredient2" />
                    <input onChange={this.handleChange} value={ingredient3} name="ingredient3" type="text" placeholder="Ingredient3" />
                    <input onChange={this.handleChange} value={ingredient4} name="ingredient4" type="text" placeholder="Ingredient4" />
                    <input onChange={this.handleChange} value={ingredient5} name="ingredient5" type="text" placeholder="Ingredient5" />
                    <input onChange={this.handleChange} value={ingredient6} name="ingredient6" type="text" placeholder="Ingredient6" />
                    <input onChange={this.handleChange} value={instructions} name="instructions" type="text" placeholder="Instructions" />
                    <button>Submit</button>
                    {/* <button>Add New Recipe</button>
                    <button>Edit Recipe</button>
                    <button>Delete Recipe</button> */}

                    
                </form>
            </div>
        )
    }
}

export default connect(null, { addRecipe, editRecipe })(Form);


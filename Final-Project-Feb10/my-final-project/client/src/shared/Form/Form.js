// FRONT END USING REACT
// FOR THE CLIENT 
// src/Redux/Form.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe, editRecipe } from "../../Redux/recipes.js";

import "../../App/Styles/styles.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { title, notes, ingredients, instructions } = this.props;
        this.state = {
            inputs: {
                title: title || "",
                notes: notes || "",
                ingredient: "",
                instructions: instructions || ""
            },
            ingredients: ingredients || []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
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
    addIngredient() {
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    ingredient: ""
                },
                ingredients: [...prevState.ingredients, prevState.inputs.ingredient]
            }
        })
    }

    deleteIngredient(index) {
        this.setState((prevState) => {
            return {
                ingredients: prevState.ingredients.filter((ingredient, i) => {
                    return i !== index;
                })
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                notes: "",
                ingredient: "",
                instructions: ""
            },
            ingredients: []
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // let { title, notes, instructions } = this.state.inputs;
        // let { ingredients } = this.state.ingredients;

        if (this.props.add) {
            this.props.addRecipe(this.state.inputs);

        } else {
            this.props.editRecipe(this.props.recipe._id, this.state.inputs);
        }
        this.props.toggle();

        // if (this.props.clear) {
        // this.clearInputs();
    }

    render() {
        let { title, notes, ingredient, instructions } = this.state.inputs;
        let { ingredients } = this.state;
        return (
            <div className="formSubmit">
                <form onSubmit={this.handleSubmit} className="mainWrap">
                    <input className="mainTitle" onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
                    <input className="notes" onChange={this.handleChange} value={notes} name="notes" type="text" placeholder="Recipe From Family Member or Story" />
                    <input className="ingredients" onChange={this.handleChange} value={ingredient} name="ingredient" type="text" placeholder="New Ingredient" />
                    <button onClick={this.addIngredient}>Add Ingredient</button>
                    <input className="instructions" onChange={this.handleChange} value={instructions} name="instructions" type="text" placeholder="Instructions" />
                    <button className="addRecipe" onClick={this.handleClick}>Add Recipe</button>
                    {ingredients.map(ingredient => <p>{ingredient}</p>)};
            </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return (
        state.inputs
    )
}
export default connect(mapStateToProps, { addRecipe, editRecipe })(Form);
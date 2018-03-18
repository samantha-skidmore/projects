// // FRONT END USING REACT
// // FOR THE CLIENT 
// // src/Redux/Form.js

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addRecipe, editRecipe } from "../Redux/recipes.js";
// import "../../src/styles.css";

// class Form extends Component {
//     constructor(props) {
//         super(props);
//         let { title, notes, ingredients, instructions } = this.props;
//         this.state = {
//             inputs: {
//                 title: title || "",
//                 notes: notes || "",
//                 ingredient: "",
//                 instructions: instructions || ""
//             },
//             ingredients: ingredients || []
//         }
    
//     }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.addIngredient = this.addIngredient.bind(this);
        
        
//     handleChange(e) {
//         let { name, value } = e.target;
//         this.setState((prevState) => {
//             return {
//                 inputs: {
//                     ...prevState.inputs,
//                     [name]: value
//                 }
//             }
//         });
//     }
//     clearInputs() {
//         this.setState({
//             inputs: {
//                 title: "",
//                 notes: "",
//                 ingredient: "",
//                 instructions: ""
//             }
//         });
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         var { addRecipe, editRecipe, id } = this.props;
//         if (addRecipe) {
//             addRecipe(this.state.inputs);
//         } else {
//             editRecipe(this.state.inputs, id);
//         }
//         if (this.props.clear) {
//             this.clearInputs();
//         }
//     }
//     addIngredient() {
//         this.setState(prevState => {
//             return {
//                 inputs: {
//                     ...prevState.inputs,
//                     ingredient: ""
//                 },
//                 ingredients: [...prevState.ingredients, prevState.inputs.ingredient]
//             }
//         })
//     }
//     render() {
//         let { title, notes, ingredient, instructions } = this.state.inputs;
//         let { ingredients } = this.state;
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
//                     <input onChange={this.handleChange} value={notes} name="notes" type="text" placeholder="Recipe From Family Member or Story" />
//                     <input onChange={this.handleChange} value={ingredient} name="ingredient" type="text" placeholder="New Ingredient" />
//                     <button onClick={this.addIngredient}>Add Ingredient</button>
//                     <input onChange={this.handleChange} value={instructions} name="instructions" type="text" placeholder="Instructions" />
//                     <button onClick={this.handleClick}>Submit</button>
//                     <button onClick={this.handleClick}>Add New Recipe</button>
//                     <button onClick={this.handleClick}>Edit Recipe</button>
//                     <button onClick={this.handleClick}>Delete Recipe</button>
//                     {ingredients.map(ingredient => <p>{ingredient}</p>)}
//                 </form>
//             </div>
//         )
//     }
// }

// export default connect(null, { addRecipe, editRecipe })(Form);


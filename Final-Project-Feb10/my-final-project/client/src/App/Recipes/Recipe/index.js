// src/App/Recipes/Recipe/index.js

import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../../Redux/recipes.js";
import { removeRecipe } from "../../../Redux/recipes.js";
import { editRecipe } from "../../../Redux/recipes.js";
import Form from "../../../shared/Form";

//Ben didn't do this but I need to make this into a class, maintain state and toggle the view.  The purpose of this lesson was Redux.
 

function Recipe(props) {
    let { index, title, notes, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, instructions, removeRecipe } = props;

    return (
        <div className="recipePage">
            <h3>{title}</h3>
            <p>{notes}</p>
            <ul>
                <p>Ingredient 1: {ingredient1}</p>
                <p>Ingredient 2: {ingredient2}</p>
                <p>Ingredient 3: {ingredient3}</p>
                <p>Ingredient 4: {ingredient4}</p>
                <p>Ingredient 5: {ingredient5}</p>
                <p>Ingredient 6: {ingredient6}</p>
                <p>Instructions: {instructions}</p>
            </ul>
            <button onClick={() => addRecipe(index)}>Add New Recipe</button>
            <button onClick={() => editRecipe(index)}>Edit</button>
            <button onClick={() => removeRecipe(index)}>Delete</button>
            
            <Form edit {...props}></Form>
        </div>
    )
}
export default connect(null, { removeRecipe }, { addRecipe }, { editRecipe })(Recipe); 

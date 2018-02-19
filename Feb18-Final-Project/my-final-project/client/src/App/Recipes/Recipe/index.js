// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/App/Recipes/Recipe/index.js 


//FIX DIVS BELOW TO WORK WITH NEW STYLES IN THE STYLES.CSS IN PUBLIC/ FOLDER
 
import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../../Redux/recipes.js";
import { removeRecipe } from "../../../Redux/recipes.js";
import { editRecipe } from "../../../Redux/recipes.js";
import Form from "../../../shared/Form";
import "../../Styles/styles.css"

//I think I need to make this into a class, maintain state and toggle the view.  Unsure how to do that
  

function Recipe(props) {
    let { id, title, notes, ingredients, instructions, removeRecipe } = props;

    return (
        <div className="RecipePage">
            <h3>{title}</h3>
            <p>{notes}</p>
            <ul>
            <p>Ingredients: {[ingredients]}</p>
            <p>Instructions: {instructions}</p>
            </ul>
            <button onClick={() => addRecipe(id)}>Add New Recipe</button>
            <button onClick={() => editRecipe(id)}>Edit</button>
            <button onClick={() => removeRecipe(id)}>Delete</button>
            
            <Form edit {...props}></Form>
        </div>
    )
}
export default connect(null, { removeRecipe }, { addRecipe }, { editRecipe })(Recipe); 

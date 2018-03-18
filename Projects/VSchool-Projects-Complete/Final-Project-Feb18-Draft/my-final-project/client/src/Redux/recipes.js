// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/Redux/recipes.js 

import axios from "axios";

const recipesUrl = "http://localhost:8080/recipes/";

const recipesReducer = (prevRecipes = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...prevRecipes, action.recipe]
       

        case "EDIT_RECIPE":
            return [...prevRecipes].map((recipe, id) => {
                if (id === action.id) {
                    return action.updatedRecipe;
                } else {
                    return recipe;
                } 
            });
            
        case "REMOVE_RECIPE":
            return [...prevRecipes].filter((recipe, id) => {
                return id !== action.id;
            })
        default:
            return prevRecipes;
    }
}

export const addRecipe = (recipe) => {
    return (dispatch) => {
        axios.post(recipesUrl, recipe)
        .then(response => {
            dispatch({type: "ADD_RECIPE"});
        })
        .catch((err) => {
            console.error(err);
            return err;
        })
    }
 }  

export const editRecipe = (updatedRecipe, id) => {
    return {
        type: "EDIT_RECIPE",
        updatedRecipe,
        id
    }
}
export const removeRecipe = (id) => {
    return {
        type: "REMOVE_RECIPE",
        id
    }
}

export default recipesReducer;

// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/Redux/recipes.js 

import axios from "axios";
// import RecipeList from "../App/RecipesComp/RecipesList";
// import RecipeSingle from "../App/RecipesComp/RecipeSingle";

const RecipesUrl = "http://localhost:8080/recipes/";

const recipesReducer = (prevRecipes = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...prevRecipes, action.recipe];

        case "EDIT_RECIPE":
            return [...prevRecipes].map((recipe, id) => {
                if (id === action.id) {
                    return action.updatedRecipe;
                } else {
                    return recipe;
                }
            });

        case "GET_RECIPES":
            return action.recipes

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
        axios.post(RecipesUrl, recipe)
            .then(response => {
                dispatch({ type: "ADD_RECIPE", recipe: response.data });
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }
}
export const editRecipe = (updatedRecipe, id) => {
    return (dispatch) => {
        axios.put(RecipesUrl + id, updatedRecipe)
            .then(response => {
                dispatch({ type: "EDIT_RECIPE", updatedRecipe, id})
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
        }
    }

export const getRecipes = () => {
    return dispatch => {
        axios.get(RecipesUrl)
        .then(response => {
            dispatch({ type: "GET_RECIPES", recipes: response.data  });
        })
        .catch((err) => {
            console.error(err);
            return err;
        })
    }
}

export const removeRecipe = (id) => {
    return {
        type: "REMOVE_RECIPE",
        id
    }
}

export default recipesReducer;
 
// src/Redux/recipes.js 
// this is where all of the stuff will happen including the state of the array 
 
const recipesReducer = (prevRecipes = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...prevRecipes, action.recipe]
      

        case "EDIT_RECIPE":
            return [...prevRecipes].map((recipe, i) => {
                if (i === action.index) {
                    return action.updatedRecipe;
                } else {
                    return recipe;
                } 
            });
            
        case "REMOVE_RECIPE":
            return [...prevRecipes].filter((recipe, i) => {
                return i !== action.index;
            })
        default:
            return prevRecipes;
    }
}

export const addRecipe = (recipe) => {
    return {
        type: "ADD_RECIPE",
        recipe
    }
}

export const editRecipe = (updatedRecipe, index) => {
    return {
        type: "EDIT_RECIPE",
        updatedRecipe,
        index
    }
}
export const removeRecipe = (index) => {
    return {
        type: "REMOVE_RECIPE",
        index
    }
}

export default recipesReducer;

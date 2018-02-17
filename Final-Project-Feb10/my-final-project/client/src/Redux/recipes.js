// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/Redux/recipes.js 

// this is where all of the stuff will happen including the state of the array 
 
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
    return {
        type: "ADD_RECIPE",
        recipe
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

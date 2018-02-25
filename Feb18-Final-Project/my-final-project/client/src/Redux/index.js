// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/Redux/index.js 

import {createStore, combineReducers} from "redux";
import recipes from "./recipes";

const rootReducer = (combineReducers({recipes}));

//now we need to create the store
let store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

export default store; 
      
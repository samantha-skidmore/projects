// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/Redux/index.js 

import {createStore, combineReducers, applyMiddleware} from "redux";
import recipes from "./recipes";
import thunk from "redux-thunk";
const rootReducer = (combineReducers({recipes}));

//now we need to create the store
let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;  
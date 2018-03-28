// freedom-cars-vets/client/src/redux/index.js

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import questions from "./questions.js"; 

const rootReducer = (combineReducers({questions}));

const store = createStore(
    rootReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
}) 
export default createStore(combineReducers({ questions }), applyMiddleware(thunk));  
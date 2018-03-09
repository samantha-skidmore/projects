// rock-the-vote/client/src/redux/index.js

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import Issues from "./issues.js"; 

const rootReducer = (combineReducers({Issues}));

const store = createStore(
    rootReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
}) 
export default createStore(combineReducers({ Issues }), applyMiddleware(thunk));  
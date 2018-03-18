// rock-the-vote/client/src/redux/index.js

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import issues from "./issues.js"; 

const rootReducer = (combineReducers({issues}));

const store = createStore(
    rootReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
}) 
export default createStore(combineReducers({ issues }), applyMiddleware(thunk));  
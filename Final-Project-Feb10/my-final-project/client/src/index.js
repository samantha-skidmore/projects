// FRONT END USING REACT
//STUFF FOR THE CLIENT
// client/src/index.js   

import React from "react";
import ReactDOM from "react-dom";

//Redux Stuff
import {Provider} from "react-redux";
import store from "./Redux";

import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
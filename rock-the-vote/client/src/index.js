// rock-the-vote/client/src/index.js

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/index.js"
import App from "./App";
import "../src/App/app.css";

ReactDOM.render(
    <BrowserRouter>
        <Provider store = { store }>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById("root"));



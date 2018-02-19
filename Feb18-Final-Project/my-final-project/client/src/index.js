// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/index.js   

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux";
import App from "../../client/src/App";
import "./App/Styles/styles.css";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById("root"));


// ReactDOM.render(<App />,document.getElementById("root")); 
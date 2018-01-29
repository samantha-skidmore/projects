import React from "react";
import "./beginning.js";
import "./kids.js";
import "./ourFam.js";
import "./skidmoreHistory.js";
import "./stewartHistory.js";

function Main(props) {
    return (
        <div className="containerMain">
            <div id="beginning"></div>
            <div id="kids"></div>
            <div id="ourFam"></div>
            <div id="skidmoreHistory"></div>
            <div id="stewartHistory"></div>
        </div>
    )
}

export default Main;

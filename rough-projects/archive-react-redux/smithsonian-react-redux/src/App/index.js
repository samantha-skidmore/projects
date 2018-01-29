import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import GalleryItem from "./GalleryItem";
import Navbar from "./Navbar";
import Home from "./Home";
// import "./app.css";

function App(props) {
    return (
        <div className="containerAll">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Gallery" component={Gallery} />
            </Switch>
        </div> 
    )
}

export default App;
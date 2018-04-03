//APP INDEX

import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import GalleryItem from "./Gallery/GalleryItem";

import "./app.css";

function App(props) {
    return (
        <div className="containerAll">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Gallery" component={Gallery} />
            </Switch>
            <Gallery />
        </div>
    )
}

export default App;  
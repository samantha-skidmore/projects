import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Memories from "./Pages/Memories";
import "./app.css";

function App(props) {
    return (
        <div className="containerAll">
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/memories" component={Memories} />
            </Switch>
        </div>
    )
}

export default App;
//APP INDEX

import React from "react";
import Header from "./Header";
import Sidebars from "./Sidebars"
import Footer from "./Footer";
import Main from "./Main";
import "./app.css";

    function App(props) {
        return (
            <div className="containerAll">
                <Header />
                <Sidebars />
                <Main />
                <Footer />
            
            </div>
        );
    }

export default App;


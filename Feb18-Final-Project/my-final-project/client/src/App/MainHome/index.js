// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/App/MainHome/index.js 

import React from "react";
import Header from "../Header";
import PagesNav from "../../PagesNav";
import PagesMain from "../../PagesMain";
import Footer from "../Footer";
import "../Header/header.css";
import "../Styles/styles.css";

function MainHome(props) {
    return (
        <div className="MainHomeContainer">
            <Header />
            <PagesNav />
            <PagesMain />
            <Footer />
        </div>
    )
}  

export default MainHome;
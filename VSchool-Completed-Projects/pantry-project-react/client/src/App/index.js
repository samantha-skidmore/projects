// FRONT END USING REACT
// STUFF FOR THE CLIENT
// client/src/App/index.js 
 
import React from "react";
import Main from "./PagesNav/Main";
import Navbar from "./PagesNav/Navbar";
import Header from "./Header";
// import FindRecipe from "./PagesNav/FindRecipe";
// import RecipeSingle from "./RecipesComp/RecipeSingle";
// import RecipesList from "./RecipesComp/RecipesList";

import "./Styles/styles.css";
import "./Styles/pagesNav.css";

function App(props) {
    return (
        <div>
            <Header />
            <Navbar />
            <Main />
        </div>

    )       
}
 
export default App;
  
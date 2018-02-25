// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/App/Recipes/index.js 

import React from "react"; 
import { connect } from "react-redux";
import "../Styles/styles.css"

function Recipes(props) {
    let { recipes } = props;
    let recipeComponents = recipes.map((recipes, id) => {
        return <Recipes key={id + recipes.name} {...recipes} _id={id}></Recipes>
    })
    return ( 
        <div>
            {recipeComponents} 
                
        </div>
    )
}  

const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, {})(Recipes);
 
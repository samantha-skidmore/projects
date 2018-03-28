// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/RecipesComp/RecipesList.js  

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../shared/Loading";
// import Form from "../../shared/Form";
import { getRecipes } from "../../Redux/recipes";
// import axios from "axios";

import "../Styles/styles.css";
import "../Styles/recipesComp.css";

class RecipesList extends Component {

    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        let { recipes, loading } = this.props;
        console.log(this.props);
        return (
            loading ?
                <Loading></Loading>
                :
                <div>
                    <div className="listTitle">
                        {recipes.map((recipes) => {
                            let { title, _id } = recipes;
                            return <Link to={`/recipes/${_id}`} key={_id}>{title}</Link>
                        })}
                    </div>

                </div>
        )
    }
}

export default connect(state => state, { getRecipes })(RecipesList);
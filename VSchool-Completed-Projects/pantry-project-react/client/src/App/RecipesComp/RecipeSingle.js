// FRONT END USING REACT
// STUFF FOR THE CLIENT
// src/Recipes/RecipeSingle.js 

import React, { Component } from "react";
import axios from "axios";
import Loading from "../../shared/Loading";
import Form from "../../shared/Form";
import "../Styles/recipesComp.css";
import "../Styles/styles.css";


let RecipesUrl = "http://localhost:8080/recipes/";

export default class recipeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {},
            loading: true,
            displayForm: false
        }
        this.removeItem = this.removeItem.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        this.getRecipe = this.getRecipe.bind(this);
    }
    
    componentDidMount() {
        let { id } = this.props.match.params;
        this.getRecipe(id);
    }

    // componentWillReceiveProps(nextProps) {
    //     let nextId = nextProps.match.params.id
    //     let { id } = this.props.match.params;
    //     if (nextId !== id) {
    //         this.getRecipe(nextId);
    //     }
    // }

    getRecipe(id) {
        axios.get(RecipesUrl + id)
            .then((response) => {
                let { data } = response;
                this.setState({
                    recipe: data,
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    recipe: {},
                    loading: false
                });
            });
    }

    removeItem() {
        let { id } = this.props.match.params;
        let { history } = this.props;
        axios.delete(RecipesUrl + id)
            .then((response) => {
                alert(`Item ${id} was successfully removed!`);
                history.push("/");
                //future: set something to ask if they are sure they want to delete and confirm it.
            })
            .catch((err) => {
                console.error(err);
                history.push("/");
            })
    }

    toggleDisplay() {
        this.setState((prevState) => {
            return {
                displayForm: !prevState.displayForm
            }
        })
    }

    editRecipe(recipe) {
        let { id } = this.props.match.params;
        axios.put(RecipesUrl + id, recipe)
            .then((response) => {
                let { data } = response;
                this.setState({
                    recipe: data,
                    displayForm: false
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        let { recipe, loading, displayForm } = this.state;
        // let { title, notes, ingredients, instructions } = recipe;
        let formStyle = { display: displayForm ? "inherit" : "none" }
        return (
            loading ?
                <Loading></Loading>
                :
                <div className="style">
                    <h3>{recipe.title}</h3>
                    <h2>{recipe.notes}</h2>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                    <button onClick={this.removeItem}>Delete Recipe</button>
                    <button onClick={this.toggleDisplay}>Edit</button>
                    <div className="formStyle">
                        <Form{...recipe} submit={this.editRecipe}></Form>
                        <formStyle />
                    </div>
                </div>
        )
    }
}

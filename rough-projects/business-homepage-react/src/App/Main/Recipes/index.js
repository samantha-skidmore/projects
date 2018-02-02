//RECIPES JS COMPONENT IN MAIN

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Loading from "../../shared/Loading";
import RecipeItem from "../Recipes/RecipeItem";

import "./recipes.css";
import "../../Main/main.css";
import "../../../App/app.css";

let RecipeUrl = `https://api.edamam.com/search?q=chicken&app_id=$edd7afa0&app_key=$aa055878b1e094fa18d9e9675fdf10d9&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`;




// export default class RecipeItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             recipe: [],
//             loading: true
//         } 
//     }
//     componentDidMount() {
//         axios.get(RecipeUrl)
//             .then((response) => {
//                 let { data } = response;
//                 this.setState({
//                     recipe: data.objects,
//                     loading: false
//                 })
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     }

//     render() {
//         let { recipe, loading } = this.state;
//         return (
//             loading ?
//                 <Loading></Loading>
//                 :
//                 <div>
//                     <div className="links">
//                         {recipe.map((recipe) => {
//                             let { title, id } = recipe;
//                             return <Link to={`/recipe/${id}`} key={id}>{title}</Link>
//                         })}
//                     </div>
//                     <Switch>
//                         <Route path="/recipe/:id" component={RecipeItem}></Route>
//                     </Switch>

//                 </div>

//         )
//     }

// }


// function Recipes(props) {
//     return (
//         <div className="Main">
//             <div className="RecipeBox"> 
//             </div>
//             <div className="RecipeTitle">My Recipes
//             </div>
//         </div>

//     )
// }

// `https://api.edamam.com/search?q=chicken&app_id=$edd7afa0&app_key=$aa055878b1e094fa18d9e9675fdf10d9&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`
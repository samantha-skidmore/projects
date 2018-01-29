//RECIPEITEM INDEX COMPONENT IN /Main/Recipes/

import React, { Component } from "react"
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import "../../../../App/app.css";

import Loading from "../../shared/Loading";

export default class RecipeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            loading: true
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        const itemUrl = `https://api.edamam.com/search?q=chicken&app_id=$edd7afa0&app_key=$aa055878b1e094fa18d9e9675fdf10d9&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`;
        axios.get(itemUrl)
            .then((response) => {
                let { data } = response;
                console.log(data);
                this.setState({
                    img: data.images[0].z.url,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    } 
    componentWillReceiveProps(nextProps) {
        let nextId = nextProps.match.params;
        let { id } = this.props.match.params;
        if (nextId !== id){
            const itemUrl = `https://api.edamam.com/search?q=chicken&app_id=$edd7afa0&app_key=$aa055878b1e094fa18d9e9675fdf10d9&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`;

            axios.get(itemUrl + nextId)
            .then((response) => {
                this.setState({
                    img: response.data.images[0].z.url
                })
                console.log(response.data.images[0].z.url)

            })
            
            .catch((err) => {
                console.error(err);
                this.setState({
                    img: {}
                });
            });
        }
    }
        // id !== nextId ?  : nextProps.match.params;
        // id !== nextId ? return nextId 
    
    render() {
        let { img, loading } = this.state;
        let frameStyle = { backgroundImage: `url(${img})` };
        return (
            loading ?
                <Loading></Loading>
                :
                <div style={frameStyle} className="frame">
                    

                </div>
        )
    }
}

//GALLERY INDEX COMPONENT

import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import Loading from "../shared/Loading";
import GalleryItem from "./GalleryItem";
 
let galleryUrl = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getOnDisplay&access_token=c1323bc09366e44c10523f5a48cd89d7";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: [],
            loading: true
        } 
    }
    componentDidMount() {
        axios.get(galleryUrl)
            .then((response) => {
                let { data } = response;
                this.setState({
                    gallery: data.objects,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        let { gallery, loading } = this.state;
        return (
            loading ?
                <Loading></Loading>
                :
                <div>
                    <div className="links">
                        {gallery.map((gallery) => {
                            let { title, id } = gallery;
                            return <Link to={`/gallery/${id}`} key={id}>{title}</Link>
                        })}
                    </div>
                    <Switch>
                        <Route path="/gallery/:id" component={GalleryItem}></Route>
                    </Switch>

                </div>

        )
    }

}


import React, { Component } from "react";
import Loading from "../shared/Loading";
import GalleryItem from "./GalleryItem";

import { Link, Switch, Route } from "react-router-dom";

// import "./index.css";

import axios from "axios";

let galleryUrl="my smithsonian url"

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
                    gallery: data,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
addGallery(){
    axios.post(galleryUrl, gallery)
        .then((response) => {
            let { data } = response;
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });

}



render() {
    let {gallery, loading} = this.state;
        return (
            loading ?
            <Loading></Loading>
            :
            <div>
                 {/* Form goes here */}
                <Form submit={this.addGallery} clear></Form>
                <div className="whateverIWant">
                    {gallery.map((gallery) => {
                        let {title, _id} = gallery;
                        return <Link to={`/gallery/${_id}`} key={_id}>{title}</Link>
                    })}
                </div>
                <Switch>
                    <Route path="/gallery/:id" component={GalleryItem}></Route>
                </Switch>

            </div>

        )
    }

}


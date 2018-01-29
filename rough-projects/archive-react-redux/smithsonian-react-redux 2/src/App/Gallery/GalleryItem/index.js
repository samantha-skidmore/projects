import React, { Component } from "react"

import Loading from "../../shared/Loading";

import axios from "axios";

let galleryItemUrl = "my smithsonian url/id# from props";

export default class GalleryItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            gallery: {}
            loading: true
        }
    }
    componentDidMount() {
        axios.get(galleryItemUrl)
    }
    render() {
        let { gallery, loading } = this.state;
        console.log(this.props);
        return (
            loading ?
                <Loading></Loading>
                :
            <div>
                {/* gallery info*/}
        
            </div>
        )
    }
}

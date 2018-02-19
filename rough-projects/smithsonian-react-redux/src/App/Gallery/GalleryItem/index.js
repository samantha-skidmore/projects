//GALLERY ITEM INDEX COMPONENT

import React, { Component } from "react"
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import "../../../App/app.css";

import Loading from "../../shared/Loading";

export default class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            loading: true
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        const itemUrl = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token=c1323bc09366e44c10523f5a48cd89d7&object_id=${id}&format=json`;
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
            const itemUrl = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token=c1323bc09366e44c10523f5a48cd89d7&object_id=${id}&format=json`;

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

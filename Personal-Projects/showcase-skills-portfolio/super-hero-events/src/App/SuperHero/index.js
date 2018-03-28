//SUPERHERO INDEX

import React from 'react';
import "./SuperHero.css";

function SuperHero(props) {
    return (
            <div onClick={props.showPhrase} className="superhero-wrapper">
                <h1>{props.name}</h1>
                <img src={props.imgUrl} alt=""/>
            </div>
    )
}

export default SuperHero;



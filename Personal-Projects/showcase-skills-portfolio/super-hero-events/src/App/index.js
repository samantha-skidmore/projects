//APP INDEX

import React, { Component } from "react";
import superheroList from "./superheroList.json";
import SuperHero from "./SuperHero";

class App extends Component {
    constructor() {
        super();

        this.showPhrase = this.showPhrase.bind(this);
    }

    showPhrase(id) {
        alert(superheroList[id].CatchPhrase)
    }

    render() {
        const heroes = superheroList.map((item) => {
            return <SuperHero name={item.name} imgUrl={item.imgUrl} showPhrase={() => this.showPhrase(item.id)} />
        });

        return (
            <div>
                {heroes}
            </div>
        )
    }

}

export default App;

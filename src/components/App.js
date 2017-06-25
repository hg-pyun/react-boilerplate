import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : 'Hello React Boilerplate !'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
}

export default App
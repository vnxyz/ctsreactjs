// var fs = require('fs')
import React, { Component } from 'react';
import Dropdown from './Dropdown'

class App extends Component {
    // state = {  }
    render() {
        return (
            <div className="container"> 
                <Dropdown/>
            </div>
        );
    }
}

export default App;


ReactDOM.render(<App/>, document.getElementById('mount-point'))
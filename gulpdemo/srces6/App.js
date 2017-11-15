// var fs = require('fs')
import React, { Component } from 'react';
import ThumbnailList from './ThumbnailList'
class App extends Component {
    // state = {  }
    render() {
        return (
            <div className="container"> 
                <ThumbnailList/>
            </div>
        );
    }
}

export default App;

// var ThumbnailList = require('./ThumbnailList')
// var App = React.createClass({
//     render: function(){
//         return (
//             <div className="container"> 
//                 <ThumbnailList/>
//             </div>
//         )
        
//     }
// })

ReactDOM.render(<App/>, document.getElementById('mount-point'))
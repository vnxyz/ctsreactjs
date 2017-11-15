//ES6
import React, { Component } from 'react';
class Badge extends Component {
   
    // state = {count:1}

    constructor(){
        super()
        this.state = {count: 0}
    }
    increaseCount(){
        console.log('button clicked...')
        var newCount = this.state.count + 1;
        this.setState({count:newCount});
        // this.setState({count:223});
        console.log(this.state);
    }
   
    render() {
        return (
            <button onClick={this.increaseCount.bind(this)} className="btn btn-primary" type="button">
                {this.props.caption} <span className="badge">{this.state.count}</span>
            </button>
        );
    }
}

export default Badge;

// //ES5
// var Badge = React.createClass({
//     render: function(){
//         return (
//             <button className="btn btn-primary" type="button">
//                  {this.props.caption} <span className="badge">{this.props.count}</span>
//             </button>
//         )
//     }
// })

// module.exports = Badge;


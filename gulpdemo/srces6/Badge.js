//ES6
import React, { Component } from 'react';
class Badge extends Component {
   
    render() {
        return (
            <button className="btn btn-primary" type="button">
            {this.props.caption} <span className="badge">{this.props.count}</span>
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


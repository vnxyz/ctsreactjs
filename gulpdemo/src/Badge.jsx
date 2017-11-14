var Badge = React.createClass({
    render: function(){
        return (
            <button className="btn btn-primary" type="button">
                 {this.props.caption} <span className="badge">{this.props.count}</span>
            </button>
        )
    }
})

var obj = React.createElement(Badge, {caption: 'Sent', count: 23})
var obj2 = React.createElement(Badge, {caption: 'Inbox', count: 44})

ReactDOM.render(obj, document.getElementById('mount-point'))
ReactDOM.render(obj2, document.getElementById('mount-point2'))
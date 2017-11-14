var Badge = React.createClass({
    displayName: "Badge",

    render: function () {
        return React.createElement(
            "button",
            { className: "btn btn-primary", type: "button" },
            this.props.caption,
            " ",
            React.createElement(
                "span",
                { className: "badge" },
                this.props.count
            )
        );
    }
});

var obj = React.createElement(Badge, { caption: 'Sent', count: 23 });
var obj2 = React.createElement(Badge, { caption: 'Inbox', count: 44 });

ReactDOM.render(obj, document.getElementById('mount-point'));
ReactDOM.render(obj2, document.getElementById('mount-point2'));

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

// ReactDOM.render(obj, document.getElementById('mount-point'))
// ReactDOM.render(obj2, document.getElementById('mount-point2'))
var Thumbnail = React.createClass({
  displayName: "Thumbnail",

  render: function () {
    return React.createElement(
      "div",
      { className: "col-sm-6 col-md-4" },
      React.createElement(
        "div",
        { className: "thumbnail" },
        React.createElement("img", { src: "http://via.placeholder.com/242x200", alt: "Some text" }),
        React.createElement(
          "div",
          { className: "caption" },
          React.createElement(
            "h3",
            null,
            this.props.title
          ),
          React.createElement(
            "p",
            null,
            "Some summary"
          ),
          React.createElement(
            "p",
            null,
            " ",
            React.createElement(Badge, { caption: "Votes", count: "0" })
          )
        )
      )
    );
  }
});

// var obj = React.createElement(Thumbnail, {});

// ReactDOM.render(obj, document.getElementById('mount-point'))
var ThumbnailList = React.createClass({
    displayName: 'ThumbnailList',


    render: function () {
        var thumbnails = ['ReactJS', 'AngularJS', 'EmberJS'];
        var list = thumbnails.map(function (thumbnail, i) {
            return React.createElement(Thumbnail, { title: thumbnail, key: i });
        });
        console.log(list);
        return React.createElement(
            'div',
            { className: 'row' },
            list
        );
    }
});

var App = React.createClass({
  displayName: "App",

  render: function () {
      return React.createElement(
          "div",
          { className: "container" },
          React.createElement(ThumbnailList, null)
      );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('mount-point'));

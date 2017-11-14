"use strict";

var Thumbnail = React.createClass({
  displayName: "Thumbnail",

  render: function render() {
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
            "Thumbnail label"
          ),
          React.createElement(
            "p",
            null,
            "Some summary"
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: "#", className: "btn btn-primary", role: "button" },
              "Button"
            ),
            " ",
            React.createElement(
              "a",
              { href: "#", className: "btn btn-default", role: "button" },
              "Button"
            )
          )
        )
      )
    );
  }
});

var obj = React.createElement(Thumbnail, {});

ReactDOM.render(obj, document.getElementById('mount-point'));
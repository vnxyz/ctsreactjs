var Badge = require('./Badge')
var Thumbnail = React.createClass({
    render: function(){
        return (
        
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="http://via.placeholder.com/242x200" alt="Some text"/>
                <div className="caption">
                  <h3>{this.props.title}</h3>
                  <p>Some summary</p>
                  <p> <Badge caption="Votes" count="0"/></p>
                </div>
              </div>
            </div>
        )
    }
})

module.exports = Thumbnail

// var obj = React.createElement(Thumbnail, {});

// ReactDOM.render(obj, document.getElementById('mount-point'))
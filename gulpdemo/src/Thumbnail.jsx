var Thumbnail = React.createClass({
    render: function(){
        return (
        
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="http://via.placeholder.com/242x200" alt="Some text"/>
                <div className="caption">
                  <h3>Thumbnail label</h3>
                  <p>Some summary</p>
                  <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                </div>
              </div>
            </div>
        )
    }
})

var obj = React.createElement(Thumbnail, {});

ReactDOM.render(obj, document.getElementById('mount-point'))
// var fs = require('fs')
var ThumbnailList = require('./ThumbnailList')
var App = React.createClass({
    render: function(){
        return (
            <div className="container"> 
                <ThumbnailList/>
            </div>
        )
        
    }
})

ReactDOM.render(<App/>, document.getElementById('mount-point'))
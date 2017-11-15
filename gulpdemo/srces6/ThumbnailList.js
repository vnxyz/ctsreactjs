import React, { Component } from 'react';
import Thumbnail from './Thumbnail'
class ThumbnailList extends Component {
   
    render() {
        var thumbnails = ['PReactJS', 'AngularJS', 'EmberJS','CanJS', 'JS', 'NodeJS', 'Jquery']
        var list = thumbnails.map(function(thumbnail, i){
            return <Thumbnail title={thumbnail} key={i}/>
        })
        console.log(list);
        return (
           
            
                <div className="row">{list}</div>
        
        );
    }
}

export default ThumbnailList;





// var Thumbnail = require('./Thumbnail')
// var ThumbnailList = React.createClass({
   
//     render: function(){
//         var thumbnails = ['ReactJS', 'AngularJS', 'EmberJS','CanJS', 'JS', 'NodeJS', 'Jquery']
//         var list = thumbnails.map(function(thumbnail, i){
//             return <Thumbnail title={thumbnail} key={i}/>
//         })
//         console.log(list);
//         return (
//             <div className="row">{list}</div>
//         )
        
//     }
// })

// module.exports = ThumbnailList;

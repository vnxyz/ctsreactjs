// 1. Create a class

var Time = React.createClass({

    render: function(){

        var today = new Date();
        return (
            <div>
                <h2>Current time</h2>
                <p>{today.getHours()} : {today.getMinutes()}  : {today.getSeconds()}</p>
            </div>
        )
    }
})


// 2. Create an object from class

var timeObj = React.createElement(Time, {});


// 3. Mount the object to DOM

setInterval(function(){
    ReactDOM.render(timeObj, document.getElementById('time'));
},1000)

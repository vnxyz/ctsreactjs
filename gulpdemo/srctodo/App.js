// var fs = require('fs')
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()
class App extends Component {
    render() {
        return (
            <div className="container">
                <Router history={customHistory}>
                    <div>
                        <Link to="/">Home</Link> |  <Link to="/profile">Profile</Link>
                      

                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;


ReactDOM.render(<App />, document.getElementById('mount-point'))
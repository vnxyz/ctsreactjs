import React, { Component } from 'react';
// import createBrowserHistory from 'history/createBrowserHistory'
// const history = createBrowserHistory()
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {email: '', pwd: ''}
    }

    authenticate(){
        console.log(this.state);
        fetch('http://localhost:3000/auth', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ email: this.state.email, pwd:this.state.pwd })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // this.setState();
                if(!data.auth){
                    this.setState({errorMessage: 'Invalid User/Pwd!!'});
                }
                else{   
                    //Navigate to the page
                    this.props.history.push('/profile')
                }
            })
    }
    handleEmailChange(event){
        this.setState({email: event.target.value});
        // console.log(this.state)
    }
    handlePwdChange(event){
        this.setState({pwd: event.target.value});
        // console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <hr/>
                <h2 class="form-signin-heading">Please sign in</h2>
                <h3>{this.state.errorMessage}</h3>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input onChange={this.handleEmailChange.bind(this)} value={this.state.email} type="email" id="inputEmail" class="form-control" placeholder="Email address" required autoFocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" onChange={this.handlePwdChange.bind(this)} value={this.state.pwd} id="inputPassword" class="form-control" placeholder="Password" required />

                <button class="btn btn-lg btn-primary btn-block" onClick={this.authenticate.bind(this)}>Sign in</button>

            </div>
        );
    }
}

export default Home;
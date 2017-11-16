// var fs = require('fs')
import React, { Component } from 'react';


class App extends Component {
    // state = {  }
    constructor(){
        super();
        this.state = {todo: '', todos:[]}
    }

    componentWillMount() {
        fetch('http://localhost:3000/todo')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ todos: data });
            })
    }

    handleChange(event){
        console.log('Values changing', event.target.value);
        this.setState({todo: event.target.value});
    }

    addTodo() {
        console.log({ text: this.state.todo })
        fetch('http://localhost:3000/todo', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ text: this.state.todo })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ todos: data, todo:'' });
            })
    }
    removeTodo(index) {
        console.log('index', index)
        var url = 'http://localhost:3000/todo/' + index
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE"
            // body: JSON.stringify({ text: this.state.todo })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ todos: data });
            })
    }
    render() {
        var list = this.state.todos.map((todo, i) =>{
            return <li key={i}>
                <span>{todo.text}</span>
                <span onClick={this.removeTodo.bind(this, i)} class="glyphicon glyphicon-remove"></span>
                </li>
        })
        return (
            <div className="container">
                <h2>Todo App</h2>
                <input type="text" placeholder="Add a todo .." onChange={this.handleChange.bind(this)} value={this.state.todo}/> <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                <hr/>
                <ul>
                    {list}
                </ul>

            </div>
        );
    }
}

export default App;


ReactDOM.render(<App />, document.getElementById('mount-point'))
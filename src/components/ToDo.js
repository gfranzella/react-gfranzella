import React, { Component } from 'react'
import './ToDo.css'

const TodoItem = ({text}) => {
    return (<li>{text}</li>);
}

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            newTodo: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const todos = [...this.state.todos, this.state.newTodo];
        this.setState({todos, newTodo: ''});
    }
    render(){
        const {newTodo} = this.state;  
        const todos = this.state.todos.map((t,i) => {
            console.log(t);
            return <TodoItem key={i} text={t} />
        });

        return(
            <div className="todo-app">
                <h1>Simple Todo App</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="todo-input"
                        autoComplete="off"
                        type="text"
                        name="newTodo"
                        placeholder="What needs to be done?"
                        value={newTodo} 
                        onChange = {(e) => this.setState({[e.target.name]: e.target.value})}
                    />
                    <button
                        type="submit"
                        className="save-button">
                        SAVE
                    </button>
                </form>
                <div>
                    <ol>
                        {todos}
                    </ol>
                </div>
            </div>
        );
    }
}

export default ToDo;
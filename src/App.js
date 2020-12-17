import React from 'react';
import Todos from './components/Todos';
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo.";

export default class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with son',
        completed: false
      },
      {
        id: 3,
        title: 'meeting with hoss',
        completed: true
      }
    ],
    count: 3
  };


  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map( currTodo => {
      if(id === currTodo.id) currTodo.completed = !currTodo.completed;
      return currTodo;
    })});
  };

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id )]})
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, {title: todo.title, completed: false, id: this.state.count+1}],
      count: (this.state.count+1)
    })

  };

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}


import React, {Fragment} from 'react';
import Todos from './components/todo/Todos';
import Header from "./components/layout/Header";
import AddTodo from "./components/todo/AddTodo";
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/pages/About";
import axios from "axios";

export default class App extends React.Component {

  state = {
    todos: [

    ],
    count: 10,
  };

  componentDidMount() {
    axios.get(_endpoint(`todos?_limit=10`)).then( res => {
      this.setState({todos: res.data});
    });
  }


  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map( currTodo => {
      if(id === currTodo.id) currTodo.completed = !currTodo.completed;
      return currTodo;
    })});
  };

  deleteTodo = (id) => {
    axios.delete(_endpoint(`todos/${id}`)).then( res => {
      this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id )]})
    });
  };

  addTodo = (todo) => {
    axios.post(_endpoint('todos'), {title: todo.title, completed: false, id: this.state.count+1})
      .then( (res) => {
        this.setState({
          todos: [...this.state.todos, res.data],
          count: (this.state.count+1)
        })
      })

  };

  render(){
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header/>
              <Route exact path="/" render={ props => (
                  <Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos}  toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
                  </Fragment>
              )}/>
              <Route path="/about" component={About} />

            </div>
          </div>
        </Router>
    );
  }
}

const apiURI = "https://jsonplaceholder.typicode.com/";
const _endpoint = (endpoint) => apiURI+endpoint;

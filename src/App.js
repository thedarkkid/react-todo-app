import React from 'react';
import Todos from './components/Todos';

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
    ]
  };


  markComplete = () => {
    console.log("hello");
  };

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}


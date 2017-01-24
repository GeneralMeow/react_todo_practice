import React from 'react';
import CreateToDo from './createToDo';
import ToDoList from './ToDoList';

const todos = [
    {
      task: "eat dinner",
      isCompleted: false
    },
    {
      task: "finish watching react tutorials",
      isCompleted: false
    }
]

export default class App extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      todos
    }
  }

  createTask( task ) {
    const updateTodoState = this.state.todos

    updateTodoState.push({
      task,
      isCompleted: false
    })

    this.setState({ todos: updateTodoState })
  }

  render() {
    return (
      <div>
        <h1>React ToDo App</h1>
          <CreateToDo createTask={ this.createTask.bind( this ) } />
          <ToDoList todos={ this.state.todos } />
      </div>
    );
  }
}

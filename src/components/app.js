import React from 'react';
import CreateToDo from './createToDo';
import ToDoList from './ToDoList';

const todos = [
    {
      task: "eat dinner",
      isCompleted: true
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

  toggleTask( task ) {
    const foundToDo = _.find(this.state.todos, todo => todo.task === task)
    foundToDo.isCompleted = !foundToDo.isCompleted;
    this.setState( { todos: this.state.todos } );
  }

  createTask( task ) {
    this.state.todos.push ({
      task,
      isCompleted: false
    })

    this.setState({ todos: this.state.todos })
  }
  saveTask( oldTask, newTask ){
    const foundToDo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundToDo.task =newTask;
    this.setState({ todos: this.state.todos })
  }

  deleteTask( taskToDelete ) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete )
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div>
        <h1>Simple ToDo App</h1>
          <CreateToDo createTask={ this.createTask.bind( this ) } />
          <ToDoList todos={ this.state.todos }
                    toggleTask={ this.toggleTask.bind( this ) }
                    saveTask={this.saveTask.bind(this )}
                    deleteTask={this.deleteTask.bind( this )}
          />
      </div>
    );
  }
}

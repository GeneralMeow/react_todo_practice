import React from 'react';


export default class ToDoList extends React.Component {

  render() {
    return (
      <form onSubmit={ this.handleCreate.bind( this ) }>
        <input type="text" placeholder="What needs to get done?" ref="createInput"/>
        <button>Create</button>
      </form>
    )
  }
  handleCreate( event ) {
    event.preventDefault()
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = "";
  }
}

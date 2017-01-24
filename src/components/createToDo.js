import React from 'react';


export default class ToDoList extends React.Component {

  render() {
    return (
      <form>
        <input type="text" placeholder="What needs to get done?" />
        <button>Create</button>
      </form>
    )
  }
}

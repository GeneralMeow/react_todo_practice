import _ from 'lodash';
import React from 'react';
import ToDoListHeader from './toDoListHeader';
import ToDoListItem from './toDoListItem';
import CreateToDo from './createToDo';


export default class ToDoList extends React.Component {
  renderItems() {
const props = _.omit(this.props, 'todos');

    return _.map( this.props.todos, ( todo, index ) => <ToDoListItem key={ index } { ...todo } {...props} /> )
  }


  render() {
    return (
      <table>
        <ToDoListHeader />
        <tbody>
        {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

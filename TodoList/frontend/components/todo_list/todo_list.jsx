import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map((el, idx) =>
            <TodoListItem todo={el} removeTodo={this.props.removeTodo} receiveTodo={this.props.createTodo} key={idx}/>
          )}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}

export default TodoList;

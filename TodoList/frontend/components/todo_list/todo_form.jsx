import React from 'react';
import uniqueId from '../../utils/unique_id.js';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: "", body: "", done: false, id: ""};
    this.createTodo = props.createTodo;
  }

  handleTitle(event){
    this.setState({
      title: event.target.value
    });
  }

  handleBody(event){
    this.setState({
      body: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.createTodo({
      title: this.state.title,
      body: this.state.body,
      done: false
    }).then( () => {
      this.setState({title: "", body: ""});
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="title" value={this.state.title}
          placeholder="title" onChange={this.handleTitle.bind(this)}>
        </input><br />

        <textarea name="body" value={this.state.body}
          placeholder="body" onChange={this.handleBody.bind(this)}>
        </textarea><br />

        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default TodoForm;

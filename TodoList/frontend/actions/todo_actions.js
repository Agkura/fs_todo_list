import * as APIUtils from '../utils/todo_api_utils';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo: todo
});

export const fetchTodos = () => (dispatch) => {
  return APIUtils.getRequest().then( (res) => dispatch(receiveTodos(res)));
};

export const createTodo = (todo) => (dispatch) => {
  return APIUtils.postRequest(todo)
  .then( (res) => dispatch(receiveTodo(res)), (err) => dispatch(receiveErrors(err.responseJSON)));
}

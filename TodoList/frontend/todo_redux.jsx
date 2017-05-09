import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { getRequest } from './utils/todo_api_utils';

import { allTodos } from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

const store = configureStore();

document.addEventListener("DOMContentLoaded", function(){
  ReactDom.render(<Root store={ store }/>, document.getElementById('content'));
});


window.store = store;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.getRequest = getRequest;

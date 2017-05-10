export const getRequest = () =>(
  $.ajax({
    url: 'api/todos'
  })
);

export const postRequest = (todo) => {
  debugger;
  $.ajax({
    url: 'api/todos',
    method: 'POST',
    body: {
      todo: {
        title: todo.title,
        body: todo.body,
        done: todo.done
      }
    }
  })
};

export const getRequest = () =>(
  $.ajax({
    url: 'api/todos'
  })
);

export const postRequest = (todo) => {
  return $.ajax({
    url: 'api/todos',
    method: 'POST',
    data: {
      todo: {
        title: todo.title,
        body: todo.body,
        done: todo.done
      }
    }
  })
};

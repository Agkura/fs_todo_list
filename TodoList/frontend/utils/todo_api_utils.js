export const getRequest = () =>(
  $.ajax({
    url: 'api/todos'
  })
);

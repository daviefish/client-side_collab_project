angular.module('TodosApp')
  .controller('TodosController', TodosController);

TodosController.$inject = ['TodoFactory'];

function TodosController(TodoFactory) {
  var self = this;
  self.allTodos = [];
  self.api = TodoFactory;



  self.api.getAllTodos()
    .success(function(data) {
      console.log("Getting all todos: " + data.todos);
      self.allTodos = data.todos;
    });

    self.todos = {};

    self.showTodo = showTodo;

    function showTodo(id) {
      console.log("Show Todo: " + id);
      self.api.getOneTodo(id)
          .success(function(todo) {
            self.todo = todo;
            console.log(todo);
          });
    }
}


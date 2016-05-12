angular.module('TodosApp')
  .controller('TodosController', TodosController);

TodosController.$inject = ['TodoFactory'];

function TodosController(TodoFactory) {
  var self = this;
  self.api = TodoFactory;

  self.allTodos = [];

  self.api.getAllTodos()
    .success(function(data) {
      console.log("Getting all todos: " + data.todos);
      self.allTodos = data.todos;
    });

    self.todos = {};

    self.showTodos = showTodos;

    function showTodos(id) {
      console.log("Show Todos: " + id);
      self.api.getOneTodo(id)
          .success(function(todo) {
            self.todo = todo;
            console.log(todo);
          });
    }
}


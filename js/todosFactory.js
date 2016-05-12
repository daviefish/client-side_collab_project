angular.module('TodosApp')
  .factory('TodoFactory', TodoFactory);

TodoFactory.$inject = ['$http'];

function TodoFactory($http) {
    var todosURL = 'http://localhost:3000/api/todos';
    var todoURL = 'http://localhost:3000/api/todos/:id';
    var todoFactory = {};

    todoFactory.getAllTodos = function() {
      return $http.get(todosURL);
    };

    todoFactory.getOneTodo = function(id) {
      return $http.get(todoURL + id);
    };

    return todoFactory;
}



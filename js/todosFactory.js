angular.module('TodosApp') //requires the module
  .factory('TodoFactory', TodoFactory); //declaring the file as a factory and calling it and naming it TodoFactory


TodoFactory.$inject = ['$http']; //$http is a service from angualr used to make ajax call
//injects the $http service into the todofactory


///creating a todofactory function
function TodoFactory($http) {
    var todosURL    = 'http://localhost:3000/api/todos'; //setting the api url
    var todoURL     = 'http://localhost:3000/api/todos/'; // setting the api url for the individual ids
    var todoFactory = {}; //makinga blank object

    todoFactory.getAllTodos = function() { //creatinga function in the todofactory called getalltodos
      return $http.get(todosURL); //using the $http to make a get request on the specified url
    };

    todoFactory.getOneTodo = function(id) {
      return $http.get(todoURL + id);
    };

    todoFactory.deleteOneTodo = function(id) {
      console.log(todoURL + id)
      return $http.delete(todoURL + id);
    };

    // todoFactory.addOneTodo = function(id) {
    //   return $http.post(todoURL + id);
    // };




    return todoFactory;
}



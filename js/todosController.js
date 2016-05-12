angular.module('TodosApp')
  .controller('TodosController', TodosController);

TodosController.$inject = ['TodoFactory'];



function TodosController(TodoFactory) {
  var self = this;
  self.allTodos = [];
  self.api = TodoFactory;
  self.getTodos = getTodos;


function getTodos() {
  TodoFactory.getAllTodos()
    .success(function(data) {
      // console.log(data);
      // console.log("Getting all todos: " + data.todos);
      self.allTodos = data;
    });
  }
  getTodos()

    self.todos = {};
    self.showTodo = showTodo;



    function showTodo(id) {
      console.log(id);
      self.api.getOneTodo(id)
          .success(function(todo) {
            self.todo = todo;
            console.log(todo);
          });
        }

   self.deleteTodo =function(data) {
      var id = (data._id);
      self.api.deleteOneTodo(id)
          .success(function(todo) {
           // self.todo = todo;
            console.log(todo);
      // var index = self.all.indexOf(todo);
      //  self.all.splice(index, 1);
          getTodos()
         })
        };


    // function addTodo(id) {
    //   console.log("add todo: " + id);
    //   self.api.getOneTodo(id)
    //       .success(function(todo) {
    //         self.todo = todo;
    //         console.log(todo);
    //       });



    }


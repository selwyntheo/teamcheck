angular.module("myApp",['ngRoute']);
var app = angular.module("myApp");

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'TodoListCtrl',
        templateUrl: "todo.html"
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

app.controller('TodoListCtrl', function($scope) {
  $scope.todoList = [];

  $scope.addTodo = function(add) {
    var newTodo = add.todoInput.trim();
	var newTodoTime = add.todoInputTime.trim();
    $scope.todoList.push({
      name: newTodo,
	  date: newTodoTime
    });
    $scope.todoInput = "";
	$scope.reset();
  };

  $scope.deleteTodo = function(index) {
    $scope.todoList.splice(index, 1);
  };
  
  $scope.reset = function() {
    $scope.add = angular.copy($scope.todoList);
  };
});

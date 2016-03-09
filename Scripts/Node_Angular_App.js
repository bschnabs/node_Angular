var Node_Angular_App = angular.module('Node_Angular_App', ['ngRoute']);

Node_Angular_App.controller('BaseController', BaseController);
Node_Angular_App.controller('LoginController', LoginController);
Node_Angular_App.controller('RegisterController', RegisterController);
Node_Angular_App.controller('ValuesController', ValuesController);

Node_Angular_App.service('SessionService', SessionService);

Node_Angular_App.factory('LoginFactory', LoginFactory);
Node_Angular_App.factory('RegisterFactory', RegisterFactory);
Node_Angular_App.factory('GetValuesFactory', GetValuesFactory);

var ConfigFunction = function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController'
  })
  .when('/values', {
    templateUrl: 'views/values.html',
    controller: 'ValuesController'
  });
};

ConfigFunction.$inject = ['$routeProvider'];
Node_Angular_App.config(ConfigFunction);

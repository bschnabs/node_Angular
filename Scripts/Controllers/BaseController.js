var BaseController = function($scope, SessionService){
  $scope.helloAgain = "This is awesome and it's Angular!";

  $scope.loggedIn = function(){
    return SessionService.getToken() !== undefined;
  }
}

BaseController.$inject = ['$scope', 'SessionService'];

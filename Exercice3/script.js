var appForm = angular.module('appForm', ['ngRoute']);
appForm.run(['$rootScope', function($rootScope){
  $rootScope.tests = [];
}]);
appForm.config(['$routeProvider', function($routeProvider) {
  // Système de routage
  $routeProvider.when('/', {
    templateUrl: 'index2.html',
    controller: 'textCtrl'
  })
  .when('/:id', {
    templateUrl: 'partial.html',
    controller: 'messageCtrl',
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
appForm.controller('textCtrl', function($scope, $rootScope){
  $scope.text = /^[A-Z][A-Za-zéèê-]+$/;
  $scope.submit = function(){
    $rootScope.tests.push({ Name: $scope.name, Mail: $scope.input, Subject: $scope.subject, Message: $scope.message});
  };
});

  appForm.controller('messageCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){

    $scope.messageName = $rootScope.tests[$routeParams.id].Name;
    $scope.messageInput = $rootScope.tests[$routeParams.id].Mail;
    $scope.messageSubject = $rootScope.tests[$routeParams.id].Subject;
    $scope.messageMessage = $rootScope.tests[$routeParams.id].Message;
  }]);

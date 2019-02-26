angular.module('alertTest', [])
    .controller('TestAlert', ['$scope', '$window', function($scope, $window) {
      $scope.popUp = 'Alerte !!!';
      $scope.doAlert = function(popUp) {
        $window.alert(popUp);
      };
    }]);

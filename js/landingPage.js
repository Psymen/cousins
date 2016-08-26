// module for landing page, really simple.
var loginApp = angular.module('loginApp', []);
var s = null;
loginApp.controller('mainCtrl', ['$scope','$window', function($scope, $window) {
  s = $scope;
  $scope.loginFlag = false;
  
  $scope.initializeApp = function(){
    $window.location.href = 'index.html'
  }
}]);
var firstTry = angular.module('firstTry',[]);
firstTry.controller('firstController', function($scope){
  $scope.first = 'One';
  $scope.second = 'Two';
  $scope.heading = 'Hello world';
  $scope.update = function(){
    $scope.message = ' '+ $scope.first + ' '+$scope.second +'!'; 
  };
});

firstTry.controller('databaseController',['$scope','$http',
    function($scope, $http){
      $http.get('/websites').
        then(function(response){
          $scope.websites = response.data;
        }, function(response){
          $scope.websites = null;
          console.log('error');
        });
    }]);

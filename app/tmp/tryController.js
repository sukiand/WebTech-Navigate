var firstController = function($scope){
  $scope.first = 'first name';
  $scope.second = 'last name';
  $scope.heading = 'Hello world';
  $scope.update = function(){
    $scope.message = ' '+ $scope.first + ' '+$scope.second +'!'; 
  };
};
WebTech.controller('firstController',['$scope', firstController]);

var tryController = function($scope,websiteService){
      websiteService.get().then(function(response){
          $scope.websites = response.data;
          console.log(response.data);
      });
    };
WebTech.controller('tryController',['$scope','websiteService',tryController]);

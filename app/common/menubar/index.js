var MenuController = function($scope, $location){
    console.log($location.path());
    $scope.isActive = function(path){
        return (path == $location.path() ? "active" : "");
    };
};
WebTech.controller('MenuController', ['$scope','$location',MenuController]);

var MenuController = function($scope, $location){
    $scope.isActive = function(path){
        return (path == $location.path() ? "active" : "");
    };
};

angular
    .module('WebTech')
    .controller('MenuController', ['$scope','$location',MenuController]);

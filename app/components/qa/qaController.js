var qaController = function($scope, qaService){
    qaService.get().then(function(response){
        $scope.qas = response.data;
    });
};

angular
    .module('WebTech')
    .controller('qaController',['$scope','qaService',qaController]);

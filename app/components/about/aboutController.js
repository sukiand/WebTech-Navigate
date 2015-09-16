var aboutController = function($scope,profileService){
    profileService.get().then(function(response){
        $scope.profiles = response.data;
    });
};


angular
    .module('WebTech')
    .controller('aboutController',['$scope','profileService',aboutController]);

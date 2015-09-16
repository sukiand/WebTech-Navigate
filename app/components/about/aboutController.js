var aboutController = function($scope,profileService){
    profileService.get().then(function(response){
        $scope.profiles = response.data;
        console.log(response.data);
    });
};


angular
    .module('WebTech')
    .controller('aboutController',['$scope','profileService',aboutController]);

var profileService = function($http){
    return{
        get: function(){
            return $http.get('/api/profiles');
        }
    };
};

angular
    .module('WebTech')
    .service('profileService',['$http',profileService]);

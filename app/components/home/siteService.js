var siteService = function($http){
    return {
        get: function(){
            return $http.get('/api/websites');
        },
        tags: function(){
            return $http.get('/api/tags');
        }
    };
};

angular
    .module('WebTech')
    .service('siteService',['$http',siteService]);

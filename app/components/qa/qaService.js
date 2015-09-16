var qaService = function($http){
    return {
        get: function(){
            return $http.get('api/qas');
        }
    };
};

angular
    .module('WebTech')
    .service('qaService',['$http',qaService]);

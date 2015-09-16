var tryService = function($http){
  return {
    get: function(){
      return $http.get('/websites');
    }
    };
};
WebTech.service('websiteService', ['$http',tryService]);

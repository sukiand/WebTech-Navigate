// var WebTech = angular.module('WebTech',[]);
var WebTech = angular.module('WebTech',['ngRoute']);

var config = function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/',{controller:'MainController', templateUrl:'/components/home/index'}).
        when('/qa',{controller:'qaController', templateUrl:'/components/qa/index'}).
        when('/about',{controller:'aboutController', templateUrl:'/components/about/index'}).
        otherwise({redirectTo:'/'});
};
WebTech.config(['$routeProvider','$locationProvider',config]);


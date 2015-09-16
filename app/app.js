// var WebTech = angular.module('WebTech',[]);
var WebTech = angular.module('WebTech',['ngRoute']);

var config = function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/',{controller:'MainController', templateUrl:'/components/home/index'}).
        when('/category',{controller:'MainController', templateUrl:'/components/home/index'}).
        when('/about',{controller:'ProfileController', templateUrl:'/components/about/index'}).
        otherwise({redirectTo:'/'});
};
WebTech.config(['$routeProvider','$locationProvider',config]);


// var WebTech = angular.module('WebTech',[]);
var WebTech = angular.module('WebTech',['ngRoute']);

var config = function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/index',{controller:'MainController', templateUrl:'/components/home/main'}).
        when('/category',{controller:'MainController', templateUrl:'/components/home/home'}).
        when('/about',{controller:'ProfileController', templateUrl:'/components/about/about'}).
        otherwise({redirectTo:'/'});
};
WebTech.config(['$routeProvider','$locationProvider',config]);


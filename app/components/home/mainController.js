angular
.module('WebTech')
.controller('MainController', ['$scope', '$http', MainController]);

function MainController($scope, $http) {
  $scope.categories = [];

  $http.get('/api/websites').then(function (response) {
    $scope.categories = response.data;
    $scope.categories.forEach(function (cate) {
      var languageSet = new Set();
      cate.websites.forEach(function (website) {
        if (website.language) {
          website.language.forEach(function (language) {
            languageSet.add(language);
          });
        }
      });
      cate.languages = [];
      languageSet.forEach(function (language) {
        cate.languages.push(language);
      });
    });
  });
}

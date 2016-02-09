function MainController($scope, $http,siteService,cloudService) {
  $scope.categories = [];

  // siteService.write('hello success');
  siteService.get().then(function (response) {
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

  siteService.tags().then(function(response){
      var tagSets = response.data;
      var words = [];
      tagSets.forEach(function(tagSet){
          if(tagSet.tags){
              tagSet.tags.forEach(function(tag){
                  words.push(tag);
              });
          }
      });
        words.sort();
        var unique_words=[];
        words.forEach(function(word){
            if(word != unique_words[unique_words.length-1]){
                unique_words.push(word);
            }
        });
      cloudService.cloud(unique_words,1000,400,"test");
  });

  // cloudService.cloud(["haha","test","try","hahahahahahahaha","what","a","fucking","daydayday"],1000,300,"test");
}

angular
    .module('WebTech')
    .controller('MainController', ['$scope', '$http','siteService','cloudService', MainController]);


var disqus_js = false;
var aboutController = function($scope,profileService){
    profileService.get().then(function(response){
        $scope.profiles = response.data;
    });

    $('#disqus_thread').ready(function(){
        if(!disqus_js){
            //console.log('loading');
            $.getScript('/javascripts/disqus.js',function(){
                disqus_js = true;
                //console.log('success in loading');
            });
        }
        else{
            DISQUS.reset({
                  reload: true,
                  config: function () {  
                      this.page.identifier = "newidentifier";  
                      this.page.url = "http://example.com/#!newthread";
                    }

            });
        }
    });

};


angular
    .module('WebTech')
    .controller('aboutController',['$scope','profileService',aboutController]);



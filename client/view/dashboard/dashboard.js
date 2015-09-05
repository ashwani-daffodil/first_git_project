/**
 * Created by Praveen on 05-09-2015.
 */

/**
 * Created by Praveen on 24-02-2015.
 */

reaxtion.controller('dashboardViewController', ['$scope', 'ServerCommunicationsService', 'SystemService', function ($scope, ServerCommunicationsService) {


    $scope.programmingLanguages = [];
    $scope.videos = [];


    //ServerCommunicationsService.addProgrammingLanguages(function() {
//
    //  });

//    ServerCommunicationsService.addVideos(function() {
//
//      });

    ServerCommunicationsService.getVideos(function(err, response) {

        if(!err) {
            $scope.videos = response;
        }
    });

    ServerCommunicationsService.getProgrammingLanguages(function(err, response) {

        if(!err) {
            $scope.programmingLanguages = response;
        }
      });

}]);
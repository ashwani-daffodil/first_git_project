/**
 * Created by Praveen on 05-09-2015.
 */

/**
 * Created by Praveen on 24-02-2015.
 */

reaxtion.controller('dashboardViewController', ['$scope', 'ServerCommunicationsService', '$sce', function ($scope, ServerCommunicationsService, $sce) {


    $scope.programmingLanguages = [];
    $scope.videos = [];
    $scope.selectedVideo = {};
    $scope.selectedProgrammingLanguage = {};

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

    $scope.selectVideo = function(video) {
        $scope.selectedVideo = video;
    }

    $scope.getTrustedVideoUrl = function() {
        return $sce.trustAsResourceUrl($scope.selectedVideo.video_desc[0].video_url);
    }

    $scope.selectProgrammingLanguage = function(programmingLanguage) {
        $scope.selectedProgrammingLanguage = programmingLanguage;
    }

}]);
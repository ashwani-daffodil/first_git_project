/**
 * Created by Praveen on 05-09-2015.
 */

/**
 * Created by Praveen on 24-02-2015.
 */

reaxtion.controller('dashboardViewController', ['$scope', 'ServerCommunicationsService', 'SystemService', function ($scope, ServerCommunicationsService) {


    $scope.programmingLanguages = [];

    //ServerCommunicationsService.addProgrammingLanguages(function() {
//
    //  });

    ServerCommunicationsService.getProgrammingLanguages(function(err, response) {

        if(!err) {
            $scope.programmingLanguages = response;
        }
      });

}]);
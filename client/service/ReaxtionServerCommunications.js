/**
 * Created by Praveen on 05-09-2015.
 */

/**
 * Created by Praveen on 21-03-2015.
 */

reaxtion.service('ReaxtionServerCommunicationsService', function ($http, ngDialog) {

    this.getProgrammingLanguages = function (callback) {

        $http.get('http://localhost:3000/language/view_language').
            success(function (response) {

                                   
                    callback(null, response);
                }

            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

    }
});
/**
 * Created by Praveen on 05-09-2015.
 */

/**
 * Created by Praveen on 21-03-2015.
 */

reaxtion.service('ReaxtionServerCommunicationsService', function ($http, ngDialog) {

    this.getProgrammingLanguages = function (callback) {

        $http.put('/user_profile', {user_details: user_details}).
            success(function (data, status, headers, config) {

                if (status === 200 && data) {

                    ngDialog.open({
                        closeByEscape: false,
                        closeByDocument: false,
                        showClose: false,

                        template: '\
                                            <p></p>\
                                            <p style="font-weight: bold;">' + data + '.</p>\
                                            <div class="ngdialog-buttons">\
                                            <button type="button" style="height:30px;float:right;" class="btn btn-primary" ng-click="closeThisDialog()">OK</button>\
                                            </div>',
                        plain: true,
                        className: 'ngdialog-theme-plain'
                    });

                    callback(null, data);
                }

            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

    }
});
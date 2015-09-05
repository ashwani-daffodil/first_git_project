/**
 * Created by Praveen on 05-09-2015.
 */


// Creates and AngularJS application
var reaxtion = angular.module('reaxtion', ['ui.router', 'ngCookies', 'ngDialog', 'ngDraggable'], function ($compileProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);

});

// Configures the application for different states and urls
reaxtion.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/reaxtion/dashboard');

    $stateProvider

        .state('reaxtion', {
            url: '/reaxtion',
            templateUrl: 'view/reaxtion/reaxtion.html',
            controller: 'reaxtionViewController'
        })

        .state('reaxtion.dashboard', {
            url: '/dashboard',
            templateUrl: 'view/dashboard/dashboard.html',
            controller: 'dashboardViewController'
        });

});


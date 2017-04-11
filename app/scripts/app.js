'use strict';

/**
 * @ngdoc overview
 * @name multibeamApp
 * @description
 * # multibeamApp
 *
 * Main module of the application.
 */
var multibeamApp = angular.module('multibeamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.bootstrap',
    'ui.select'
  ]);

  multibeamApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/grid_results.html',
        controller: 'GridResultsCtrl',
        controllerAs: 'grid'
      })
      .when('/html', {
        templateUrl: 'views/html_results.html',
        controller: 'HtmlResultsCtrl',
        controllerAs: 'html'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

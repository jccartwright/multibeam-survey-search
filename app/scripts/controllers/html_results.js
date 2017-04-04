'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:ControlPanelCtrl
 * @description
 * # ControlPanelCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('HtmlResultsCtrl', ['$scope', 'repository', function ($scope, repository) {
  $scope.repository = repository;

}]);

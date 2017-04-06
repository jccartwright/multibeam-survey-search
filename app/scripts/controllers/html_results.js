'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:HtmlResultCtrl
 * @description
 * # HtmlResultslCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('HtmlResultsCtrl', ['$scope', 'repository', function ($scope, repository) {
  $scope.repository = repository;

  $scope.data = [];

  $scope.$watch(function() {
      return repository.data;
    }, function(newValue) {
        $scope.data = newValue;
    }, true);
}]);

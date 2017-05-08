'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:GridResultsCtrl
 * @description
 * # GridResultsCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('GridResultsCtrl', ['$scope', 'repository', function ($scope, repository) {
  $scope.repository = repository;


  $scope.gridOptions = {
    columnDefs: [
      {
        displayName: 'Survey',
        field: 'SURVEY_NAME',
        cellTemplate: '<a href="{{ row.entity.DOWNLOAD_URL }}" target="_blank">{{ COL_FIELD }}</a>'
      },      
      {
        displayName: 'Scientist(s)',
        field: 'CHIEF_SCIENTIST',
      },
      {
        displayName: 'Departure',
        field: 'DEPARTURE_PORT',
      },
      {
        displayName: 'Arrival',
        field: 'ARRIVAL_PORT',
      },
      {
        displayName: 'Start',
        field: 'START_DATE',
      },
      {
        displayName: 'End',
        field: 'END_DATE',
      },
      {
        displayName: 'Ship',
        field: 'SHIP_NAME',
      },
      {
        displayName: 'Source',
        field: 'SOURCE',
      },      
      {
        displayName: 'Instrument',
        field: 'INSTRUMENT',
      }
    ]
  };

  $scope.$watch(function() {
      return repository.data;
    }, function(newValue) {
        $scope.gridOptions.data = newValue;
    }, true);
}]);

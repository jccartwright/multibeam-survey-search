'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:ControlPanelCtrl
 * @description
 * # ControlPanelCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('GridResultsCtrl', ['$scope', 'repository', function ($scope, repository) {
  $scope.repository = repository;


  $scope.gridOptions = {
    columnDefs: [
      { 
        displayName: 'Id',
        field: 'NGDC_ID'
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
        displayName: 'Survey',
        field: 'SURVEY_NAME',
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

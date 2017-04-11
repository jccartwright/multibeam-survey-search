'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('MainCtrl', ['$scope', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
    
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


  // $scope.gridOptions.data = [
  //   {"NGDC_ID":"NEW2528","CHIEF_SCIENTIST":"Kennedy, Brian","DEPARTURE_PORT":"Honolulu, HI","ARRIVAL_PORT":"Honolulu, HI","START_DATE":"2016-12-01","END_DATE":"2016-12-08","SURVEY_NAME":"EX1608","SHIP_NAME":"Okeanos Explorer","SOURCE":"NOAA Office of Ocean Exploration and Research (OER)","INSTRUMENT":"Kongsberg EM302","DOWNLOAD_URL":"https://www.ngdc.noaa.gov/ships/okeanos_explorer/EX1608_mb.html"},
  //   {"NGDC_ID":"NEW2529","CHIEF_SCIENTIST":"Sowers, Derek","DEPARTURE_PORT":"Honolulu, HI","ARRIVAL_PORT":"Honolulu, HI","START_DATE":"2016-12-10","END_DATE":"2016-12-16","SURVEY_NAME":"EX1609","SHIP_NAME":"Okeanos Explorer","SOURCE":"NOAA Office of Ocean Exploration and Research (OER)","INSTRUMENT":"Kongsberg EM302","DOWNLOAD_URL":"https://www.ngdc.noaa.gov/ships/okeanos_explorer/EX1609_mb.html"}]
  
  }]);

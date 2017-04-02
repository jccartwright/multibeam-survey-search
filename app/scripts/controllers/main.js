'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('MainCtrl', ['$scope', '$http', '$httpParamSerializer', function ($scope, $http, $httpParamSerializer) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    
    
    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/instruments.groovy').then(function(response){
      $scope.instruments = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/platforms.groovy').then(function(response){
      $scope.platforms = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/sources.groovy').then(function(response){
      $scope.sources = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/departureports.groovy').then(function(response){
      $scope.departurePorts = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/arrivalports.groovy').then(function(response){
      $scope.arrivalPorts = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/chiefscientists.groovy').then(function(response){
      $scope.chiefScientists = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/startdates.groovy').then(function(response){
      var min = response.data[0].MIN.split('-');
      var max = response.data[0].MAX.split('-');
      //month is 0-based in JS
      min[1]--;
      max[1]--;

      $scope.startDateOptions = {
        minDate: new Date(min[0], min[1], min[2]),
        maxDate: new Date(max[0], max[1], max[2])
      };
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/enddates.groovy').then(function(response){
      var min = response.data[0].MIN.split('-');
      var max = response.data[0].MAX.split('-');
      
      //month is 0-based in JS
      min[1]--;
      max[1]--;
      
      //Chrome allows array in constructor but Safari does not
      $scope.endDateOptions = {
        minDate: new Date(min[0], min[1], min[2]),
        maxDate: new Date(max[0], max[1], max[2])
      };
    });

    $scope.getSurveyNames = function(val) {
      return $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveynames.groovy', {
        params: {
          name: val.toUpperCase()
        }
      }).then(function(response){
        return response.data;
      });
    };

    

  $scope.open1 = function() { 
      $scope.popup1.opened = true;
  };
  $scope.popup1 = {
    opened: false
  };

  $scope.open2 = function() { 
      $scope.popup2.opened = true;
  };
  $scope.popup2 = {
    opened: false
  };
  
  $scope.selectedValues = {
    survey_name: null,
    ship_name: null,
    ship_source: null,
    instrument: null,
    chief_scientist: null,
    departure_port: null,
    arrival_port: null,
    start_date: null,
    end_date: null
  };

  $scope.$watchCollection("selectedValues", function() {
    console.log($httpParamSerializer($scope.selectedValues));
    //TODO change style of "Get Data" button?
  });
  /*
  $scope.$watchGroup(["selectedSurvey", "selectedShip", "selectedSource", 
    "selectedInstrument", "selectedChiefScientist", "selectedDeparturePort",
    "selectedArrivalPort", "selectedStartDate", "selectedEndDate"], function(newValue, oldValue) {
      console.log(newValue);
  });
*/
  
  $scope.surveySelectHandler = function(item) {
    console.log('inside surveySelectHandler');
    $scope.selectedValues.survey = item;
    //console.log(selectedValues);
    //console.log(item);
  };

  $scope.getDataBtnHandler = function() {
    console.log('inside getDataBtnHandler...');
    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveyattributes.groovy', {
      params: $scope.selectedValues
    }).then(function(response){
      $scope.myData = response.data;
    });
  };
/*
  $scope.myData = [
{
'Survey Name': '09CQ01_Saipan',
'Platform':	'Swamp Fox',
'Source': 'US Navy',
'Chief Scientist': 'Baptise, Charles',
'Instrument':	'Reson SeaBat 7125',
'Depature Port': null,
'Arrival Port': null,
'Start Date': '2009-06-12',
'End Date':	'2009-06-22'
}, {
'Survey Name': '09CQ02_Tinian',
'Platform':	'Swamp Fox',
'Source': 'US Navy',
'Chief Scientist': 'Baptise, Charles',
'Instrument':	'Reson SeaBat 7125',
'Depature Port': null,
'Arrival Port': null,
'Start Date': '2009-06-18',
'End Date':	'2009-06-18'
}, {
'Survey Name': '18-cruise',
'Platform':	'Boris Petrov',
'Source': 'Russia',
'Chief Scientist': 'Unknown',
'Instrument':	'Unknown',
'Depature Port': 'Unknown',
'Arrival Port': 'Unknown',
'Start Date': '1991-07-04',
'End Date':	'1991-09-01'
}
];
*/
  }]);

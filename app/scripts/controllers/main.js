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


    
    
    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/instruments.groovy').then(function(response){
    //   $scope.instruments = response.data;
    // });

    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/platforms.groovy').then(function(response){
    //   $scope.platforms = response.data;
    // });

    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/sources.groovy').then(function(response){
    //   $scope.sources = response.data;
    // });

    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/departureports.groovy').then(function(response){
    //   $scope.departurePorts = response.data;
    // });

    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/arrivalports.groovy').then(function(response){
    //   $scope.arrivalPorts = response.data;
    // });

    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/chiefscientists.groovy').then(function(response){
    //   $scope.chiefScientists = response.data;
    // });

    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/startdates.groovy').then(function(response){
    //   //expects string in format of YYYY-MM-DDTHH:MM:SSZ
    //   $scope.startDateOptions = {
    //     minDate: new Date(response.data[0].MIN),
    //     maxDate: new Date(response.data[0].MAX)
    //   };      
    // });

    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/enddates.groovy').then(function(response){
    //   //expects string in format of YYYY-MM-DDTHH:MM:SSZ
    //   $scope.endDateOptions = {
    //     minDate: new Date(response.data[0].MIN),
    //     maxDate: new Date(response.data[0].MAX)
    //   };      
    // });

    // $scope.getSurveyNames = function(val) {
    //   return $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveynames.groovy', {
    //     params: {
    //       name: val.toUpperCase()
    //     }
    //   }).then(function(response){
    //     return response.data;
    //   });
    // };

    

  // $scope.open1 = function() { 
  //     $scope.popup1.opened = true;
  // };
  // $scope.popup1 = {
  //   opened: false
  // };

  // $scope.open2 = function() { 
  //     $scope.popup2.opened = true;
  // };
  // $scope.popup2 = {
  //   opened: false
  // };
  
  // $scope.selectedValues = {
  //   surveyName: null,
  //   shipName: null,
  //   shipSource: null,
  //   instrument: null,
  //   chiefScientist: null,
  //   departurePort: null,
  //   arrivalPort: null,
  //   startDate: null,
  //   endDate: null
  // };

  // $scope.$watchCollection('selectedValues', function() {
  //   console.log($httpParamSerializer($scope.selectedValues));
  //   //TODO change style of "Get Data" button?
  // });
  
  
  // $scope.$watchGroup(["selectedSurvey", "selectedShip", "selectedSource", 
  //   "selectedInstrument", "selectedChiefScientist", "selectedDeparturePort",
  //   "selectedArrivalPort", "selectedStartDate", "selectedEndDate"], function(newValue, oldValue) {
  //     console.log(newValue);
  // });

  
  // $scope.surveySelectHandler = function() {
  //   console.log('inside surveySelectHandler');
  //   //$scope.selectedValues.survey = item;
  //   //console.log(selectedValues);
  //   //console.log(item);
  //   $scope.getDataBtnHandler();
  // };

  // $scope.getDataBtnHandler = function() {
  //   console.log('inside getDataBtnHandler...');
  //   console.log($scope.selectedValues);
  //   $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveyattributes.groovy', {
  //     params: $scope.selectedValues
  //   }).then(function(response){
  //     //$scope.myData = response.data;
  //     $scope.gridOptions.data = response.data;
  //   });
  // };

  // $scope.resetBtnHandler = function() {
  //   $scope.selectedValues = {};
  //   //$scope.myData = [];
  //   $scope.gridOptions.data = [];

  // };

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

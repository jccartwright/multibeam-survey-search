'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:ControlPanelCtrl
 * @description
 * # ControlPanelCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('ControlPanelCtrl', ['$scope', '$http', '$location', 'repository', function ($scope, $http, $location, repository) {
  $scope.repository = repository;

  $scope.switchViewBtnHandler = function(e) {
    console.log($location.path());
    if (e.currentTarget.value === 'HTML view') {
      e.currentTarget.value = 'Grid view';
      $location.path('/html');
    } else {
      e.currentTarget.value = 'HTML view';
      $location.path('/grid');
    }

  };

/*
    //syntax required to get async results from service.  in practice, by the 
    //time the UI is accessed, the async functions are complete and the arrays
    //can be accessed directly from the service
    $scope.$watch(function() {
      return repository.instruments;
    }, function(newValue) {
        $scope.instruments = newValue;
    }, true);
*/
/*
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

    $scope.getSurveyNames = function(val) {
      return $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveynames.groovy', {
        params: {
          name: val.toUpperCase()
        }
      }).then(function(response){
        return response.data;
      });
    };
*/
    
  $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/startdates.groovy').then(function(response){
    //expects string in format of YYYY-MM-DDTHH:MM:SSZ
    $scope.startDateOptions = {
      minDate: new Date(response.data[0].MIN),
      maxDate: new Date(response.data[0].MAX)
    };      
  });

  $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/enddates.groovy').then(function(response){
    //expects string in format of YYYY-MM-DDTHH:MM:SSZ
    $scope.endDateOptions = {
      minDate: new Date(response.data[0].MIN),
      maxDate: new Date(response.data[0].MAX)
    };      
  });

  $scope.open1 = function() { 
      $scope.popup1.opened = true;
      //initialize value in popup
      //repository.selectedValues.start = $scope.startDateOptions.maxDate;
  };
  $scope.popup1 = {
    opened: false
  };

  $scope.open2 = function() { 
      $scope.popup2.opened = true;
      //initialize value in popup
      //repository.selectedValues.end = $scope.endDateOptions.maxDate;

  };
  $scope.popup2 = {
    opened: false
  };
  
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
  //   //console.log($httpParamSerializer($scope.selectedValues));
  //   //TODO change style of "Get Data" button?
  // });
  /*
  $scope.$watchGroup(["selectedSurvey", "selectedShip", "selectedSource", 
    "selectedInstrument", "selectedChiefScientist", "selectedDeparturePort",
    "selectedArrivalPort", "selectedStartDate", "selectedEndDate"], function(newValue, oldValue) {
      console.log(newValue);
  });
*/
  
  $scope.surveySelectHandler = function() {
    console.log('inside surveySelectHandler');
    //$scope.selectedValues.survey = item;
    //console.log(selectedValues);
    //console.log(item);
    //$scope.getDataBtnHandler();
    $scope.repository.getData();
    console.log('selectedValues: ',$scope.repository.selectedValues);
  };

  $scope.getDataBtnHandler = function() {
    console.log('inside getDataBtnHandler...');
    repository.getData();
    // console.log($scope.selectedValues);
    // $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveyattributes.groovy', {
    //   params: $scope.selectedValues
    // }).then(function(response){
    //   //$scope.myData = response.data;
    //   $scope.gridOptions.data = response.data;
    // });
  };

  $scope.resetBtnHandler = function() {
    $scope.repository.selectedValues = {};
    $scope.repository.data = [];
  };

  

/*
  $scope.gridOptions.data = [
    {"NGDC_ID":"NEW2528","CHIEF_SCIENTIST":"Kennedy, Brian","DEPARTURE_PORT":"Honolulu, HI","ARRIVAL_PORT":"Honolulu, HI","START_DATE":"2016-12-01","END_DATE":"2016-12-08","SURVEY_NAME":"EX1608","SHIP_NAME":"Okeanos Explorer","SOURCE":"NOAA Office of Ocean Exploration and Research (OER)","INSTRUMENT":"Kongsberg EM302","DOWNLOAD_URL":"https://www.ngdc.noaa.gov/ships/okeanos_explorer/EX1608_mb.html"},
    {"NGDC_ID":"NEW2529","CHIEF_SCIENTIST":"Sowers, Derek","DEPARTURE_PORT":"Honolulu, HI","ARRIVAL_PORT":"Honolulu, HI","START_DATE":"2016-12-10","END_DATE":"2016-12-16","SURVEY_NAME":"EX1609","SHIP_NAME":"Okeanos Explorer","SOURCE":"NOAA Office of Ocean Exploration and Research (OER)","INSTRUMENT":"Kongsberg EM302","DOWNLOAD_URL":"https://www.ngdc.noaa.gov/ships/okeanos_explorer/EX1609_mb.html"}]
*/   
  }]);

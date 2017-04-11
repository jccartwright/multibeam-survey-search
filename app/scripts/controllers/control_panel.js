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

  var viewMode;
  if ($location.path() === '/html') {
    viewMode = 'html';
    $scope.toggleViewBtnLabel = 'switch to Grid view';
  } else {
    viewMode = 'grid';
    $scope.toggleViewBtnLabel = 'switch to HTML view';
  }

  $scope.toggleView = function() {
    if (viewMode === 'grid') {
      viewMode = 'html';
      $scope.toggleViewBtnLabel = 'switch to Grid view';
      $location.path('/html');
    } else if (viewMode === 'html') {
      viewMode = 'grid';
      $scope.toggleViewBtnLabel = 'switch to HTML view';
      $location.path('/');

    } else {
      console.error('unexpected viewMode');
    }
  };
    
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
    
  $scope.surveySelectHandler = function() {
    $scope.repository.getData();
  };

  $scope.getDataBtnHandler = function() {
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

  }]);

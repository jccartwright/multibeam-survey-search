'use strict';

angular.module('multibeamApp').service('repository', ['$http', function($http) {
    var self = this;
    this.selectedValues = {};
    this.gridOptions = {};

    this.getData = function() {
      console.log('inside getData...');
      console.log(self.selectedValues.end);
      
      $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveyattributes.groovy', {
        params: self.selectedValues
      }).then(function(response){
        console.log(response.data);
        //$scope.myData = response.data;
        self.data = response.data;
       });
    };


    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/instruments.groovy').then(function(response){
      self.instruments = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/platforms.groovy').then(function(response){
      self.platforms = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/sources.groovy').then(function(response){
      self.sources = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/departureports.groovy').then(function(response){
      self.departurePorts = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/arrivalports.groovy').then(function(response){
      self.arrivalPorts = response.data;
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/chiefscientists.groovy').then(function(response){
      self.chiefScientists = response.data;
    });

    this.getSurveyNames = function(val) {
      return $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveynames.groovy', {
        params: {
          name: val.toUpperCase()
        }
      }).then(function(response){
        return response.data;
      });
    };

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/startdates.groovy').then(function(response){
      //expects string in format of YYYY-MM-DDTHH:MM:SSZ
      self.startDateOptions = {
        minDate: new Date(response.data[0].MIN),
        maxDate: new Date(response.data[0].MAX)
      };
    });

    $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/enddates.groovy').then(function(response){
      //expects string in format of YYYY-MM-DDTHH:MM:SSZ
      self.endDateOptions = {
        minDate: new Date(response.data[0].MIN),
        maxDate: new Date(response.data[0].MAX)
      };
    });


}]);
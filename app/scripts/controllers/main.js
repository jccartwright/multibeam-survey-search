'use strict';

/**
 * @ngdoc function
 * @name multibeamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multibeamApp
 */
angular.module('multibeamApp').controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.getLocation = function(val) {
    return $http.get('https://maps.ngdc.noaa.gov/mapviewer-support/multibeam/surveyids.groovy', {
      params: {
        id: val
      }
    }).then(function(response){
      return response.data;
      // return response.data.results.map(function(item){
      //   return item.formatted_address;
      // });
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
  
  /*
  //TODO set based on min/max dates in data
  $scope.dateOptions = {
    minDate: new Date(),
    maxDate: new Date()
  };
  */

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

  }]);

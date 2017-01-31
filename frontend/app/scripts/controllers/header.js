'use strict';

angular.module('jsJwtApp')
  .controller('HeaderCtrl', function ($scope, $auth) {
    
    // set isAuthenticated for header
    $scope.isAuthenticated = $auth.isAuthenticated;
  });

'use strict';

/**
 * @ngdoc directive
 * @name jsJwtApp.directive:sameAs
 * @description
 * # sameAs
 */
angular.module('jsJwtApp')
  .directive('sameAs', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the sameAs directive');
      }
    };
  });

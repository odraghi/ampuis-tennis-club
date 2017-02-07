'use strict';

/**
 * @ngdoc directive
 * @name atcApp.directive:menu
 * @description
 * # menu
 */
angular.module('atcApp')
  .directive('menu', function () {
    return {
      templateUrl: 'views/menu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.addClass('navbar-fixed-top');
      }
    };
  });

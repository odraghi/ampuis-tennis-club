'use strict';

/**
 * @ngdoc overview
 * @name atcApp
 * @description
 * # atcApp
 *
 * Main module of the application.
 */
angular
  .module('atcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .when('/reservation', {
        templateUrl: 'views/reservation.html',
        controller: 'ReservationCtrl',
        controllerAs: 'reservation'
      })
      .when('/championnats', {
        templateUrl: 'views/championnats.html',
        controller: 'ChampionnatsCtrl',
        controllerAs: 'championnats'
      })
      .when('/tournois', {
        templateUrl: 'views/tournois.html',
        controller: 'TournoisCtrl',
        controllerAs: 'tournois'
      })
      .when('/loisirs', {
        templateUrl: 'views/loisirs.html',
        controller: 'LoisirsCtrl',
        controllerAs: 'loisirs'
      })
      .when('/ecole', {
        templateUrl: 'views/ecole.html',
        controller: 'EcoleCtrl',
        controllerAs: 'ecole'
      })
      .when('/tarifs', {
        templateUrl: 'views/tarifs.html',
        controller: 'TarifsCtrl',
        controllerAs: 'tarifs'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .when('/president', {
        templateUrl: 'views/president.html',
        controller: 'PresidentCtrl',
        controllerAs: 'president'
      })
      .when('/codir', {
        templateUrl: 'views/codir.html',
        controller: 'CodirCtrl',
        controllerAs: 'codir'
      })
      .when('/installations', {
        templateUrl: 'views/installations.html',
        controller: 'InstallationsCtrl',
        controllerAs: 'installations'
      })
      .when('/histoire', {
        templateUrl: 'views/histoire.html',
        controller: 'HistoireCtrl',
        controllerAs: 'histoire'
      })
      .when('/presse', {
        templateUrl: 'views/presse.html',
        controller: 'PresseCtrl',
        controllerAs: 'presse'
      })
      .when('/photo', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl',
        controllerAs: 'photo'
      })
      .when('/partenaires', {
        templateUrl: 'views/partenaires.html',
        controller: 'PartenairesCtrl',
        controllerAs: 'partenaires'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

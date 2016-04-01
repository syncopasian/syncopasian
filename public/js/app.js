angular.module('syncopasian', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about'
    })
    .state('members', {
      url: '/members',
      templateUrl: 'members'
    })
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'gallery'
    })
    .state('performances', {
      url: '/performances',
      templateUrl: 'performances'
    })
    .state('auditions', {
      url: '/auditions',
      templateUrl: 'auditions'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact'
    })
  $urlRouterProvider.otherwise('home');
}]);

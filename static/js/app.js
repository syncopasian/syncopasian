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
    .state('current-members', {
	  url: '/current-members',
	  templateUrl: 'current-members'
    })
    .state('alumni', {
      url: '/alumni',
      templateUrl: 'alumni'
    })
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'gallery'
    })
    .state('news', {
      url: '/news',
      templateUrl: 'news'
    })
    .state('auditions', {
      url: '/auditions',
      templateUrl: 'auditions'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact'
    })
    .state('discography', {
      url: '/discography',
      templateUrl: 'discography'
    })
  $urlRouterProvider.otherwise('home');
}]);

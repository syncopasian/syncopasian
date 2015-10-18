angular.module('syncopasian', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/about.html'
    })
    .state('members', {
      url: '/members',
      templateUrl: '/views/members.html'
    })
    .state('gallery', {
      url: '/gallery',
      templateUrl: '/views/gallery.html'
    })
    .state('performances', {
      url: '/performances',
      templateUrl: '/views/performances.html'
    })
    .state('auditions', {
      url: '/auditions',
      templateUrl: '/views/auditions.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/views/contact.html'
    })
  $urlRouterProvider.otherwise('home');
}]);
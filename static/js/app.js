var syncopasianApp = angular.module('syncopasian', ['ui.router']);

syncopasianApp.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);

syncopasianApp.config([
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

syncopasianApp.factory('membersFactory', ['$http', function($http) {
  return {
    get: function () {
      return $http.get('data/members.json');
    }
  };
}]);

syncopasianApp.controller('MemberListController', ['$scope', 'membersFactory', function MemberListController($scope, membersFactory) {
  membersFactory.get().then(function (l) {
    $scope.members = l.data;
  });
}]);

syncopasianApp.controller('ShowAuditionController', function($scope) {
  $scope.show = false;
});

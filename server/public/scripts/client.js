var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: '/views/info.html',
      controller: 'InfoController as IC',
    })
    .when('/repos', {
      templateUrl: '/views/repos.html',
      controller: 'ReposController as RC'
    })
    .when('/blog', {
      templateUrl: '/views/blog.html'
    })
    .when('/about', {
      templateUrl: '/views/about.html'
    })
    .when('/projects', {
      templateUrl: '/views/projects.html',
      controller: 'ProjectsController as PC'
    })
    .when('/projects/jump', {
      templateUrl: 'views/projects/jump.html'
    })
    .when('/projects/grow-north', {
      templateUrl: 'views/projects/grow-north.html'
    })
    .when('/projects/market-mania', {
      templateUrl: 'views/projects/market-mania.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});

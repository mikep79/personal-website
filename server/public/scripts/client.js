var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
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
    .when('/projects', {
      templateUrl: '/views/projects.html',
      controller: 'ProjectsController as PC'
    })
    .when('/blog', {
      templateUrl: '/views/blog.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});

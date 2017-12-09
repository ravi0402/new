angular.module('MyApp', ['ngRoute'])
.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl'
  })
  .when('/tees', {
    templateUrl: 'views/tees.html',
    controller: 'MainCtrl'
  })
  .when('/cases', {
    templateUrl: 'views/case.html',
    controller: 'MainCtrl'
  })
  .when('/mugs', {
    templateUrl: 'views/mugs.html',
    controller: 'MainCtrl'
  })
  .when('/trophies', {
    templateUrl: 'views/trophies.html',
    controller: 'MainCtrl'
  })
  .when('/medals', {
    templateUrl: 'views/medals.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

}]);
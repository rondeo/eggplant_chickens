var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/admin', {
      templateUrl: 'assets/views/routes/admin.html',
      controller: 'AdminController'
    }).
    when('/chickform', {
      templateUrl: 'assets/views/routes/chickform.html',
      controller: 'ChickFormController'
    }).
      otherwise({
        redirectTo: 'chickform'
      })


}]);

let petApp = angular.module('petApp', ['ngRoute']);

petApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.view.html',
    }).when('/dashboard', {
        templateUrl: 'views/dashboard.view.html'
    }).when( '/manage', {
        templateUrl: 'views/manage.view.html',
    }).otherwise({
        template: `<h4>404 page not found</h4>`
    });
}); //end config
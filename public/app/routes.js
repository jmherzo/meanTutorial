// console.log("Testing route config")
// console.log('Testing user routes');
// When the want to go to an specific url we use $routeProvider
var appRoutes = angular.module('appRoutes',['ngRoute']);

appRoutes.config(['$routeProvider','$locationProvider',($routeProvider,$locationProvider) => { 
    $routeProvider 
    .when("/",{
        templateUrl: 'app/views/pages/home.html',
        controller : 'mainController'
    })
    .when("/about",{
        templateUrl: 'app/views/pages/about.html',
        controller : 'aboutController'
    })
    .when("/register",{
        templateUrl: 'app/views/pages/users/register.html',
        controller : 'regController',
        controllerAs : 'register'
    })
    .otherwise({
        redirectTo: '/'
    });

    // To know this google "angular nobase" :  https://docs.angularjs.org/error/$location/nobase
    $locationProvider
    .html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

// Based on tutorial found in: https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating

appRoutes.controller('mainController',function ($scope) {
    $scope.message = 'Hello from home route';
});

appRoutes.controller('aboutController',function ($scope) {
    $scope.message = 'Hello from about route';
});

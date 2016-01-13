'use strict';

angular.module("DogeCalc",['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    // $locationProvider.html5Mode(true);
    $routeProvider.otherwise(
        {redirectTo: '/calc'}
    );
}
]);
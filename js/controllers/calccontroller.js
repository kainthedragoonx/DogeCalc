"use strict";

angular.module('DogeCalc')
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/calc', {
        templateUrl: 'templates/calc.html',
        controller: 'CalcController'
    }) 
}])
.controller('CalcController',['$scope','SweetFactory',function($scope, SweetFactory){
    $scope.test = 'O snap!';
    $scope.displayedOutput='';
    $scope.runningTotal=0;
     $scope.output = '';
     $scope.randomnumbers=[1,2,3,4,5,6,7,8,9,0];
    
    
    $scope.numericInput = function(n){
        $scope.output += n;
    };
    
    $scope.sweetOuput = function()
    {
        return SweetFactory.sweetFunction();
    }
    
    $scope.lessSweetOutput = function()
    {
        return SweetFactory.lessSweetFunction();
    }
    
    $scope.operatorInput = function(opp){
        var fancyNumber = Number($scope.output);
        
        switch(opp)
        {
           case '+':
           $scope.runningTotal += fancyNumber;
           break;
           case '-':
           $scope.runningTotal -= fancyNumber;
           break;
           case '/':
           $scope.runningTotal /= fancyNumber;
           break;
           case '*':
           $scope.runningTotal *= fancyNumber;
           break;        
        }
        
        $scope.output = '';
    };
}]);
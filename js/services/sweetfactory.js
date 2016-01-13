

angular.module('DogeCalc').factory('SweetFactory', [function(){
   var sweetFunction = function(){
       return "Are you a bad enough dude to save the president?";
   }; 
   
   var lessSweetFunction = function(){
       return "We are super awesome, but not bad enough dudes!";           
   };
   
   return {
       sweetFunction:sweetFunction, 
       lessSweetFunction: lessSweetFunction
   }
}])
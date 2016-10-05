angular.module("ticketSystem", ["ngRoute","controller"])

.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl : "main.html",
    controller:"firstCtrl"
  })
  .when('/ticket', {
	templateUrl: 'ticket.html',
	controller: 'taskCtrl'
  });
})

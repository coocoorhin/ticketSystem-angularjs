angular.module('loginApp').config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES',
function($stateProvider, $urlRouterProvider, USER_ROLES) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  
  // Now set up the states
  $stateProvider
  	.state('home', {
      url: "/",
      templateUrl: "home.html",
      data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      },
      controller:'taskCtrl'
    })
  	.state('addTask', {
      url: "/addTask",
      templateUrl: "addTask.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
      },
      controller:'taskCtrl'   	  
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "state2.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
      }
    })
    .state('adminState', {
        url: "/adminState",
        templateUrl: "adminState.html",
  	  data: {
            authorizedRoles: [USER_ROLES.admin]
        }
      })
    ;
}]);
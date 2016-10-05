angular.module('controller',[])

.controller("taskCtrl", function($scope,$log,$http, passedData) {


    $http.get('./js/popData.php')
    .success(function(data) {
      $scope.tasks = data;
      passedData.test = data;
    })

    $scope.pushData = function($params) {
      $http.post('./js/pushData.php',{'title':$params.title, 'description':$params.description})
      .success(function (response) {
      $scope.tasks = response;
      passedData.test = response;
      $scope.frm.title = "";
      $scope.frm.description = "";
      })
    }

    $scope.removeData = function($params) {
      var cnfrm = confirm("Are you sure to delete?");
      if(cnfrm) {
        $http.post('./js/removeData.php', {'id':$params})
        .success(function(data) {
          $scope.tasks = data;
          passedData.test = data;
        })
        .error(function(err) {
          $log.error(err);
        })
      } else {
        // 
      }
    }


    $scope.passedData = passedData;
})

.factory('passedData',function(){
	return{test:''};
})

.controller('firstCtrl',function($scope, passedData){
	$scope.passedData = passedData;
})


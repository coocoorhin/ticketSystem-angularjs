angular.module('loginApp')

.controller('taskCtrl',function($scope, $log, $http, passedData){
	$http.get('./js/popData.php')
    .success(function(data) {
      $scope.tasks = data;
      passedData.test = data;
      console.log(passedData.test);
    })

    $scope.pushData = function($params) {
      $http.post('./js/pushData.php',{'title':$params.title, 'description':$params.description})
      .success(function (response) {
      $scope.tasks = response;
      passedData.test = response;
      $scope.frm.title = "";
      $scope.frm.description = "";
      Materialize.toast('Task Added!', 4000);
      })
    }

    $scope.removeData = function($params) {
      var cnfrm = confirm("Are you sure to delete?");
      if(cnfrm) {
        $http.post('./js/removeData.php', {'id':$params})
        .success(function(data) {
          $scope.tasks = data;
          passedData.test = data;
          Materialize.toast('Deleted!', 4000);
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
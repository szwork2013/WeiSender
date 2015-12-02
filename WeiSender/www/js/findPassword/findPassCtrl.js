findPassModule
.controller('FindPassCtrl',['$scope',function($scope){
	$scope.findPass={
		status:0
	}
	$scope.ChangePage=ChangePage;
	function ChangePage(){
		if($scope.findPass.status==0){
			$scope.findPass.status=1;
		}else if($scope.findPass.status==1){
			$scope.findPass.status=2;
		}else if($scope.findPass.status==2){
			$scope.findPass.status==0;
			$scope.GoLoginback();
		}
	}
}])
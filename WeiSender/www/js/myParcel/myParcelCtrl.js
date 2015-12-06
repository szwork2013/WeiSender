myParcelModule
.controller('MyParcelCtrl',['$scope','$state',function($scope,$state){
	$scope.GoHomePage=GoHomePage;
	function GoHomePage(){
		$state.go('home')
	}
}])

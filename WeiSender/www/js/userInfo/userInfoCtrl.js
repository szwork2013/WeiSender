userInfoModule.controller('UserInfoCtrl',['$scope','$state',function($scope,$state){
	$scope.Exit=Exit;
	$scope.Shared=Shared;
	$scope.GoHomePage=GoHomePage;
	function Exit(){
		
	};
	function Shared(){
		
	};
	function GoHomePage(){
		$state.go('home');
	};
}])